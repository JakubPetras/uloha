"use client";

import { Layout } from "antd";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@providers/AntdRegistry";
import { AppBar } from "@/widgets/AppBar";

import "./globals.css";

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
						<Content
							style={{
								padding: "2rem 7rem",
								minHeight: "calc(100vh - 64px)",
							}}
						>
							{children}
						</Content>
					</Layout>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
