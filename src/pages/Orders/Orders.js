import React, { useState, useEffect } from "react"
import { db } from "../../utils/firebase"
import Order from "../../components/Order/Order"
import { useSelector } from "react-redux"
import "./Orders.css"

const Orders = () => {
  const { user } = useSelector(state => state.data)
  const [orders, setOrders] = useState([])
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot =>
          setOrders(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            }))
          )
        )
    }
  }, [user])

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {orders && orders.map((order, i) => <Order order={order} key={i} />)}
      </div>
    </div>
  )
}

export default Orders
