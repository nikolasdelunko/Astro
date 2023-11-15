import React, { useEffect } from "react";
import { setPage } from "../../store/helpers/helpersSlice";
import { addUsers } from "../../store/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import Window from "../../Components/Admin/Window";
import AddPostBlog from "../../Components/Admin/AdPost/AddPostBlog";
import User from "../../Components/Admin/User";
import { getUsers } from "../../utils/Api/userApi";
import AddUser from "../../Components/Admin/AddUser";
import Order from "../../Components/Admin/Orders/Orders";
import Avatars from "../../Components/Admin/Avatars/Avatars"

export default function AdminPanel() {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.admin.edit);
  const editPost = useSelector((state) => state.admin.post);
  const user = useSelector((state) => state.admin.user);
  const touch = useSelector((state) => state.helpers.touch);

  const fetchUsers = async () => {
    const data = await getUsers();
    return dispatch(addUsers(data.data));
  };

  useEffect(() => {
    dispatch(setPage("admin"));
    fetchUsers();
  }, [touch]);

  return (
    <div className="pt-[300px] pb-[500px] flex items-center justify-center flex-col bg-bg-main">
      {edit === "post" ? (
        <Window
          name={"Add Post in blog"}
          children={<AddPostBlog post={editPost} />}
        />
      ) : (
        <Window name={"Edit my posts in blog"} edit={true} />
      )}
      <Window name={"Add Post in blog"} children={<AddPostBlog />} />
      {edit === "user" ? (
        <Window name={"edit user"} children={<AddUser user={user} />} />
      ) : (
        <Window name={"all users"} children={<User />} />
      )}

      <Window name={"add user"} children={<AddUser />} />
      <Window name={"orders"} children={<Order />} />
			<Window name={"avatars"} children={<Avatars />} />
    </div>
  );
}
