/* eslint-disable @typescript-eslint/no-explicit-any */

import LoadingComponent from "../../app/layouts/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./CatalogSlice";
import ProductList from "./ProductList";
import { useEffect } from "react";
// create an interface to be able to give the type Product (we must import it)

export default function Catalog() {
    // save the list in the function to use it out of this file
    const products = useAppSelector(productSelectors.selectAll);
    const { productsLoaded, status } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    // hooks
    // Get data from API, using JS. We installed Axios (Video 43), to use it instead using 'fecht'
    //useEffect(() => {
    //    fetch('http://localhost:5000/api/products').then(response => response.json()).then(data => setProducts(data))
    //}, []) // an empty array[] in the 'dependencies' prevent a endless loop

    useEffect(() => {
        if (!productsLoaded)
            dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])

    if (status.includes('pending'))
        return <LoadingComponent message='Loading products...' />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}