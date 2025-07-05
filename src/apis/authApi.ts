import trendyfashApi from ".";

export const authApi = trendyfashApi.injectEndpoints({
  endpoints: (builder) => ({
    getTemp: builder.query<void, void>({
      query: () => ({
        url: "auth/temp",
      }),
    }),
  }),
});

export const { useGetTempQuery } = authApi;
