import React from "react";

class CartItem extends React.Component{

    increaseQuatity = () => {
        // console.log('this.state: ', this.state)
        // this.setState({
        //     qty: this.state.qty + 1
        // })

        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        })
    }

    decreaseQuatity = () => {
        // const qty = this.state.qty;
        const {qty} = this.state;
        // console.log(qty);
        if (qty === 0){
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        })
    }

    render(){
        const {title, price, qty} = this.props.product;

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
                        <img 
                            alt="increase" 
                            // onClick={this.increaseQuatity.bind(this)} 
                            onClick={this.increaseQuatity} 
                            className="action-icons " 
                            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                        />

                        <img 
                            alt="decrease" 
                            onClick={this.decreaseQuatity} 
                            className="action-icons " 
                            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                        />

                        <img 
                            alt="delete" 
                            className="action-icons " 
                            src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png"
                        />
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