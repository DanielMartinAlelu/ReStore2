/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
// create an interface to be able to give the type Product (we must import it)
interface Props {
    products: Product[];
    addProduct: () => void;
}
export default function Catalog({ products, addProduct }: Props) {
    return (
        <>
            <ProductList products={products} />
            <Button variant='contained' onClick={addProduct}>Add product</Button>
        </>
    )
}