import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(false)
    const [paymentToggle,setPaymentToggle]= useState(false)
    const [paymentMetod,setPaymentMethod] =useState("cod")
    const cart = useSelector(state => state.cart)

    const [shippingInfo,setShippingInfo] = useState({
        address:'',
        city:'',
        zip:''
    })

    const navigate = useNavigate()
    const handleOrder = () => {
        const  newOrder ={
            products: cart.products,
            orderNumber: "546845",
            shippingInformation: shippingInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>


                {/* Billing Information */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between'
                        onClick={()=> setBillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleUp /> : <FaAngleDown/> }

                        </div>
                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label htmlFor="" className=' flex block text-gray-700 '>Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='Enter Name'
                                    className='w-full px-3 py-2 border' />
                            </div>

                            <div>
                                <label htmlFor="" className='flex block text-gray-700'>Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Enter Email'
                                    className='w-full px-3 py-2 border' />
                            </div>

                            <div>
                                <label htmlFor="" className=' flex block text-gray-700'>Phone</label>
                                <input type="text"
                                    name='phone'
                                    placeholder='Enter Phone'
                                    className='w-full px-3 py-2 border' />
                            </div>
                        </div>
                    </div>




                {/* Shipping Address  */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between'
                        onClick={()=> setShippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleUp /> : <FaAngleDown/> }

                        </div>
                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label htmlFor="" className=' flex block text-gray-700 '>Address</label>
                                <input
                                    type="text"
                                    name='address'
                                    placeholder='Enter Address'
                                    className='w-full px-3 py-2 border'
                                    onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})} />
                            </div>

                            <div>
                                <label htmlFor="" className='flex block text-gray-700'>City</label>
                                <input
                                    type="text"
                                    name='city'
                                    placeholder='Enter City'
                                    className='w-full px-3 py-2 border'
                                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})} />
                            </div>

                            <div>
                                <label htmlFor="" className=' flex block text-gray-700'>Pin Code</label>
                                <input type="text"
                                    name='Pin Code'
                                    placeholder='Enter Pin Code'
                                    className='w-full px-3 py-2 border' 
                                    onChange={(e) => setShippingInfo({...shippingInfo, pin: e.target.value})} />
                            </div>
                        </div>
                    </div>




                {/* Payement Method */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between'
                        onClick={()=> setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            {paymentToggle ? <FaAngleUp /> : <FaAngleDown/> }

                        </div>
                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex item-center mb-2'>
                                <input
                                    type="radio"
                                    name='payment'
                                    checked ={paymentMetod === "cod"}
                                    onChange={() => setPaymentMethod("cod")}
                                     />
                                <label htmlFor="" className=' flex block text-gray-700 ml-2'>Cash on Delivery</label>
                            </div>
                            <div className='flex item-center mb-2'>
                                <input
                                    type="radio"
                                    name='payment'
                                    checked ={paymentMetod === "dc"}
                                    onChange={() => setPaymentMethod("dc")}
                                     />
                                <label htmlFor="" className=' flex block text-gray-700 ml-2'>Debit Card</label>
                            </div>
                        {paymentMetod === "dc" && (
                            <div class="grid grid-cols-1 gap-4">
                            <div>
                              <label for="card-number" class="block text-sm font-medium text-gray-700">Card Number</label>
                              <input type="text" id="card-number" placeholder="Enter Card Number" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                              <label for="card-holder-name" class="block text-sm font-medium text-gray-700">Card Holder Name</label>
                              <input type="text" id="card-holder-name" placeholder="Enter Card Holder Name" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                              <div>
                                <label for="expiry-date" class="block text-sm font-medium text-gray-700">Expiry Date</label>
                                <input type="text" id="expiry-date" placeholder="MM/YY" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                              </div>
                              <div>
                                <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
                                <input type="text" id="cvv" placeholder="CVV" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                              </div>
                            </div>
                          </div>
                        )}
                        </div>
                    </div>
                </div>


                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                <div className='space-y-4'>
                    {cart.products.map(product => (
                        <div key={product.id} className='flex justify-between'>
                            <div className='flex item-center'>
                                <img src={product.image} alt="product.name" className='w-16 h-16 object-contain rounded' />
                                <div className='ml-4'>
                                    <h4 className='text-md font-semibold'>{product.name}</h4>
                                    <p className='text-gray-600'>
                                        &{product.price} x {product.quantity}
                                    </p>
                                </div>
                            </div>
                            <div className="text-gray-800">
                                ₹{product.price * product.quantity}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-4 border-t pt-4'>
                    <div className='flex justify-between'>
                        <span>Total Price:</span>
                        <span className='font-semibold'>₹{cart.totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
                onClick={handleOrder}>
                    Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout