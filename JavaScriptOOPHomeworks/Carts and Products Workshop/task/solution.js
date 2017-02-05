function solve() {
	function getProduct(productType, name, price) {
		let product = {
			productType: productType,
			name: name,
			price: price
		};

		return product;
	}

	function getShoppingCart() {
		let shoppingCart = {
			products: [],
			add: function (product) {
				this.products.push(product);
				return this;
			},
			remove: function (product) {
				if (this.products.length === 0) {
					throw new Error('There are not products in the shopping cart.');
				}
				let firstIndex = this.products.findIndex(p => p.productType === product.productType && p.price === product.price && p.name === product.name);
				if (firstIndex < 0) {
					throw new Error('There is not such product.');
				}
				this.products.splice(firstIndex, 1);
				return this;
			},
			showCost: function () {
				if (this.products.length === 0) {
					return 0;
				}
				let costs = this.products.reduce((sum, element) => sum + element.price, 0);
				return costs;	
			},
			showProductTypes: function () {
				let unique = [...new Set(this.products.map(item => item.productType))];
				unique.sort((x, y) => x.localeCompare(y));
				return unique;
			},
			getInfo: function () {
				let info = {
					products: [],
					totalPrice: 0
				};

				if(this.products.length < 1){
					return info;
				}

				for (let product of this.products){
					let productIndex = info.products.findIndex(p => p.name === product.name);
					if(productIndex === -1){
						let newProductCategory = {
							name: product.name,
							totalPrice: product.price,
							quantity: 1
						};
						info.products.push(newProductCategory);
						continue;
					}
					else if(productIndex !== -1){
						info.products[productIndex].quantity += 1;
						info.products[productIndex].totalPrice += product.price;
					}
				}

				info.totalPrice = info.products.reduce((sum,el) => sum + el.totalPrice, 0);
				info.products.sort((a,b) => a.name.localeCompare(b.name));

				return info;
			}
		};
		return shoppingCart;
	}

	return {
		getProduct: getProduct,
		getShoppingCart: getShoppingCart
	};
}

module.exports = solve();

const {getProduct, getShoppingCart} = solve();

let cart = getShoppingCart();

let pr1 = getProduct("Sweets", "Shokolad Milka", 2);
cart.add(pr1);
console.log(cart.showCost());
// prints `2`

let pr2 = getProduct("Groceries", "Salad", 0.5);
cart.add(pr2);
cart.add(pr2);
console.log(cart.showCost());
// prints `3`

console.log(cart.showProductTypes());
// prints [ 'Groceries', 'Sweets' ]

console.log(cart.getInfo());
/* prints
{
    totalPrice: 3
    products: [{
        name: "Salad",
        totalPrice: 1,
        quantity: 2
    }, {
       name: "Shokolad Milka",
       totalPrice: 2,
       quantity: 1 
    }]
}
*/

//cart.remove({name:"salad", productType: "Groceries", price: 0.5})
// throws: "salad" is not equal to "Salad"

cart.remove({name:"Salad", productType: "Groceries", price: 0.5})
console.log(cart.getInfo());
/* prints
{
    totalPrice: 2.5
    products: [{
        name: "Salad",
        totalPrice: 0.5,
        quantity: 1
    }, {
       name: "Shokolad Milka",
       totalPrice: 2,
       quantity: 1 
    }]
}
*/