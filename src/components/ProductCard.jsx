import React from 'react'
import {FaStar} from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import {useDispatch} from 'react-redux'
// import ProductCard from '../components/ProductCard'
import {Link} from 'react-router-dom'
// import ProductDetail from '../pages/ProductDetail'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const handleAddToCart = (e, product) =>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("Product added Succefully!")
  }
  return ( 
    <Link to={`/product/${product.id}`}>
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
        <h3 className='text-lg font-semibold'>{product.title}</h3>
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500' >₹{product.price}</p>
        <div className='flex items-center mt-2'>
             < FaStar className='text-yellow-500'/>
             < FaStar className='text-yellow-500'/>
             < FaStar className='text-yellow-500'/>
             < FaStar className='text-yellow-500'/>
        </div>
        <div class="absolute bottom-4 right-2 flex item item-center justify-center w-8 h-8 bg-red-600
         group text-white text-sm rounded-full hover:w-32 hover:bg-red-700   transition-all duration-100 "
         onClick={(e) => handleAddToCart(e,product)}>
            <span class='group-hover:hidden font-bold text-xl'>+</span>
            <span class="hidden group-hover:block text-xl font-bold ">Add to Cart</span>
        </div>
    </div>
     </Link>
  )
}


export default ProductCard