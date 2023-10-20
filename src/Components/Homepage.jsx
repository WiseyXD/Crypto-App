import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Typography, Statistic, Row, Col } from "antd";
import { useGetCryptosQuery } from "../Services/CryptoAPI";

const { Title } = Typography;

export default function Homepage() {
	const { data, isFetching } = useGetCryptosQuery();
	console.log(data);
	const globalStats = data?.data?.stats;
	return (
		<>
			<Title level={2} className="heading">
				Global Crypto Stats
			</Title>
			<Row>
				<Col span={12}>
					<Statistic
						title="Total Cryptocurrencies"
						value={globalStats?.total}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Exchanges"
						value={millify(globalStats?.totalExchanges)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Market Cap"
						value={millify(globalStats?.totalMarketCap)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total 24h Volume"
						value={millify(globalStats?.total24hVolume)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Markets"
						value={millify(globalStats?.totalMarkets)}
					/>
				</Col>
			</Row>
		</>
	);
}
