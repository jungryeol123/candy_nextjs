"use client";

import "../../SearchResult.scss";
import { useParams } from "next/navigation";
import { useSearchResult } from "@/features/searchResult/hooks/useSearchResult";
import { SearchFilterBar } from "@/features/searchResult/components/SearchFilterBar";
import { SearchResultList } from "@/features/searchResult/components/SearchResultList";


export default function SearchResult() {
    const params = useParams();
    const brandName = decodeURIComponent(params.brandName);

    const { filterList, activeFilter, handleFilter } = useSearchResult({
        mode: "brand",
        keyword: brandName
    });

    return (
    <div className="search-result-page">
      <h2>브랜드 검색 결과: "{brandName}"</h2>

      <SearchFilterBar
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      />

      <SearchResultList filterList={filterList} />
    </div>
    );
}
