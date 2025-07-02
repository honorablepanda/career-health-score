import React from "react";
import { useCareerHealth } from "../hooks/useCareerHealth";

export default function HealthScoreSummary() {
  const { healthScore, strengths, weaknesses } = useCareerHealth();

  return (
    <section aria-labelledby="health-summary-title" className="p-4 border rounded bg-gray-50">
      <h2 id="health-summary-title" className="font-semibold mb-3">Overall Career Health Score</h2>
      <div className="text-4xl font-bold text-green-700">{healthScore} / 100</div>
      <div className="mt-4">
        <h3 className="font-semibold">Strengths:</h3>
        <ul className="list-disc list-inside mb-3">
          {strengths.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h3 className="font-semibold">Areas to Improve:</h3>
        <ul className="list-disc list-inside">
          {weaknesses.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
