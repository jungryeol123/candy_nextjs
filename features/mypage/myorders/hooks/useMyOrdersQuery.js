"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/shared/lib/axios";
import { useOrdersStore } from "@/store/orderStore";

export function useMyOrdersQuery(userId) {
    const { setOrders } = useOrdersStore();
    // 결제내역 조회
    const ordersQuery = useQuery({
        queryKey: ["orders", userId],
        queryFn: async () => {
            const res = await api.get(`/orders/my/${userId}`);
            setOrders(res.data); // Zustand 업데이트
            return res.data;
    },
        enabled: !!userId,
    });

    return { ordersQuery };
}
