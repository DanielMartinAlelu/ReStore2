/* eslint-disable @typescript-eslint/no-explicit-any */

import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
// create an interface to be able to give the type Product (we must import it)

export default function Catalog() {
    // save the list in the function to use it out of this file
    const [products, setProducts] = useState<Product[]>([]);

    // hooks
    // Get data from API, using JS. We installed Axios (Video 43), to use it instead using 'fecht'
    useEffect(() => {
        fetch('http://localhost:5000/api/products').then(response => response.json()).then(data => setProducts(data))
    }, []) // an empty array[] in the 'dependencies' prevent a endless loop

    // React components (v23)


    return (
        <>
            <ProductList products={products} />
        </>
    )
}