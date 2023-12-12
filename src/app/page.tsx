"use client";

import { Col, Row } from "antd";

import { PageTitle } from "@components/PageTitle";
import { Options } from "@components/Options";

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
		</>
	);
}
