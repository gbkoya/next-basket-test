import { fetcherApi } from "../fetcherApi";

export const locationApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      getTenantByPropertyID: build.mutation({
        query: (propertyId) => ({
          url: `/get-tenants-by-property-or-apartment-id?property_id=${propertyId}`,
        }),
      }),
      getTenantDetail: build.query({
        query: (tenantId) => ({
          url: `/get-tenant-details?tenant_id=${tenantId}`,
        }),
      }),
      assignProperty: build.mutation({
        query: (body) => ({
          url: "assign-property",
          method: "post",
          body,
        }),
      }),
      shareDocumentWithTenant: build.mutation({
        query: (body) => ({
          url: "share-apartment-document-with-tenant",
          method: "post",
          body,
        }),
      }),
      getTenantTransaction: build.mutation({
        query: (tenant_id) => ({
          url: `get-tenant-transaction?tenant_id=${tenant_id}`,
        }),
      }),
    };
  },
});

export const {
  useGetTenantByPropertyIDMutation,
  useGetTenantDetailQuery,
  useAssignPropertyMutation,
  useShareDocumentWithTenantMutation,
  useGetTenantTransactionMutation,
} = locationApi;
