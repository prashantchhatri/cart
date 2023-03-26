import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    title: 'Moto G10 Power',
                    qty: 1,
                    price: 9999,
                    img: '',
                    id: 1
                },
                {
                    title: 'Watch',
                    qty: 1,
                    price: 1999,
                    img: '',
                    id: 2

                },
                {
                    title: 'Headphone',
                    qty: 1,
                    price: 2999,
                    img: '',
                    id: 3

                },

            ]

        };

        // this.increaseQuatity = this.increaseQuatity.bind(this);
    }

    render(){
        const {products} = this.state
        return (
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem
                                product={product}
                                key={product.id}
                            />;
                })}
            </div>
        );
    }
}


export default Cart;