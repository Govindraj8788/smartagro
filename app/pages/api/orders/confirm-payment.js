// pages/api/orders/confirm-payment.js
import crypto from "crypto";
import fs from "fs";
import path from "path";

const ORDERS_FILE = path.join(process.cwd(), "data", "orders.json");

function readOrders(){
  try { return JSON.parse(fs.readFileSync(ORDERS_FILE, "utf8")); } catch { return []; }
}
function writeOrders(arr){ fs.writeFileSync(ORDERS_FILE, JSON.stringify(arr, null,2)); }

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { orderId, razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
  const secret = process.env.RAZOR_KEY_SECRET;

  const generated = crypto.createHmac('sha256', secret).update(razorpay_order_id + "|" + razorpay_payment_id).digest('hex');
  if (generated !== razorpay_signature) {
    return res.status(400).json({ ok: false, message: "Invalid signature" });
  }

  const all = readOrders();
  const idx = all.findIndex(o => o.id === orderId);
  if (idx === -1) return res.status(404).json({ ok:false, message: "Order not found" });

  all[idx].status = "paid";
  all[idx].payment = { razorpay_payment_id, razorpay_order_id };
  writeOrders(all);

  // optionally: send email/sms here

  return res.json({ ok: true });
}
