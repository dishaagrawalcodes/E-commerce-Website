import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {Link} from 'react-router-dom'
const Productitem = ({id,image,name,price}) => {
    const {currency} =useContext(ShopContext);
  return (
    <Link>
    
    </Link>
      
    
  )
}

export default Productitem
