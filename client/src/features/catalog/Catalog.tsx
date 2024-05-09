/* eslint-disable @typescript-eslint/no-explicit-any */

import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";
// create an interface to be able to give the type Product (we must import it)
interface Props {
    products: Product[];
    addProduct: () => void;
}
export default function Catalog({ products, addProduct }: Props) {
    return (
        <>
            <List>
                {products.map(product => (
                    <ListItem key={product.id}>
                        <ListItemAvatar>
                            <Avatar src={product.pictureUrl}></Avatar>
                        </ListItemAvatar>
                        <ListItemText>{product.name} - {product.price}</ListItemText>
                    </ListItem>
                ))}
            </List>
            <Button variant='contained' onClick={addProduct}>Add product</Button>
        </>
    )
}