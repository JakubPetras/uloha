"use client";

import { Layout, theme, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

type HeaderProps = {
	title: string;
};

export const AppBar = ({ title }: HeaderProps) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<>
			<Header
				style={{
					display: "flex",
					background: colorBgContainer,
					justifyContent: "start",
					alignItems: "center",
				}}
			>
				<div>
					<Title level={2} style={{ color: "#003E39", margin: "0px" }}>
						{title}
					</Title>
				</div>
			</Header>
		</>
	);
};
