"use client";

import Swal from "sweetalert2";

// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addCart } from "features/cart/cartAPI";
import { OrderCard } from "@/features/mypage/myorders/components/OrderCard";
import { OrderPagination } from "@/features/mypage/myorders/components/OrderPagination";
import { useMyOrders } from "@/features/mypage/myorders/hooks/useMyOrders";


export default function MyOrders() {
  const {
    userId,
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    deleteOrder,
  } = useMyOrders(4);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

  /** 장바구니 추가 */
  const handleAddCart = async (item) => {
    // const isNew = await dispatch(addCart(item.ppk, 1));

    // if (isNew) {
    //   Swal.fire({
    //     icon: "success",
    //     title: "장바구니 등록",
    //     text: `${item.productName}이 장바구니에 추가되었습니다.`,
    //   });
    // } else {
    //   Swal.fire({
    //     icon: "success",
    //     title: "수량 증가",
    //     text: `${item.productName} 수량이 증가했습니다.`,
    //   });
    // }
  };

  if (!userId) return <p>로그인이 필요합니다.</p>;

  return (
    <div className="mypage-container">
      {currentItems.length === 0 ? (
        <p>주문 내역이 없습니다.</p>
      ) : (
        currentItems.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            // navigate={navigate}
            handleAddCart={handleAddCart}
            onDelete={() => deleteOrder(order.orderCode)}
          />
        ))
      )}

      {totalPages > 1 && (
        <OrderPagination
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </div>
  );
}