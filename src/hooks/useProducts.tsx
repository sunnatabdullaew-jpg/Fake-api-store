"use client";

import { fetchProducts } from "@/service/Api";
import type { Products } from "@/types/Products";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [data, setData] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadingProducts = async () => {
      try {
        setLoading(true);

        const res = await fetchProducts();
        setData(res);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadingProducts();
  }, []);

  return {
    data,
    loading,
    error
  };
};
