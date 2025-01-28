import React from "react";
import { useSelector } from "react-redux";
import NoData from "../components/NoData";

const MyOrders = () => {
  const orders = useSelector((state) => state.orders.order);

  console.log("order Items", orders);
  return (
    <div>
      <div className="bg-white shadow-md p-3 font-semibold">
        <h1>Order</h1>
      </div>
      {!orders[0] && <NoData />}
      {orders.map((order, index) => { 
        return (
          <div
            key={order._id + index + "order"}
            className="order border mt-2 rounded p-4 text-sm"
          >
            <p>Order No : {order?.orderId}</p>
            <p>Payment Status: <span className={`font-medium ${order.payment_status === 'CASH ON DELIVERY' ? 'text-green-600' : 'text-yellow-600'}`}>{order.payment_status}</span></p>
            <div className="flex gap-3 mt-3">
              <img src={order.product_details?.image[0]} className="w-14 h-14" />
              <p className="font-medium">{order.product_details.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyOrders;
