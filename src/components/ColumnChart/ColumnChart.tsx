"use client";

import { useEffect, useState } from "react";
import { ChartData, transformDataForChart } from "./utils";
import { ColumnConfig } from "@ant-design/plots";
import React from "react";

// import of Column directly from library, thrown issue document not found
let ColumnComp: (props: ColumnConfig) => React.JSX.Element;

if (typeof window !== "undefined") {
	const { Column } = require("@ant-design/plots");
	ColumnComp = Column;
}

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

	return data.length === 0 ? "Loading..." : <ColumnComp {...config} />;
};
