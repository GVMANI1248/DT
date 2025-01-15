const { User, Customer, Order, Product } = require('./models');

// Users
const getUsers = async (ctx) => {
    try {
        const users = await User.find();
        ctx.body = users;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error.message;
    }
};

const createUser = async (ctx) => {
    try {
        const user = new User(ctx.request.body);
        await user.save();
        ctx.status = 201;
        ctx.body = user;
    } catch (error) {
        ctx.status = 400;
        ctx.body = error.message;
    }
};

// Customers
const getCustomers = async (ctx) => {
    try {
        const customers = await Customer.find();
        ctx.body = customers;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error.message;
    }
};

const createCustomer = async (ctx) => {
    try {
        const customer = new Customer(ctx.request.body);
        await customer.save();
        ctx.status = 201;
        ctx.body = customer;
    } catch (error) {
        ctx.status = 400;
        ctx.body = error.message;
    }
};

// Orders
const getOrders = async (ctx) => {
    try {
        const orders = await Order.find();
        ctx.body = orders;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error.message;
    }
};

const createOrder = async (ctx) => {
    try {
        const order = new Order(ctx.request.body);
        await order.save();
        ctx.status = 201;
        ctx.body = order;
    } catch (error) {
        ctx.status = 400;
        ctx.body = error.message;
    }
};

// Products
const getProducts = async (ctx) => {
    try {
        const products = await Product.find();
        ctx.body = products;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error.message;
    }
};

const createProduct = async (ctx) => {
    try {
        const product = new Product(ctx.request.body);
        await product.save();
        ctx.status = 201;
        ctx.body = product;
    } catch (error) {
        ctx.status = 400;
        ctx.body = error.message;
    }
};

module.exports = {
    getUsers,
    createUser,
    getCustomers,
    createCustomer,
    getOrders,
    createOrder,
    getProducts,
    createProduct
};





// const Order = require('./models');

// // Create a new order
// exports.createOrder = async (ctx) => {
//     try {
//         const { orderDate, shippingAddress, orderStatus } = ctx.request.body;
//         const newOrder = new Order({ orderDate, shippingAddress, orderStatus });
//         const savedOrder = await newOrder.save();
//         ctx.status = 201;
//         ctx.body = savedOrder;
//     } catch (error) {
//         ctx.status = 500;
//         ctx.body = { message: 'Error creating order', error };
//     }
// };

// // Get all orders
// exports.getAllOrders = async (ctx) => {
//     try {
//         const orders = await Order.find();
//         ctx.status = 200;
//         ctx.body = orders;
//     } catch (error) {
//         ctx.status = 500;
//         ctx.body = { message: 'Error fetching orders', error };
//     }
// };

// // Get order by ID
// exports.getOrderById = async (ctx) => {
//     try {
//         const order = await Order.findById(ctx.params.id);
//         if (!order) {
//             ctx.status = 404;
//             ctx.body = { message: 'Order not found' };
//             return;
//         }
//         ctx.status = 200;
//         ctx.body = order;
//     } catch (error) {
//         ctx.status = 500;
//         ctx.body = { message: 'Error fetching order', error };
//     }
// };

// // Update order
// exports.updateOrder = async (ctx) => {
//     try {
//         const updatedOrder = await Order.findByIdAndUpdate(ctx.params.id, ctx.request.body, { new: true });
//         if (!updatedOrder) {
//             ctx.status = 404;
//             ctx.body = { message: 'Order not found' };
//             return;
//         }
//         ctx.status = 200;
//         ctx.body = updatedOrder;
//     } catch (error) {
//         ctx.status = 500;
//         ctx.body = { message: 'Error updating order', error };
//     }
// };

// // Delete order
// exports.deleteOrder = async (ctx) => {
//     try {
//         const deletedOrder = await Order.findByIdAndDelete(ctx.params.id);
//         if (!deletedOrder) {
//             ctx.status = 404;
//             ctx.body = { message: 'Order not found' };
//             return;
//         }
//         ctx.status = 200;
//         ctx.body = { message: 'Order deleted successfully' };
//     } catch (error) {
//         ctx.status = 500;
//         ctx.body = { message: 'Error deleting order', error };
//     }
// };
