import React, { useEffect, useState } from 'react';
import { FaQuestion, FaCarSide } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector(state => state.product.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const newProduct = products.find(item => item.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

  // Handle loading state or missing product gracefully
  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* Product Image */}
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-800 mb-4">₹{product.price}</p>

          <div className="flex items-center mb-4 gap-x-2">
            <input type="number" min="1" id="quantity" className="border p-1 w-16" />
            <button className="bg-red-600 text-white py-1 px-4 hover:bg-red-800">
              Add to Cart
            </button>
          </div>

          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex  items-center ">
              Delivery & Return 
              
              <FaCarSide className="mr-1 text-red-500" />
            </p>
            <p className="flex items-center">
              Ask a Question
              <FaQuestion className="mr-1 text-red-500" />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>Product description will go here.</p>
      </div>
    </div>
  );
};

export default ProductDetail;