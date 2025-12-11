"use client";

import React from "react";
// import { RightAdBanner } from "shared/ui/advertise/RightAdvBanner";
// import Popup from "shared/ui/popup/Popup";
// import { SlideContainer } from "shared/ui/slider/SlideContainer";
// import RecommendedSlider from "shared/ui/recommend/RecommendedSlider";
// import { AdvertiseList } from "shared/ui/advertise/AdvertiseList";

// import { useHomeImages } from "features/home/hooks/useHomeImages";
// import { useAdvertiseList } from "features/home/hooks/useAdvertiseList";
// import { useHomeInit } from "features/home/hooks/useHomeInit";
// import { useRecentCategory } from "features/home/hooks/useRecentCategory";
// import { useHomePopup } from "features/home/hooks/useHomePopup";
import ProductList from "@/shared/ui/productList/ProductList";
import RecommendedSlider from "@/shared/ui/recommend/RecommendedSlider";
import { SlideContainer } from "@/shared/ui/slider/SlideContainer";
import { useHomeImages } from "./hooks/useHomeImages";
import { useRecentCategory } from "@/features/category/hooks/useRecentCategory";

export default function Home() {
  const { images, index, setIndex } = useHomeImages();
//   const { bannerAds, inlineAds } = useAdvertiseList();

//   useHomeInit();
  useRecentCategory();

//   const { showPopup, handleClosePopup } = useHomePopup();
  return (
    <>
      {/* <RightAdBanner ads={bannerAds} /> */}

      {/* {showPopup && <Popup onClose={handleClosePopup} />} */}

      <SlideContainer images={images} index={index} setIndex={setIndex} />

      <RecommendedSlider     title="좋아할만한 브랜드 상품" limit={15} />

      {/* <AdvertiseList ads={inlineAds} /> */}

      <ProductList title="마감 임박! 원더특가 ~66%" keyword="time" limit={12} />
      <ProductList title="실시간 인기 랭킹" keyword="sale" limit={12} />
      <ProductList title="할인을 잡아라!!" keyword="sale" limit={12} />
    </>
  );
}
