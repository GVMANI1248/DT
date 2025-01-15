const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true }
});

// Customer Schema
const customerSchema = new mongoose.Schema({
    customerId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true }
});

// Order Schema
const orderSchema = new mongoose.Schema({
    customerId: { type: Number, required: true },
    orderDate: { type: Date, required: true },
    address: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], required: true },
    products: [
        {
            productId: { type: Number, required: true },
            productName: { type: String, required: true },
            productQuantity: { type: Number, required: true }
        }
    ]
});

// Product Schema
const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true }
});

// Models
const User = mongoose.model('User', userSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Order = mongoose.model('Order', orderSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { User, Customer, Order, Product };








// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     orderDate: { type: Date, required: true },
//     shippingAddress: { type: String, required: true },
//     orderStatus: { 
//         type: String, 
//         enum: ['pending', 'processing', 'shipped', 'delivered'], 
//         default: 'pending' 
//     }
// }, { timestamps: true });

// module.exports = mongoose.model('Order', orderSchema);
