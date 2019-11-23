import React from 'react';
import './Basket.css'
import nanoid from 'nanoid'


const orderList = (order, orderPrice, remove) => {
    let arrDiv =[];
    for (let i = 0; i < order.length;i++) {
        arrDiv.push(order[i].count > 0 ? <div key={nanoid()} className={order[i].name}>
            <span className='orderTitle'>{order[i].name}</span>
            <span className='orderTitle'> {order[i].count}x </span>
            <span> {orderPrice[i].price * order[i].count} KGS</span>
            <button className='remove' onClick={() => remove(orderPrice[i])}>Remove</button>
        </div> : null)
    };
    return arrDiv
};


const Basket = props => {
    let totalPriceCheck;
    if (props.totalPrice > 0){
        totalPriceCheck = <p>Total price: {props.totalPrice}KGS</p>
    } else {
        totalPriceCheck = <p>Your basket is empty</p>
    }
    return (
        <div className='basket'>
            {totalPriceCheck}
            {orderList(props.order, props.orderPrice, props.remove)}
        </div>
    );
};

export default Basket;