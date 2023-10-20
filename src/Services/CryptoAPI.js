import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoAPIHeaders = {
	"X-RapidAPI-Key": "9da628d69cmsh1ac86bec71a331dp19d1b8jsn97f010556354",
	"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createReq = (url) => ({ url, headers: cryptoAPIHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: () => createReq("/coins"),
		}),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
// 	method: "GET",
// 	url: "https://coinranking1.p.rapidapi.com/coins",
// 	params: {
// 		referenceCurrencyUuid: "yhjMzLPhuIDl",
// 		timePeriod: "24h",
// 		"tiers[0]": "1",
// 		orderBy: "marketCap",
// 		orderDirection: "desc",
// 		limit: "50",
// 		offset: "0",
// 	},
// 	headers: {
// 		"X-RapidAPI-Key": "9da628d69cmsh1ac86bec71a331dp19d1b8jsn97f010556354",
// 		"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// 	},
// };
