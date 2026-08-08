import React, { useEffect, useState } from "react";
import {
  useAllCategoryList,
  useAllProduct,
  useCategory,
  useQuickView,
} from "../../hooks/productHook";
import ProductCard from "../components/ProductCard";
import SkyMartRouteLoader from "../../../../shared/UI/components/SkelitonCard";
import CategoryDropdown from "../../../../shared/UI/components/CategoryDropdown";
import { Search } from "lucide-react";
import ErrorPage from "../../../../shared/UI/pages/ErrorPage";
import LoadMoreButton from "../components/LoadMoreButton";
import QuickViewModal from "../components/QuickViewModel";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const ProductPage = () => {
  let {
    data,
    error,
    isPending,
    search,
    setSearch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAllProduct();
  let { category, catPending, open, setOpen, selected, setSelected, wrapRef } =
    useCategory();
   
  let finalArr = category || data;

  let { data: categoryData, isPending: categoryPending } = useAllCategoryList();
  const categoryOptions = categoryData ?? [];

  let {quickView, quickViewProduct} = useSelector(store => store.quickView)
  console.log(quickView)
  console.log(quickViewProduct)
  if (isPending || catPending) {
    return (
      <div className="max-w-7xl my-16 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SkyMartRouteLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="m-y-16">
        <ErrorPage />;
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 my-14">
      {/* Header Section: Left Title & Right Search/Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        {/* Left: Title */}
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Products
        </h1>

        {/* Right: Filters and Search */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
          <div className="relative w-full transition-all duration-500 ease-in-out sm:w-60 sm:focus-within:w-80">
            <Search
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm text-gray-700 shadow-sm transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8c5226] sm:py-2.5"
            />
          </div>

          {/* options ek flat array hai (ya categories abhi load ho rahi hain to []) */}
          <CategoryDropdown
            options={categoryOptions}
            open={open}
            setOpen={setOpen}
            selected={selected}
            setSelected={setSelected}
            wrapRef={wrapRef}
          />
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-10 place-items-center">
        {finalArr?.map((val, index) => {
          return <ProductCard key={val.id || index} product={val} />;
        })}
        {quickView && (
            <div className="absolute w-full h-full">
              <QuickViewModal
                // onClose={() => handleClose()}
                // product={quickViewProduct}
                // onClick={() => setQuickView(false)}
              />
            </div>
          )}
      </div>
      {category ? (
        <LoadMoreButton />
      ) : (
        <LoadMoreButton
          onClick={() => fetchNextPage()}
          loading={isFetchingNextPage}
          hasMore={hasNextPage}
        />
      )}
    </div>
  );
};

export default ProductPage;
