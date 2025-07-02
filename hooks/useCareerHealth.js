import { useState } from "react";
import { mockCareerData } from "../mock/mockCareerData";

/**
 * Hook providing career health data and AI insights.
 */
export const useCareerHealth = () => {
  const [healthScore] = useState(mockCareerData.healthScore);
  const [strengths] = useState(mockCareerData.strengths);
  const [weaknesses] = useState(mockCareerData.weaknesses);
  const [progressData] = useState(mockCareerData.progressData);
  const [aiInsights] = useState(mockCareerData.aiInsights);

  return { healthScore, strengths, weaknesses, progressData, aiInsights };
};
