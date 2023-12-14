import { CovidData } from "@/types/covidData";

export type ChartData = { date: string; deaths: number; name: string };

export const transformDataForChart = ({ data }: CovidData) => {
	const reduceData = data.slice(0, 5);

	const transformedData = reduceData.reduce((chartData, data) => {
		const { date, deathNew, deathRate } = data;
		return [
			...chartData,
			{ date, name: "Death new", deaths: deathNew },
			{ date, name: "Death rate", deaths: deathRate },
		];
	}, [] as ChartData[]);
	return transformedData;
};
