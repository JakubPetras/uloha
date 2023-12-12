"use client";

import {
	DownloadOutlined,
	FileTextOutlined,
	FilterOutlined,
} from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";

const { Text } = Typography;

const btnStyle = { borderColor: "#fff", color: "#304560" };
const iconStyle = { color: "#098278" };
const btnSize = "large";

// icons are improvised as they don't exist in @ant-design/icons library
export const Options = () => {
	return (
		<Flex gap="large" wrap="wrap">
			<Button size={btnSize} style={btnStyle}>
				Export to PDF
				<DownloadOutlined style={iconStyle} />
			</Button>
			<Button size={btnSize} style={btnStyle}>
				Notes&nbsp;<Text style={{ color: "grey" }}>(3)</Text>
				<FileTextOutlined style={iconStyle} />
			</Button>
			<Button
				size={btnSize}
				style={{ ...btnStyle, display: "flex", alignItems: "center" }}
			>
				Filter&nbsp;
				<span
					style={{
						color: "#fff",
						backgroundColor: "#098278",
						borderRadius: "50%",
						fontSize: "0.7rem",
						width: "20px",
						height: "20px",
					}}
				>
					9+
				</span>
				<FilterOutlined style={iconStyle} />
			</Button>
		</Flex>
	);
};
