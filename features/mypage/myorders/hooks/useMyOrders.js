"use client"
// features/order/hooks/useMyOrders.js
import { useState } from "react";
import Swal from "sweetalert2";
import { parseJwt } from "features/auth/parseJwt";
import { useOrdersStore } from "@/store/orderStore";
import { useMyOrdersQuery } from "@/features/mypage/myorders/hooks/useMyOrdersQuery";
import { orderAPI } from "../api/orderAPI";
import { useRouter } from "next/navigation";

export function useMyOrders(itemsPerPage = 4) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  
  // 🔹 로그인 User ID를 초기값에서 바로 계산
  const [userId] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("auth-storage");
      if (stored) {
        const { accessToken } = JSON.parse(stored).state;
        const payload = parseJwt(accessToken);
        return payload.id;
      }
    }
    return null;
  });

  // 🔹 Zustand 상태
  const {orders} = useOrdersStore();

  // 🔹 React Query (userId 준비될 때만 실행됨)
  const {ordersQuery, deleteMutation} = useMyOrdersQuery(userId);

  /** 주문 삭제 */
  const deleteOrder = async (orderCode) => {
    try {
      const res = await orderAPI.deleteOrder(userId, orderCode);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "삭제 완료",
          text: "주문이 삭제되었습니다.",
        });

        setOrders((prev) =>
          prev.filter((order) => order.orderCode !== orderCode)
        );
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "삭제 실패",
        text: "주문을 삭제할 수 없습니다.",
      });
    }
    ordersQuery.refetch();
    // console.log(userId, orderCode);
    
    // deleteMutation.mutate(userId, orderCode);
  };

  /** 페이지네이션 */
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const currentItems = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goProduct = (ppk) => {
    router.push(`/products/${ppk}`);
  }

  return {
    userId,
    orders,
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    deleteOrder,
    goProduct,
  };
}
