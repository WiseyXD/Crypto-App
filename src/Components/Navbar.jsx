import { useState } from "react";
import { Typography, Button, Menu, Avatar } from "antd";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import icon from "../assets/Images/cryptocurrency.png";
import { useEffect } from "react";

export default function Navbar() {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize < 768) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src={icon} size="large" />
				<Typography.Title level={2} className="logo">
					<Link to="/">Cryptoverse</Link>
				</Typography.Title>
				<Button
					className="menu-control-container"
					onClick={() => setActiveMenu(!activeMenu)}
				>
					<MenuOutlined />
				</Button>
			</div>
			{activeMenu && (
				<Menu theme="dark">
					<Menu.Item icon={<HomeOutlined />} key={1}>
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item icon={<FundOutlined />} key={2}>
						<Link to="/cryptocurrencies">Cryptocurrencies</Link>
					</Menu.Item>
					<Menu.Item icon={<MoneyCollectOutlined />} key={3}>
						<Link to="/exchanges">Exchanges</Link>
					</Menu.Item>
					<Menu.Item icon={<BulbOutlined />} key={4}>
						<Link to="/news">News</Link>
					</Menu.Item>
				</Menu>
			)}
		</div>
	);
}
