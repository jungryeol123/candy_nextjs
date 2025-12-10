"use client";

import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";
import { parseJwt } from "@/features/auth/parseJwt";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export function useLoginMutation(from = "/") {
  const login = useAuthStore((state) => state.login);
  const setCartList = useCartStore((state) => state.setCartList);

  const router = useRouter();

  return useMutation({
    mutationFn: async ({ userId, password }) => {
      const res = await api.post("/auth/login", { userId, password });
      return res.data;
    },

    onSuccess: async (data) => {
      const { accessToken, role } = data;
      const payload = parseJwt(accessToken);

      // 1️⃣ Zustand authStore 업데이트 (로그인완료)
      login({
        accessToken,
        role,
        userId: payload.id,
      });

      // 2️⃣ 장바구니 정보 요청
      try {
        const cartRes = await api.post("/cart/cartList", {
          user: { id: payload.id },
        });

        // 3️⃣ Zustand cartStore 업데이트
        setCartList(cartRes.data);
      } catch (err) {
        console.error("장바구니 불러오기 실패:", err);
      }

      // 4️⃣ 알림 + 이동
      Swal.fire({
        icon: "success",
        timer: 800,
        title: "로그인 성공!",
        showConfirmButton: false,
      }).then(() => {
        router.push(from);
      });
    },

    onError: () => {
      Swal.fire({
        icon: "error",
        title: "로그인 실패",
        text: "아이디 또는 비밀번호를 확인해주세요.",
      });
    },
  });
}
