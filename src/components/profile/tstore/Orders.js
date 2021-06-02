import React, { useContext } from 'react'
import Order from './Order'
import AuthContext from '../../context/auth/Context'
import { Link } from 'react-router-dom'

const Orders = () => {
    const { orders } = useContext(AuthContext)
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 m-auto mt-1 h-full min-h-screen pb-32 pl-4">
            {
                orders.length > 0 ?(
                    orders.map((item) => {
                      return <Order item={item} key={item.id} />;
                    })
                )
                :
                <p className="text-center">You've Not make any order Yet</p>
                    
            }
            <p className="text-center mt-8">continue <Link to="/" className="text-green-600">Shopping</Link></p>
        </div>
    )
}

export default Orders
