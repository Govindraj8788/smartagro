// pages/api/payments/razorpay-create-order.js
import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { orderId, amount } = req.body;
  if (!orderId || !amount) return res.status(400).json({ error: "Missing" });

  const rzp = new Razorpay({
    key_id: process.env.RAZOR_KEY_ID,
    key_secret: process.env.RAZOR_KEY_SECRET
  });

  try {
    const order = await rzp.orders.create({
      amount: amount,
      currency: "INR",
      receipt: orderId,
      payment_capture: 1
    });
    return res.status(200).json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "rzp create failed" });
  }
}
