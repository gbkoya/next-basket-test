import { fetcherApi } from "../fetcherApi";

export const locationApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      getStatesInNigeria: build.query({
        query: () => ({ url: "states" }),
      }),
      fetchLGAInState: build.mutation({
        query: (state_id) => ({ url: `states/lgas?state_id=${state_id}` }),
      }),
    };
  },
});

export const { useGetStatesInNigeriaQuery, useFetchLGAInStateMutation } = locationApi;
