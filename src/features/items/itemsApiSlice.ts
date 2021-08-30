import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const GW_API_URI = "https://api.guildwars2.com/v2";

interface Item {
  id: string;
  name: string;
  icon: string;
  rarity: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: GW_API_URI,
    prepareHeaders(headers) {
      // we don't need that but we can set some headers here if needed
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchItems: builder.query<Item[], number | void>({
        query(limit = 50) {
          return `/items?page=1000?page_size=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchItemsQuery } = apiSlice;
