import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Moto G10 Power',
            qty: 1,
            price: 999,
            img: ''
        };
    }

    render(){
        const {title, price, qty} = this.state;

        return (
            <div className="cart-item">
                <div className="left-block ">
                    <img alt="" style={style.image}/>
                </div>
                <div className="right-block ">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {buttons} */}
                        <img alt="increase" className="action-icons " src="https://cdn-icons-png.flaticon.com/128/992/992651.png"/>
                        <img alt="decrease" className="action-icons " src="https://cdn-icons-png.flaticon.com/128/992/992683.png"/>
                        <img alt="delete" className="action-icons " src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }

export default CartItem;