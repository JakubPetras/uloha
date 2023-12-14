"use client";

import { Col, Row, Card, Typography, Divider } from "antd";

import { PageTitle } from "@components/PageTitle";
import { Options } from "@components/Options";
import { ColumnChart } from "@components/ColumnChart";
import { LineChart } from "@components/LineChart";
import { CardActions } from "@components/CardActions";

const { Title } = Typography;

const chartTitleStyle = {
	fontWeight: "bold",
	color: "#304560",
	paddingTop: "10px",
};

const noSidePaddingsStyle = { paddingLeft: 0, paddingRight: 0 };

export default function Home() {
	return (
		<>
			<Row>
				<Col span={4}>
					<PageTitle text="Page title" />
				</Col>
				<Col
					span={12}
					offset={8}
					style={{ display: "flex", justifyContent: "flex-end" }}
				>
					<Options />
				</Col>
			</Row>
			<Row gutter={16} style={{ paddingTop: "20px" }}>
				<Col span={12}>
					<Card
						title={
							<Title level={3} style={chartTitleStyle}>
								Chart title
							</Title>
						}
						style={noSidePaddingsStyle}
						bodyStyle={noSidePaddingsStyle}
					>
						<ColumnChart />
						<Divider />
						<CardActions />
					</Card>
				</Col>
				<Col span={12}>
					<Card
						title={
							<Title level={3} style={chartTitleStyle}>
								Chart title
							</Title>
						}
						style={noSidePaddingsStyle}
						bodyStyle={noSidePaddingsStyle}
					>
						<LineChart />
						<Divider />
						<CardActions />
					</Card>
				</Col>
			</Row>
		</>
	);
}
