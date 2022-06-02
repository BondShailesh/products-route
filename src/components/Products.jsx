import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from "./route.module.css"
function Products() {
    const [prod,setProd] = useState([])
    useEffect(()=>{
   fetch("http://localhost:8080/products")
   .then((res)=>res.json())
   .then((re)=>{
    setProd(re)
   })
    },[])
  return (
    <div className={styles.App0}>
        <table>
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>more details</th>
            </tr>
            </thead>  
      {prod.map((el)=>(
          <tbody  key={el.id}>
          <tr>
        <td>{el.name}</td>
        <td>{el.price}</td>
         <td> <Link to={`/products/${el.id}`}>more details</Link></td>
         </tr>
         </tbody>
      ))}
       
      </table>
      <Outlet/>
    </div>
  )
}

export default Products
