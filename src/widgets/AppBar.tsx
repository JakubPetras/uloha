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
					boxShadow: "0 6px 5px 2px rgba(0,0,0,0.1)",
				}}
			>
				<div>
					<Title
						level={3}
						style={{ color: "#305651", margin: "0px", fontWeight: "bold" }}
					>
						{title}
					</Title>
				</div>
			</Header>
		</>
	);
};
