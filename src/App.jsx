import React, { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios'
import Loader from './components/Loader'

const App = () => {
  const[product,setProduct] =useState([])
  const[loading,setLoading] = useState(true)
  const[error,setError] = useState(null)

  useEffect(()=>{
    // fetch("https://fakestoreapi.com/products")
    // .then((res)=>res.json())
    // .then((data)=>setProduct(data))
    // .catch((error)=>{
    //   console.log("Error fetching data")

    // })
    
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
    
      setProduct(res.data)
       setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
      setError("Please try after some time!")
      console.log("Error fetching data")

    })

  },[])
  
    



  return (
    <div className='product-container'>
      <h2 className='title'>Products-list</h2>
      <div className='products-grid'>
        {
          product.map((product)=>(
            <div key={product.id} className='product-card'>
              <img className='product-image' src={product.image} />
              <h3 className='product-title'>{product.title}</h3>
              <p className='product-price'>{product.price}</p>
              <p className='product-rating'>⭐{product.rating.rate} - {product.rating.count}</p>
            </div>
          ))
        }
      </div>

      <div>
        {
          loading && (<Loader />)
        }
      </div>
       
      <div>
        {
          error && (<h2>{error}</h2>)
        }
      </div>

    </div>
  )
}

      



       
      

export default App
