"use client";

import { useCartStore } from "@/store/cartStore";
import { useCartQuery } from "./useCartQuery";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { parseJwt } from "@/features/auth/parseJwt";

export function useCart() {
  const router = useRouter();

  const [userId, setUserId] = useState(null);

  const {
    cartList,
    totalPrice,
    totalDcPrice,
    shippingFee,
  } = useCartStore();

  // 🔹 로그인 User ID 추출
  useEffect(() => {
    const stored = localStorage.getItem("loginInfo");
    if (stored) {
      const { accessToken } = JSON.parse(stored);
      const payload = parseJwt(accessToken);
      setUserId(payload.id);
    }
  }, []);

  // 🔹 React Query 장바구니 불러오기
  const { cartQuery, updateMutation, deleteMutation } = useCartQuery(userId);

  const decreaseQty = (item) => {
    if (item.qty > 1) {
      updateMutation.mutate({ cid: item.cid, qty: item.qty - 1 });
    }
  };

  const increaseQty = (item) => {
    if (item.qty < item.product.count) {
      updateMutation.mutate({ cid: item.cid, qty: item.qty + 1 });
    }
  };

  const removeItem = (cid) => {
    deleteMutation.mutate({ cid });
  };

  const goCheckout = () => {
    router.push("/checkout");
  };

  return {
    cartList,
    totalPrice,
    totalDcPrice,
    shippingFee,
    decreaseQty,
    increaseQty,
    removeItem,
    goCheckout,
  };
}
