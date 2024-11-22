import { Actions, Screens } from '../types/store';
import { getProduct } from '../utils/firebase';
// import { getProducts } from '../utils/firebase';

export const navigate = (screen: Screens) => { //Para cambair entre screens
	return {
		action: Actions.navigate,
		payload: screen,
	};
};

export const getProductsAction = async () => {
	const products = await getProduct(); //Firestore
	return {
		action: Actions.GETPRODUCTS,
		payload: products,
	};
};

