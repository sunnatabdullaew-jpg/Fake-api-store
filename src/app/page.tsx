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

      <div className="flex justify-center flex-wrap gap-10">

      {data.map((elem) => (
        <div className="w-100 p-5 border" key={elem?.id}>
          <p>{elem?.id}</p>
          <h1>{elem?.title}</h1>
          <p>{elem?.price}</p>
          <p>{elem?.description}</p>
          <p>{elem?.category}</p>
          
        </div>
      ))}
      </div>
    </div>
  );
};

export default App;
