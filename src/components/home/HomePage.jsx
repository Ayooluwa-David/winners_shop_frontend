import React from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import api from '../../api'
import { useEffect, useState } from 'react'


const HomePage = () => {
  const [products, setProducts] = useState([])
  useEffect(function() {
 api.get("products").then(res=> {
      console.log(res.data)
  }).catch(err=> {
    console.log(err.message)
  })
  }, [])
 
  return (
        <>
           <Header></Header>
           <CardContainer products={products}></CardContainer>
        </>
  )
}

export default HomePage
