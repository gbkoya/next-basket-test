import { fetcherApi } from "../fetcherApi";

export const propertyApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      getAllPropertyByLandlordID: build.mutation({
        query: (landlordId) => ({
          url: `/get-properties-by-landordid/${landlordId}`,
        }),
      }),
    };
  },
});

export const { useGetAllPropertyByLandlordIDMutation } = propertyApi;
