import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useGetNewsQuery } from "../Services/CryptoNewsAPI";
import { useGetCryptosQuery } from "../Services/CryptoAPI";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useEffect } from "react";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImg = "https://i.ibb.co/Z11pcGG/cryptocurrency.png";
export default function News({ simplified }) {
	const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
	const { data } = useGetCryptosQuery(100);
	const { data: cryptoNews, isFetching } = useGetNewsQuery({
		newsCategory,
		count: simplified ? 6 : 20,
	});

	if (isFetching) return <Shimmer />;

	return (
		<Row gutter={[24, 24]}>
			{!simplified && (
				<Col span={24}>
					<Select
						showSearch
						className="select-news"
						placeholder="Select a Crypto"
						optionFilterProp="children"
						onChange={(value) => setNewsCategory(value)}
						filterOption={(input, option) =>
							option.children
								.toLowerCase()
								.indexOf(input.toLowerCase()) >= 0
						}
					>
						<Option value="Cryptocurency">Cryptocurrency</Option>
						{data?.data?.coins?.map((currency) => (
							<Option value={currency.name} key={currency.uuid}>
								{currency.name}
							</Option>
						))}
					</Select>
				</Col>
			)}
			{cryptoNews?.value.map((news, i) => (
				<Col xs={24} sm={12} lg={8} key={i}>
					<Card hoverable className="news-card">
						<a href={news.url} target="_blank" rel="noreferrer">
							<div className="news-image-container">
								<Title className="news-title" level={4}>
									{news.name}
								</Title>
								<img
									src={
										news?.image?.thumbnail?.contentUrl ||
										demoImg
									}
									alt=""
								/>
							</div>
							<p>
								{news.description.length > 100
									? `${news.description.substring(0, 100)}...`
									: news.description}
							</p>
							<div className="provider-container">
								<div>
									<Avatar
										src={
											news.provider[0]?.image?.thumbnail
												?.contentUrl || demoImg
										}
										alt=""
									/>
									<Text className="provider-name">
										{news.provider[0]?.name}
									</Text>
								</div>
								<Text>
									{moment(news.datePublished)
										.startOf("ss")
										.fromNow()}
								</Text>
							</div>
						</a>
					</Card>
				</Col>
			))}
		</Row>
	);
}
