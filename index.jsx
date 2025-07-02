import React from "react";
import HealthScoreSummary from "./components/HealthScoreSummary";
import TrendChart from "./components/TrendChart";
import InsightPanel from "./components/InsightPanel";

export default function CareerHealthDashboard() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">📊 AI Career Health Score Dashboard</h1>
      <HealthScoreSummary />
      <TrendChart />
      <InsightPanel />
    </div>
  );
}
