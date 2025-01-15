const Router = require('koa-router');
const { 
    getUsers, createUser, 
    getCustomers, createCustomer, 
    getOrders, createOrder, 
    getProducts, createProduct 
} = require('./controllers');

const router = new Router();

// User routes
router.get('/users', getUsers);
router.post('/users', createUser);

// Customer routes
router.get('/customers', getCustomers);
router.post('/customers', createCustomer);

// Order routes
router.get('/orders', getOrders);
router.post('/orders', createOrder);

// Product routes
router.get('/products', getProducts);
router.post('/products', createProduct);

module.exports = router;












// const Router = require('koa-router');
// const orderController = require('./controllers');

// const router = new Router();

// // Routes
// router.post('/orders', orderController.createOrder);
// router.get('/orders', orderController.getAllOrders);
// router.get('/orders/:id', orderController.getOrderById);
// router.put('/orders/:id', orderController.updateOrder);
// router.delete('/orders/:id', orderController.deleteOrder);

// module.exports = router;
