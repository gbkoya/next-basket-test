import { fetcherApi } from "../fetcherApi";
export const authApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      loginAdmin: build.mutation({
        query: (body) => ({ url: "admin-api-login", method: "post", body }),
        invalidatesTags: ["ForAuth"],
      }),
      logoutUser: build.mutation({
        query: () => ({ url: "api-logout", method: "get" }),
        invalidatesTags: ["ForAuth"],
      }),
      getAuthUser: build.query({
        query: () => "/user",
        providesTags: ["ForAuth"],
      }),
    };
  },
});

export const { useLoginAdminMutation, useLogoutUserMutation, useGetAuthUserQuery } = authApi;



