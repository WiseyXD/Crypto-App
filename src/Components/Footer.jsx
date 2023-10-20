import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<div>
			<Typography.Title>
				Cryptoverse <br />
				All Rights Reserved
			</Typography.Title>
			<Space>
				<Link to="/">Home</Link>
				<Link to="/exchanges">Exchanges</Link>
				<Link to="/news">News</Link>
			</Space>
		</div>
	);
}
