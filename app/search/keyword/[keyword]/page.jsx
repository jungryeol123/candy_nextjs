"use client";

import "../../SearchResult.scss";
import { useParams } from "next/navigation";
import { useSearchResult } from "@/features/searchResult/hooks/useSearchResult";
import { SearchFilterBar } from "@/features/searchResult/components/SearchFilterBar";
import { SearchResultList } from "@/features/searchResult/components/SearchResultList";

export default function SearchResult() {
    const params = useParams();
    const keyword = decodeURIComponent(params.keyword);

    const { filterList, activeFilter, handleFilter } = useSearchResult({
        mode: "search",
        keyword
    });

  return (
    <div className="search-result-page">
      <h2>키워드 검색 결과: "{keyword}"</h2>

      <SearchFilterBar
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      />

      <SearchResultList filterList={filterList} />
    </div>
  );
}
