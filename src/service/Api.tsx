import { Products } from "@/types/Products";

export const fetchProducts = async (): Promise<Products[]> =>{


    const response = await fetch("https://fakestoreapi.com/products")

    if(!response.ok){
        throw new Error("Yuklanishda hato berdi!")
    }

    const data = await response.json();

    return data;
}