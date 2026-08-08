import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getAllCategories,
  getAllProduct,
  getProductByCategory,
} from "../api/productApi";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClickQuick, onQuickViewClose } from "../state/quickViewSlice";

export const useAllProduct = (lim) => {
  const [search, setSearch] = useState(null);
  const [debounce, setDebounce] = useState(null);
  let limit = lim || 12;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounce(search);
    }, 700);

    return () => clearTimeout(timeout);
  }, [search]);

  let {
    data,
    error,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products", debounce],
    queryFn: ({ pageParam }) => getAllProduct(debounce, limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      let loadedData = allPage.length * limit;

      if (loadedData < lastPage.total) return loadedData;
      return undefined;
    },
  });

  data = data?.pages.flatMap((val) => val.products) ?? [];
  console.log(data);
  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    error,
    isPending,
    search,
    setSearch,
  };
};

export const useAllCategoryList = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getAllCategories,
  });
};

export const useCategory = () => {
  const [selected, setSelected] = useState("All Categories");
  const wrapRef = useRef(null);
  const [category, setCategory] = useState([]);

  console.log(category);
  const { data, error, isPending } = useQuery({
    queryKey: ["category", selected],
    queryFn: () => getProductByCategory(selected),
    enabled: !!selected,
  });

  useEffect(() => {
    if (data?.products) {
      setCategory(data.products);
    }
    if (selected === "All Categories") {
      setCategory(null);
    }
  }, [data]); // ✅

  const [open, setOpen] = useState(false);

  return {
    category,
    catPending: isPending,
    data,
    error,
    isPending,
    open,
    setOpen,
    selected,
    setSelected,
    wrapRef,
  };
};

export const useQuickView = () => {
  const dispatch = useDispatch();
  let { quickViewProduct: onClose } = useSelector((store) => store.quickView);

  const handleQuickeView = (product) => {
    dispatch(onClickQuick(product));
  };

  const handleClose = useCallback(() => {
  dispatch(onQuickViewClose());
    setTimeout(() => onClose?.(), 200);
  }, [onClose]);

  useEffect(() => {
    if(!onClose) return
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", onKey);
    };
  }, [handleClose]);

  return {
    handleQuickeView,
    handleClose,
  };
};
