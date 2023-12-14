import { MessageOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Typography } from "antd";

const { Text } = Typography;

export const CardActions = () => {
	return (
		<Row>
			<Col span={2} style={{ display: "flex", justifyContent: "center" }}>
				<Avatar
					style={{ backgroundColor: "#87d068" }}
					icon={<UserOutlined />}
				/>
			</Col>
			<Col span={2} offset={20}>
				<Text style={{ fontSize: "1.2rem", color: "grey" }}>
					3 &nbsp;
					<MessageOutlined />
				</Text>
			</Col>
		</Row>
	);
};
