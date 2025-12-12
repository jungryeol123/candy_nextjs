import "../../SearchResult.scss";
import { useParams, useSearchParams } from "next/navigation";
import { useSearchResult } from "@/features/searchResult/hooks/useSearchResult.js";
import { SearchFilterBar } from "@/features/searchResult/components/SearchFilterBar.jsx";
import { SearchResultList } from "@/features/searchResult/components/SearchResultList.jsx";

export default function SearchResult() {
    const params = useParams();
    const searchParams = useSearchParams();

    const categoryName = params.categoryName;
    const type = searchParams.get("type");  // "main" 또는 "sub"
    const cateId = Number(searchParams.get("id"));

    const { filterList, activeFilter, handleFilter } = useSearchResult({
        mode: type,
        keyword: categoryName,
        cateId
    });

    return (
    <div className="search-result-page">
      <h2>카테고리 검색 결과: "{categoryName}"</h2>

      <SearchFilterBar
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      />

      <SearchResultList filterList={filterList} />
    </div>
    );
}
