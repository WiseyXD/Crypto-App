// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {
//       safeSearch: 'Off',
//       textFormat: 'Raw'
//     },
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': '9da628d69cmsh1ac86bec71a331dp19d1b8jsn97f010556354',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

// export const newsApi = createApi({
// 	reducerPath: "newsApi",
// 	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
// 	endpoints: (builder) => ({
// 		getNews: builder.query({
// 			query: () => `/news`,
// 		}),
// 	}),
// });

export const newsApi = createApi({
	reducerPath: "newsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		prepareHeaders: (headers, { getState }) => {
			// const token = getState().auth.token;

			// if (token) {
			// 	headers.set("Authorization", `Bearer ${token}`);
			// }

			headers.set("X-BingApis-SDK", "true");
			headers.set(
				"X-RapidAPI-Key",
				"9da628d69cmsh1ac86bec71a331dp19d1b8jsn97f010556354"
			);
			headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getNews: builder.query({
			query: ({ newsCategory, count }) =>
				`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`,
		}),
	}),
});

export const { useGetNewsQuery } = newsApi;
