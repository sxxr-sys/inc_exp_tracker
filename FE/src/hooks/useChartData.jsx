import { useState, useCallback } from "react";
import { axiosInstance } from "@/lib";

export const useChartData = () => {
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  const fetchChartData = useCallback(async () => {
    try {
      const [barResponse, pieResponse] = await Promise.all([
        axiosInstance.get("/record/barChart"),
        axiosInstance.get("/record/pieChart"),
      ]);

      setBarChartData(barResponse.data);

      const formattedPieData = pieResponse.data.map((item) => ({
        ...item,
        fill: `var(--color-${item.categoryname})`,
      }));
      
      setPieChartData(formattedPieData);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  }, []);

  return { barChartData, pieChartData, fetchChartData };
};
