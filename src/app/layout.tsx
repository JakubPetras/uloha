"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Layout, theme } from "antd";

import StyledComponentsRegistry from "@providers/AntdRegistry";
import { AppBar } from "@/widgets/AppBar";

const inter = Inter({ subsets: ["latin"] });

const { Content } = Layout;
const appTitle = "App title";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<Layout>
						<AppBar title={appTitle} />
						<Content>{children}</Content>
					</Layout>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
