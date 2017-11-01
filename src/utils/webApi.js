import {productsReceived} from './../actions';

export function getProducts(dispatch) {
  const options = {
	  method: 'GET',
	  headers: {
	  	token: '21959be-5da6-42ba-a7df-fedd',
	  	'Content-Type': 'application/json',
	  },
	  mode: 'cors',
	  cache: 'default',
	};

	fetch('https://private-anon-b649c838d1-assignment8.apiary-mock.com/api/v1/portal/brand/product?sortType=2&isUnsorted=false&page=0&limit=10', options)
		.then(response => response.json())
		.then((json) => {
			dispatch(productsReceived(json.data));
		});
}