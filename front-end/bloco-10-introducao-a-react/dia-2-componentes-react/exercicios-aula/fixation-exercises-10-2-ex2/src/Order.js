import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;

// O que o componente App é em relação a Order?
// Resposta: App é o componente pai pois abrange o componente Order dentro de si. 

// 🚀 Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App.