import React from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import api from '../../api'
import { useEffect, useState } from 'react'
import PlaceholderContainer from '../ui/PlaceholderContainer'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(function() {
setLoading(true)
api.get("products")
  .then(res=> {
      console.log(res.data)
      setProducts(res.data)
      setLoading(false)
  }).catch(err=> {
    console.log(err.message)
  })
  }, [])
 
  return (
        <>
           <Header></Header>
           <PlaceholderContainer></PlaceholderContainer>
           <CardContainer products={products}></CardContainer>
        </>
  )
}

export default HomePage
