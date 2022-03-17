import OrderBusiness from "./business/orderBusiness.js";
import Order from './entities/order.js';

const order = new Order({
    customerId: 'abchhdfdj',
    amount: 1000.000,
    products: [{ description: 'Ferrari' }],
});

const orderBusiness = new OrderBusiness();

console.info(orderBusiness.create(order));