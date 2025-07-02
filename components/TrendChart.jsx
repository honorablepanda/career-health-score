import React from "react";
import { useCareerHealth } from "../hooks/useCareerHealth";

/**
 * Simple mock line chart to visualize career progress trends.
 * (You can replace with real chart lib later)
 */
export default function TrendChart() {
  const { progressData } = useCareerHealth();

  return (
    <section aria-labelledby="trend-chart-title" className="p-4 border rounded bg-white shadow">
      <h2 id="trend-chart-title" className="font-semibold mb-3">Career Progress Over Time</h2>
      <pre className="text-sm bg-gray-100 p-3 rounded overflow-auto">
        {JSON.stringify(progressData, null, 2)}
      </pre>
      {/* Replace with real chart (e.g. Chart.js, Recharts) */}
    </section>
  );
}
