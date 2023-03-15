import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponse, IEvent } from "../../models/models";

const _apiBase = "https://footballista.ru/api/";
const _apiEvents = (offset: number, limit?: number) =>
  `seasons/5099/calendar_paginated?limit=${
    limit ? limit : 10
  }&offset=${offset}`;

export const footballApi = createApi({
  reducerPath: "football/api",
  baseQuery: fetchBaseQuery({
    baseUrl: _apiBase,
  }),
  endpoints: (build) => ({
    getEvents: build.query<ServerResponse<IEvent>, number>({
      query: _apiEvents,
    }),
  }),
});

export const { useGetEventsQuery, useLazyGetEventsQuery } = footballApi;
