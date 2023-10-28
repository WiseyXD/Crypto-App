import { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import Shimmer from "./Shimmer";

import { useGetCryptosQuery } from "../Services/CryptoAPI";
import { useEffect } from "react";

export default function Cryptocurrencies({ simplified }) {
	const count = simplified ? 10 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const [cryptos, setCryptos] = useState([]);
	const [search, setSearch] = useState("");
	console.log(cryptos);

	useEffect(() => {
		const filteredList = cryptosList?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(search.toLowerCase())
		);
		setCryptos(filteredList);
	}, [cryptosList, search]);

	if (isFetching) {
		return <Shimmer />;
	}

	return (
		<>
			{!simplified && (
				<div className="search-crypto">
					<Input
						placeholder="Search Cryptocurrency"
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
			)}

			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos?.map((currency, i) => (
					<Col className="crypto-card" key={i} xs={24} sm={12} lg={6}>
						<Link to={`/crypto/${currency.uuid}`}>
							<Card
								title={`${currency.rank} . ${currency.name}`}
								extra={
									<img
										className="crypto-image"
										src={currency.iconUrl}
									/>
								}
								hoverable
							>
								<p>Price : {millify(currency.price)}</p>
								<p>
									Market Cap : {millify(currency.marketCap)}
								</p>
								<p>
									Daily Change : {millify(currency.change)}%
								</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	);
}
