import React, { Component } from 'react';
import './App.css';
import Menu from "./Components/Menu/Menu";
import Basket from "./Components/Basket/Basket";

const Goods = [
    {name: 'Hamburger', price: 80},
    {name: 'Cheeseburger', price: 90},
    {name: 'Fries', price: 45},
    {name: 'Coffee', price: 70},
    {name: 'Tea', price: 50},
    {name: 'Cola', price: 40},
];

class App extends Component {
    state = {
      goods:[
          {name: 'Hamburger', count: 0},
          {name: 'Cheeseburger', count: 0},
          {name: 'Fries', count: 0},
          {name: 'Coffee', count: 0},
          {name: 'Tea', count: 0},
          {name: 'Cola', count: 0},
      ],
        totalPrice: 0,
    };

    addGood = good => {
        const goods = [...this.state.goods];
        const goodName = this.state.goods.findIndex(i => i.name === good.name);
        goods[goodName].count++;
        let totalPrice = this.state.totalPrice;
        totalPrice += good.price;
        let goodPrice = good.price * goods[goodName].count;
        this.setState({goods, totalPrice});
        console.log(goods[goodName].count, good.name, goodPrice);
    };

    removeGood = good => {
        const goods = [...this.state.goods];
        const goodName = this.state.goods.findIndex(i => i.name === good.name);
        goods[goodName].count--;
        let totalPrice = this.state.totalPrice;
        totalPrice -= good.price;
        let goodPrice = good.price * goods[goodName].count;
        this.setState({goods, totalPrice});
        console.log(goods[goodName].count, good.name, goodPrice);
    };

  render() {
    return (
      <div className="App">
          <Basket
          totalPrice={this.state.totalPrice}
          order={this.state.goods}
          orderPrice={Goods}
          remove={this.removeGood}
          >
      </Basket>
        <Menu addGood={this.addGood}/>
      </div>
    );
  }
}

export default App;
