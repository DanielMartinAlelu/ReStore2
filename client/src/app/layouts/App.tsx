import { useEffect, useState } from "react"
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
    // save the list in the function to use it out of this file
    const [products, setProducts] = useState<Product[]>([]);

    // hooks
    // Get data from API, using JS
    useEffect(() => {
        fetch('http://localhost:5000/api/products').then(response => response.json()).then(data => setProducts(data))
    }, []) // an empty array[] in the 'dependencies' prevent a endless loop

    // React components (v23)
    function addProduct() {
        setProducts(prevState => [...prevState,
        {
            id: prevState.length + 101,
            name: 'product' + (prevState.length + 1),
            price: (prevState.length * 100) + 100,
            brand: 'some brand',
            description: 'some description',
            pictureUrl: 'http://picsum.photos/200'
        }])
    }

    return (
        <div>
            <h1>Re-Store</h1>
            <Catalog products={products} addProduct={addProduct} />
        </div>
    )
}

export default App
