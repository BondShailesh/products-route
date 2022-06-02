import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import styles from "./route.module.css"
function Product() {
const [product,setProduct] = useState({})
const {id} = useParams();
useEffect(()=>{
    if(id){
      fetch(`http://localhost:8080/Products/${id}`)
      .then((res)=>res.json())
      .then((r)=>{
       setProduct(r);
      })
    }
   },[id])

  return (
    <div className={styles.product}>
      {(product.id ? 
      <div>
      <img src={product.img} alt="error" />
      <p>{product.name}</p>
      <p>{product.price}</p> </div> : "Product does not exist")}
       
    </div>
  )
}

export default Product
