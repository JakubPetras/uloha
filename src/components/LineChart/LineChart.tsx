"use client";

import { useEffect, useState } from "react";
import { LineConfig } from "@ant-design/plots";
import { LineChartData, transformDataForChart } from "./utils";

// import of Line directly from library, thrown issue document not found
let LineComp: (props: LineConfig) => React.JSX.Element;

if (typeof window !== "undefined") {
	const { Line } = require("@ant-design/plots");
	LineComp = Line;
}

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

	return data.length === 0 ? "Loading..." : <LineComp {...config} />;
};
