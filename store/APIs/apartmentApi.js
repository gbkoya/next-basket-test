import { fetcherApi } from "../fetcherApi";

export const locationApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      getApartmentByTenantID: build.query({
        query: (propertyId) => ({
          url: `get-tenants-by-property-or-apartment-id?property_id=${propertyId}`,
        }),
      }),
      getAapartmentDetailsByTenantID: build.query({
        query: (tenant_id) => ({
          url: `get-apartment-by-tenant-id/${tenant_id}`,
        }),
      }),
      fetchAllAapartmentByPropertyID: build.mutation({
        query: (propertyId) => ({
          url: `property/${propertyId}/apartments`,
        }),
      }),
      addApartment: build.mutation({
        query: (body) => ({ url: "add-apartment", method: "post", body }),
        invalidatesTags: ["ForApartment"],
      }),
      editApartment: build.mutation({
        query: ({ apartment_id, body }) => ({
          url: `edit-apartment/${apartment_id}`,
          method: "post",
          body,
        }),
        invalidatesTags: ["ForApartment"],
      }),
      deleteApartmentImage: build.mutation({
        query: (apartment_id) => ({
          url: `delete-apartment-image/${apartment_id}`,
          method: "delete",
        }),
        invalidatesTags: ["ForApartment"],
      }),
      getPropertyApartment: build.query({
        query: (property_id) => ({
          url: `add-apartment`,
        }),
        providesTags: ["ForApartment"],
      }),
      fetchPropertyApartment: build.mutation({
        query: (property_id) => ({
          url: `property/${property_id}/apartments-for-landlord`,
        }),
      }),
      //others
      assignProperty: build.mutation({
        query: (body) => ({
          url: "assign-property",
          method: "post",
          body,
        }),
      }),
      addApartmentAgreement: build.mutation({
        query: (body) => ({
          url: "add-apartment-agreement",
          method: "post",
          body,
        }),
      }),
    };
  },
});

export const {
  useGetApartmentByTenantIDQuery,
  useGetAapartmentDetailsByTenantIDQuery,
  useFetchAllAapartmentByPropertyIDMutation,

  useAddApartmentMutation,
  useGetPropertyApartmentQuery,
  useDeleteApartmentImageMutation,
  useEditApartmentMutation,
  useAssignPropertyMutation,
  useAddApartmentAgreementMutation,
  useFetchPropertyApartmentMutation,
} = locationApi;
