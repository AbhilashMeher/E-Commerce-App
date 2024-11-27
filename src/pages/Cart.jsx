import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../assets/Images/emptycart.png';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';




const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState('main street,0012');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const totalPrice = () => {
  //   return cart.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  // };

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {cart.products.length > 0 ? (
        <div>
          <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
          <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
            <div className='md:w-2/3'>
              <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                <p>PRODUCT</p>
                <div className='flex space-x-8'>
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              {cart.products.map((product) => (
                <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                  <div className='md:flex items-center space-x-4'>
                    <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                    <div className='flex-1 ml-4'>
                      <h3 className='text-lg font-semibold'>{product.name}</h3>
                    </div>
                  </div>
                  <div className='flex space-x-12 items-center'>
                    <p>₹{product.price}</p>
                    <div className="flex items-center justify-center border">
                      {/* Placeholder for quantity buttons */}
                      <button
                      className='text-xl font-bold px-1.5 border-r'
                      onClick={ ()=> dispatch(decreaseQuantity(product.id))}>
                        -
                      </button>
                      <p className='text-xl px-2 border-r'>{product.quantity}</p>
                      <button className='text-xl font-bold px-1.5 border-r'
                      onClick={ ()=> dispatch(increaseQuantity(product.id))}>
                        +
                      </button>
                    </div>
                    <p>₹{(product.quantity * product.price).toFixed(2)}</p>
                    {/* Placeholder for remove button */}
                    <button 
                    className='text-red-500 hover:text-red-700' 
                    onClick={() => dispatch(removeFromCart(product.id))}>
                        <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
              <h3 className='text-sm font-semibold mb-5'>Cart Total</h3>
              <div className='flex justify-between mb-5 border-b pb-1'>
                <span className='text-sm'>Total Items</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className='  mb-4 border-b pb-2'>
                <p className='flex'>Shipping:</p>
                
                <p className='justify-between flex ml-2'>Shipping to{" "}

                <span className=' text-xs font-bold'>{address}</span>
                </p>
                
                <button className='text-blue-500 hover:underline mt-1 ml-2 ' onClick={() => setIsModelOpen(true)}>Change Address</button>
              </div>
              <div className='flex justify-between mb-4'>
                <span>Total Price:</span>
                <span>₹{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800' onClick={()=> navigate ('/checkout')}>Proceed to Checkout</button>
            </div>
          </div>
          <Modal
          isModelOpen = {isModelOpen}
          setIsModelOpen = {setIsModelOpen}>
            <ChangeAddress setAddress={setAddress} setIsModelOpen = {setIsModelOpen}></ChangeAddress>
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="Empty Cart" className="h-96" />
          <h2>Your cart is currently empty!</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;