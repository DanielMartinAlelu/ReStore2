/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Basket } from "../models/basket";
// make this accessible for all application

interface StoreContextValue {
	basket: Basket | null;
	setBasket: (basket: Basket) => void;
	removeItem: (productId: number, quantity: number) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

// we create our custom react hook:
export function useStoreContext() {
	const context = useContext(StoreContext);

	if (context === undefined) {
		throw Error("Oops - we do not seem to be inside the provider");
	}

	return context;
}

// Our store provider (anything inside when we use this is going to be children)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function StoreProvider({ children }: PropsWithChildren<unknown>) {
	const [basket, setBasket] = useState<Basket | null>(null);

	function removeItem(productId: number, quantity: number) {
		if (!basket)
			return;

		const items = [...basket.items];  // this copy the array and store it in the variable
		const itemIndex = items.findIndex(i => i.productId === productId);
		if (itemIndex >= 0) {
			items[itemIndex].quantity -= quantity;
			if (items[itemIndex].quantity === 0)
				items.splice(itemIndex, 1);

			setBasket(prevState => {
				return { ...prevState!, items }
			})
		}
	}

	return (
		<StoreContext.Provider value={{ basket, setBasket, removeItem }}>
			{children}
		</StoreContext.Provider>
	)
}