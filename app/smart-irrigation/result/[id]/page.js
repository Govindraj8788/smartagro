import connectDB from "@/lib/db";
import { CropRequest } from "@/models/CropRequest";

export default async function ResultPage({ params }) {
  await connectDB();

  const data = await CropRequest.findById(params.id);

  return (
    <div className="min-h-screen p-10 bg-green-50">
      <h1 className="text-3xl font-bold mb-6">AI Crop Advisory</h1>

      <div className="bg-white p-8 rounded-xl shadow-xl whitespace-pre-wrap">
        {data.aiResponse}
      </div>
    </div>
  );
}