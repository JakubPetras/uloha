export type CovidData = {
	length: number;
	maxPageLimit: number;
	totalRecords: number;
	data: Data[];
	requestPayload: RequestPayload;
	pagination: Pagination;
};

type Pagination = {
	current: string;
	next?: any;
	previous?: any;
	first: string;
	last: string;
};

type RequestPayload = {
	structure: Structure;
	filters: Filter[];
	page: number;
};

type Filter = {
	identifier: string;
	operator: string;
	value: string;
};

type Structure = {
	date: string;
	areaName: string;
	areaCode: string;
	confirmedRate: string;
	confirmedNew: string;
	confirmed: string;
	deathNew: string;
	death: string;
	deathRate: string;
	latestBy: string;
};

type Data = {
	date: string;
	areaName: string;
	areaCode: string;
	confirmedRate?: number;
	latestBy: number;
	confirmed: number;
	deathNew: number;
	death?: number;
	deathRate: number;
};
