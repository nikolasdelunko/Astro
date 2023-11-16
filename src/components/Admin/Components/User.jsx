import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setEditAdmin } from "../../store/admin/adminSlice";
import EditIco from "../Theme/Icons/EditIco";
import DeleteIco from "../Theme/Icons/DeleteIco";
import { deleteUserById } from "../../utils/Api/userApi";
import { setTouch } from "../../store/helpers/helpersSlice";
import { snackActions } from "../../utils/customHooks/useSnackBarUtils";
import useConfirm from "../../utils/customHooks/useConfirm";

export default function PhotoCard() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.users);
  const touch = useSelector((state) => state.helpers.touch);
  const { confirm } = useConfirm();

  const deleteUser = async (id, name) => {
    const a = await confirm(`delete user: ${name}?`);
    if (a) {
      try {
        const resp = await deleteUserById(id);
        dispatch(setTouch(!touch));
        snackActions.success(resp.data);
      } catch (e) {
        snackActions.error(e.name);
      }
    }
  };

  return (
    <div className="flex gap-[15px] max-[420px]:flex-col">
      {users.map((user) => (
        <div
          className="rounded-[24px] border-[8px] border-main-color z-[2] relative"
          style={{
            width: "250px",
            height: "250px",
          }}
        >
          <div className="rounded-[15px] h-[100%] w-[100%] mt-[10%] ml-[10%]">
            <div className="flex absolute right-[10px] gap-[10px]">
              <div
                className="cursor-pointer"
                onClick={() => {
                  dispatch(setEditAdmin("user"));
                  dispatch(addUser(user));
                }}
              >
                <EditIco />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  deleteUser(user.id, user.name);
                }}
              >
                <DeleteIco />
              </div>
            </div>
            <div>
              <p className="text-[15px] pb-[2px]">user name :</p>
              <p className="text-[20px] pb-[10px]">{user.name}</p>
              <p className="text-[15px] pb-[2px]">user email :</p>
              <p className="text-[20px] pb-[10px]">{user.email}</p>
              <p className="text-[15px] pb-[2px]">reg date :</p>
              <p className="text-[20px] pb-[10px]">{user.date.slice(0, 10)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
