import React, { useState } from "react";
import ChangeIco from "../../../Theme/Icons/ChangeIco";
import { PatchOrderStatus } from "../../../utils/Api/orderApi";
import { useSelector, useDispatch } from "react-redux";
import { snackActions } from "../../../utils/customHooks/useSnackBarUtils";
import useConfirm from "../../../utils/customHooks/useConfirm";
import { setTouch } from "../../../store/helpers/helpersSlice";

export default function Order({ item }) {
  const [more, setMore] = useState(false);
  const dispatch = useDispatch();
  const { confirm } = useConfirm();
  const touch = useSelector((state) => state.helpers.touch);

  const askForUpdate = async (email, number) => {
    const isConfirmed = await confirm("change order status?");
    if (isConfirmed) {
      const patch = await PatchOrderStatus({ email: email, number: number });
      snackActions.success(patch.data);
      dispatch(setTouch(!touch));
    }
  };

  return (
    <div>
      <button
        className="btn-modal-second"
        onClick={() => {
          setMore(!more);
        }}
      >
        {more ? "less details" : "more details"}
      </button>
      {more && (
        <div className="flex justify-between">
          <div>
            <p className="text-[14px] pb-[2px]">status:</p>
            <p className="text-[16px] pb-[10px]">{item.status}</p>
            <p className="text-[14px] pb-[2px]">pay:</p>
            <p className="text-[16px] pb-[10px]">
              {item.pay ? "true" : "false"}
            </p>
            <p className="text-[14px] pb-[2px]">user theme :</p>
            <p className="text-[16px] pb-[10px]">{item.theme}</p>
            <p className="text-[14px] pb-[2px]">user genre:</p>
            <p className="text-[16px] pb-[10px]">{item.genre[0]}</p>
            <p className="text-[16px] pb-[10px]">{item.genre[2]}</p>
            <p className="text-[14px] pb-[2px]">user conflict:</p>
            <p className="text-[16px] pb-[10px]">{item.conflict}</p>
            <p className="text-[14px] pb-[2px]">amountCharacter:</p>
            <p className="text-[16px] pb-[10px]">{item.amountCharacter}</p>
            <p className="text-[14px] pb-[2px]">favoriteCharacter:</p>
            <p className="text-[16px] pb-[10px]">{item.favoriteCharacter}</p>
            <p className="text-[14px] pb-[2px]">placeOfSetting:</p>
            <p className="text-[16px] pb-[10px]">{item.placeOfSetting}</p>
            <p className="text-[14px] pb-[2px]">pointOfView:</p>
            <p className="text-[16px] pb-[10px]">{item.pointOfView}</p>
            <p className="text-[14px] pb-[2px]">timeOfSetting:</p>
            <p className="text-[16px] pb-[10px]">{item.timeOfSetting}</p>
            <p className="text-[14px] pb-[2px]">designPrompt:</p>
            <p className="text-[16px] pb-[10px]">{item.designPrompt}</p>
            <p className="text-[14px] pb-[2px]">user plot:</p>
            <p className="text-[16px] pb-[10px]">{item.plot}</p>
          </div>
          <div
            className="cursor-pointer gap-[10px] right-[10px] absolute"
            onClick={() => {
              askForUpdate(item.email, item.number);
            }}
          >
            <ChangeIco />
          </div>
        </div>
      )}
    </div>
  );
}
