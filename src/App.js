import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Moto G10 Power",
          qty: 1,
          price: 9999,
          img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51VuA0yn5gL._SX679_.jpg",
          id: 1,
        },
        {
          title: "Watch",
          qty: 1,
          price: 1999,
          img: "https://www.zdnet.com/a/img/resize/bf57b15eb89c872fb8d2c549b1cff64f40dc989f/2022/07/18/aa42114c-b7d5-4dd6-b7f4-f7f8885cf8a8/garmin-vivoactive-4-review-best-garmin-watch-garmin-watch-models-compared.jpg?auto=webp&fit=crop&height=900&width=1200",
          id: 2,
        },
        {
          title: "Headphone",
          qty: 1,
          price: 2999,
          img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31nwgOZnnnL._SX300_SY300_QL70_FMwebp_.jpg",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    // console.log('pro', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;

    products.forEach( (product) => {  
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () =>{
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + (product.price) * (product.qty)
    })

    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProdct={this.handleDeleteProduct}
        />
        <div style={{padding:10, fontSize:20}}> TOTAL : {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
