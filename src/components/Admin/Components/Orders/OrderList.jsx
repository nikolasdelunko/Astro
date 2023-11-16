import React from "react";
import DeleteIco from "../../Theme/Icons/DeleteIco";
import { DeleteOrder } from "../../../utils/Api/orderApi";
import { useSelector, useDispatch } from "react-redux";
import { setTouch } from "../../../store/helpers/helpersSlice";
import { snackActions } from "../../../utils/customHooks/useSnackBarUtils";
import useConfirm from "../../../utils/customHooks/useConfirm";
import Order from "./Order";

export default function OrderList({ order }) {
  const touch = useSelector((state) => state.helpers.touch);
  const dispatch = useDispatch();
  const { confirm } = useConfirm();

  const askForDelete = async (id) => {
    const result = await confirm("delete order?");
    if (result) {
      const del = await DeleteOrder(id);
      snackActions.success(del.data);
      dispatch(setTouch(!touch));
    }
  };
  //! max-[420px]:
  return (
    <div>
      <div
        className="rounded-[24px] border-[8px] border-main-color z-[2] relative"
        style={{
          width: "250px",
          "@media only screen and (maxWidth: 420px)": {
            width: "350px",
          },
        }}
      >
        <div className="rounded-[15px] h-[100%] w-[100%] mt-[10%] ml-[10%]">
          <div className="flex absolute right-[10px] gap-[10px]">
            <div
              className="cursor-pointer"
              onClick={() => {
                askForDelete(order._id);
              }}
            >
              <DeleteIco />
            </div>
          </div>
          <div>
            <p className="text-[14px] pb-[2px]">user email :</p>
            <p className="text-[16px] pb-[10px]">{order.email}</p>
            {order.orders.map((item) => (
              <div key={item._id}>
                <p className="text-[14px] pb-[2px]">number order :</p>
                <p className="text-[16px] pb-[10px]">{item.number}</p>
                <Order item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
