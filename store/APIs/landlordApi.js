import { fetcherApi } from "../fetcherApi";

export const locationApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      getAllLandlord: build.query({
        query: () => ({ url: "all-landlords" }),
      }),
      getAllLandlordDocument: build.query({
        query: (landlord_id) => ({
          url: `get-landlord-document?landlord_id=${landlord_id}`,
        }),
      }),
      addDocumentForLandlord: build.mutation({
        query: (body) => ({ url: "add-landlord-document", method: "post", body }),
      }),
      getLandlordDocumentResponse: build.query({
        query: (document_id) => ({
          url: `get-landlord-document-response?document_id=${document_id}`,
        }),
      }),
    };
  },
});

export const {
  useGetAllLandlordQuery,
  useAddDocumentForLandlordMutation,
  useGetAllLandlordDocumentQuery,
  useGetLandlordDocumentResponseQuery,
} = locationApi;
