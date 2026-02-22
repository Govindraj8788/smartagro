import { NextResponse } from "next/server";
import { CropRequest } from "../../models/CropRequest";
import connectDB from "../../lib/db";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body.cropName || !body.farmerName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🔥 TEMPORARY AI LOGIC (Rule-Based Smart Response)

    let diagnosis = "General fungal infection";
    let organicTreatment = "Neem oil spray (5ml per liter) every 7 days.";
    let irrigationAdvice = "Avoid overwatering. Ensure proper drainage.";
    let fertilizerAdvice = "Apply balanced NPK 10:10:10.";
    let prevention = "Maintain crop rotation and good airflow.";

    if (body.symptoms?.toLowerCase().includes("yellow")) {
      diagnosis = "Nitrogen deficiency";
      fertilizerAdvice = "Apply urea or nitrogen-rich fertilizer.";
    }

    if (body.symptoms?.toLowerCase().includes("white fungus")) {
      diagnosis = "Powdery mildew";
      organicTreatment =
        "Spray baking soda solution (1 tsp per liter) every 5 days.";
    }

    if (body.symptoms?.toLowerCase().includes("root rot")) {
      diagnosis = "Root rot disease";
      irrigationAdvice =
        "Reduce irrigation frequency and improve soil drainage.";
    }

    const aiResponse = `
🌿 SMARTAGRO AI Advisory Report

1️⃣ Disease Diagnosis:
${diagnosis}

2️⃣ Organic Treatment:
${organicTreatment}

3️⃣ Irrigation Advice:
${irrigationAdvice}

4️⃣ Fertilizer Recommendation:
${fertilizerAdvice}

5️⃣ Prevention Tips:
${prevention}

⚠️ Note: This is a temporary advisory system for testing.
`;

    await CropRequest.create({
      ...body,
      aiResponse,
    });

    return NextResponse.json({
      aiResponse,
    });

  } catch (error) {
    console.error("Temporary AI Error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}