"use client";

import { useProducts } from "@/hooks/useProducts";
import React from "react";

const App = () => {
  const { data, error, loading } = useProducts();

  if (loading) return <h1>Loading.....</h1>;

  if (error) {
    return <h1>error yuz berdi...</h1>;
  }

  console.log(data);

  return (
    <div>
      <h1>Products</h1>

      {data.map((elem) => (
        <div key={elem?.id}>
          <p>{elem?.id}</p>
          <h1>{elem?.title}</h1>
          <p>{elem?.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
