import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";
import { parseJwt } from "@/features/auth/parseJwt";
import { useRecentCategoryStore } from "@/store/useRecentCategoryStore";

export function useRecentCategory() {
  const setRecentSubCategory = useRecentCategoryStore(
    (state) => state.setRecentSubCategory
  );

  return useQuery({
    queryKey: ["recentSubCategory"],
    queryFn: async () => {
      const stored = localStorage.getItem("loginInfo");
      if (!stored) return null;

      const { accessToken } = JSON.parse(stored);
      const payload = parseJwt(accessToken);

      const res = await api.get(`/view/recent-subcat/${payload.id}`);
      const value = res.data.recentSubCategory;

      setRecentSubCategory(value);
      return value;
    },
  });
}
