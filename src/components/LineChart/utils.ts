import { CovidData } from "@/types/covidData";

export type LineChartData = { date: string; value: number };

export const transformDataForChart = ({ data }: CovidData) => {
	const reduceData = data.slice(0, 5);

	const transformedData = reduceData.reduce((chartData, data) => {
		const { date, confirmed } = data;
		return [...chartData, { date, value: confirmed }];
	}, [] as LineChartData[]);
	return transformedData;
};
