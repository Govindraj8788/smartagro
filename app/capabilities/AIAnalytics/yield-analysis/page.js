export const metadata = {
  title: "Yield Analysis | AI Analytics",
  description: "Analyze and predict crop yield using AI",
};

export default function YieldAnalysisPage() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">📊 Yield Analysis</h1>

      <p className="text-gray-600 mb-6">
        AI-driven yield analysis helps farmers estimate crop production
        based on historical and real-time data.
      </p>

      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Data Used</h3>
          <p>Weather, soil health, crop history</p>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Prediction</h3>
          <p>Expected yield and profit estimation</p>
        </div>
      </div>
    </section>
  );
}
