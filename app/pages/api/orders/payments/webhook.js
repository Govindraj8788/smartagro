// pages/api/payments/webhook.js
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).end();
  const secret = process.env.RAZOR_KEY_SECRET;
  const payload = JSON.stringify(req.body);
  const signature = req.headers['x-razorpay-signature'];

  const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  if (expected !== signature) {
    console.error("Invalid webhook signature");
    return res.status(400).end();
  }

  const event = req.body;
  // handle events: payment.captured, payment.failed, order.paid etc
  console.log("Webhook event:", event.event);

  // TODO: update order status in DB accordingly
  res.status(200).json({ ok: true });
}
