"use client";

import { Typography } from "antd";

const { Title } = Typography;

type PageTitleProps = { text: string };

export const PageTitle = ({ text }: PageTitleProps) => {
	return (
		<Title level={3} style={{ color: "#304560" }}>
			{text}
		</Title>
	);
};
