"use client";

import { useEffect, useState } from "react";
import { Column } from "@ant-design/plots";
import { ChartData, transformDataForChart } from "./utils";

export const ColumnChart = () => {
	const [data, setData] = useState<ChartData[]>([]);

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
		yField: "deaths",
		colorField: "name",
		style: {
			inset: 5,
		},
	};

	return data.length === 0 ? "Loading..." : <Column {...config} />;
};
