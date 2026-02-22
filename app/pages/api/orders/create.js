// pages/api/orders/create.js
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const ORDERS_FILE = path.join(process.cwd(), "data", "orders.json");

function readOrders(){
  try {
    const raw = fs.readFileSync(ORDERS_FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
function writeOrders(arr){
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(arr, null, 2));
}

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { items, shipping = {}, currency = "INR" } = req.body;
  if (!items || !items.length) return res.status(400).json({ error: "No items" });

  // compute totals (simple)
  const subtotal = items.reduce((s, i) => s + (Number(i.priceNumeric || i.price || 0) * (i.qty||1)), 0);
  const shippingCost = 150; // example fixed
  const tax = Math.round(subtotal * 0.05); // example 5% GST
  const total = subtotal + shippingCost + tax;

  const order = {
    id: uuidv4(),
    items,
    shipping,
    currency,
    subtotal,
    shippingCost,
    tax,
    total,
    status: "created",
    createdAt: new Date().toISOString()
  };

  const all = readOrders();
  all.push(order);
  writeOrders(all);

  return res.status(200).json(order);
}
