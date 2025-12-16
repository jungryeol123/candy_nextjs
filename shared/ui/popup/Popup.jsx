"use client";

import { useRouter } from "next/navigation";
import "./Popup.css";

export default function Popup({ onClose }) {
  const router = useRouter();

  return (
    <div className="popup-container">
      <div className="popup-content">
        <img
          src="/images/popupimage/coupon_image1.png"
          alt="쿠폰"
          className="popup-image"
        />
        <button className = "get-coupon-button" onClick={() => router.push("/coupon")}>쿠폰받으러가기</button>
        <button className="popup-close-btn" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
