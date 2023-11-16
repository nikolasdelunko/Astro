import React from "react";
import DeleteIco from "../../Theme/Icons/DeleteIco";
import { DeleteUserSticker } from "../../../utils/Api/stickerApi";
import { useSelector, useDispatch } from "react-redux";
import { setTouch } from "../../../store/helpers/helpersSlice";
import { snackActions } from "../../../utils/customHooks/useSnackBarUtils";
import useConfirm from "../../../utils/customHooks/useConfirm";
import {link} from "../../../utils/Api/url"

export default function UserAvatar({ avatar }) {
  const touch = useSelector((state) => state.helpers.touch);
  const dispatch = useDispatch();
  const { confirm } = useConfirm();

  const askForDelete = async (id) => {
    const result = await confirm("delete order?");
    if (result) {
      const del = await DeleteUserSticker(id);
      snackActions.success(del.data);
      dispatch(setTouch(!touch));
    }
  };

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
                askForDelete(avatar._id);
              }}
            >
              <DeleteIco />
            </div>
          </div>
          <div>
					<p className="text-[14px] pb-[2px]">order id :</p>
            <p className="text-[16px] pb-[10px]">{avatar._id}</p>
            <p className="text-[14px] pb-[2px]">user buy stickers :</p>
            <p className="text-[16px] pb-[10px]">{avatar.date}</p>
						<img src={`${link}${avatar.thumbnail}`} alt="user-photo" className="w-[200px] h-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
