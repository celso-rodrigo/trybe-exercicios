const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const reciverPerson = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const ap = order.address.apartment;
  return `Olá ${deliveryPerson}, entrega para: ${reciverPerson}, Telefone: ${phone}, R. ${street}, Nº: ${number}, AP: ${ap}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = order.name = 'Luiz Silva';
  const pizza01 = Object.keys(order.order.pizza)[0];
  const pizza02 = Object.keys(order.order.pizza)[1];
  const drink = order.order.drinks.coke.type;
  const pay = order.payment.total = 50;
  return `Olá ${name}, o total do seu pedido de ${pizza01}, ${pizza02} e ${drink} é R$ ${pay}.`;
}

console.log(orderModifier(order));
