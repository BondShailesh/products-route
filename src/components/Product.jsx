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
       <img src={product.img} alt="error" />
       <p>{product.name}</p>
       <p>RS {product.price}</p>
    </div>
  )
}

export default Product
