/* eslint-disable @typescript-eslint/no-explicit-any */

import { Product } from "../../app/models/product";
// create an interface to be able to give the type Product (we must import it)
interface Props {
    products: Product[];
    addProduct: () => void;
}
export default function Catalog({ products, addProduct }: Props) {
    return (
        <>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
            <button onClick={addProduct}>Add product</button>
        </>
    )
}