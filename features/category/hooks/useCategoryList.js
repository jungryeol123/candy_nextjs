export function useCategoryList() {
  return useQuery({
    queryKey: ["categoryList"],
    queryFn: async () => {
      const res = await api.get("/category/list");
      return res.data;
    },
  });
}
