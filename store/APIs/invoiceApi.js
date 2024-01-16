import { fetcherApi } from "../fetcherApi";

export const invoiceApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      fetchAllInvoice: build.mutation({
        query: ({ property_id, landlord_id }) => ({
          url: `get-all-invoice?landlord_id=${landlord_id}&property_id=${property_id}`,
        }),
      }),
      createInvoiceByAdmin: build.mutation({
        query: (body) => ({
          url: `create-invoice`,
          method: "post",
          body,
        }),
      }),
      createInvoiceCategory: build.mutation({
        query: (body) => ({
          url: "create-invoice-category",
          method: "post",
          body,
        }),
        invalidatesTags: ["ForInvoiceCategory"],
      }),
      getAllInvoiceCategory: build.query({
        query: () => ({
          url: "get-all-invoice-category",
        }),
        providesTags: ["ForInvoiceCategory"],
      }),
      deleteInvoiceCategory: build.mutation({
        query: (body) => ({
          url: `delete-invoice-category`,
          method: "delete",
          body,
        }),
        invalidatesTags: ["ForInvoiceCategory"],
      }),
    };
  },
});

export const {
  useFetchAllInvoiceMutation,
  useCreateInvoiceByAdminMutation,
  useCreateInvoiceCategoryMutation,
  useDeleteInvoiceCategoryMutation,
  useGetAllInvoiceCategoryQuery,
} = invoiceApi;
