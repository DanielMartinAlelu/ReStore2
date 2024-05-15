/* eslint-disable @typescript-eslint/no-explicit-any */

import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layouts/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
// create an interface to be able to give the type Product (we must import it)

export default function Catalog() {
    // save the list in the function to use it out of this file
    const [products, setProducts] = useState<Product[]>([]);

    const [loading, setLoading] = useState(true);

    // hooks
    // Get data from API, using JS. We installed Axios (Video 43), to use it instead using 'fecht'
    //useEffect(() => {
    //    fetch('http://localhost:5000/api/products').then(response => response.json()).then(data => setProducts(data))
    //}, []) // an empty array[] in the 'dependencies' prevent a endless loop

    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading)
        return <LoadingComponent message='Loading products...' />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}