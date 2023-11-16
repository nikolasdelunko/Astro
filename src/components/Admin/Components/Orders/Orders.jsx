import React, { useEffect, useState } from "react";
import { GetOrders } from "../../../utils/Api/orderApi";
import { useSelector } from "react-redux";
import OrderList from "./OrderList";

export default function PhotoCard() {
  const [orders, setOrders] = useState();
  const touch = useSelector((state) => state.helpers.touch);

  const FectchData = async () => {
    const data = await GetOrders();
    setOrders(data.data);
  };

  useEffect(() => {
    FectchData();
  }, [touch]);

  return (
    <div className="flex flex-wrap gap-[15px] max-[420px]:flex-col">
      {orders?.map((order) => (
        <OrderList order={order} key={order._id} />
      ))}
    </div>
  );
}
