import React from "react";
import { useCareerHealth } from "../hooks/useCareerHealth";

export default function InsightPanel() {
  const { aiInsights } = useCareerHealth();

  return (
    <section aria-labelledby="insight-panel-title" className="p-4 border rounded bg-blue-50">
      <h2 id="insight-panel-title" className="font-semibold mb-3">AI-Powered Career Insights</h2>
      <ul className="list-disc list-inside text-sm space-y-2">
        {aiInsights.map((insight, i) => (
          <li key={i}>{insight}</li>
        ))}
      </ul>
    </section>
  );
}
