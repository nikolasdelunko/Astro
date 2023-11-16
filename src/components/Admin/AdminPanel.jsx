import React, { useEffect } from "react";
import Window from "./Components/Window";
import AddPostBlog from "./Components/AdPost/AddPostBlog";
import User from "../../Admin/User";
import { getUsers } from "../../utils/Api/userApi";
import AddUser from "./Components/AddUser";
import Order from "./Components/Orders/Orders";
import Avatars from "./Components/Avatars/Avatars";
import { setPage, $touch } from "../../store/helpersStore";
import { useStore } from "@nanostores/react";
import { addUsers, $user, $post, $edit } from "../../store/adminSlice";

export default function AdminPanel() {
  const edit = useStore($edit);
  const editPost = useStore($post);
  const user = useStore($user);
  const touch = useStore($touch);

  const fetchUsers = async () => {
    const data = await getUsers();
    return addUsers(data.data);
  };

  useEffect(() => {
    setPage("admin");
    fetchUsers();
  }, [touch]);

  return (
    <div className="flex flex-col items-center justify-center bg-bg-main pb-[500px] pt-[300px]">
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
