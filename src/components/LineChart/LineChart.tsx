"use client";

import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";
import { LineChartData, transformDataForChart } from "./utils";

export const LineChart = () => {
	const [data, setData] = useState<LineChartData[]>([]);

	useEffect(() => {
		fetch("https://api.coronavirus.data.gov.uk/v1/data")
			.then((response) => response.json())
			.then((json) => {
				const transformedData = transformDataForChart(json);
				setData(transformedData);
			})
			.catch((error) => {
				console.log("Couldn't load data", error);
			});
	}, []);

	const config = {
		data,
		group: true,
		xField: "date",
		yField: "value",
		style: {
			lineWidth: 2,
		},
	};

	return data.length === 0 ? "Loading..." : <Line {...config} />;
};
