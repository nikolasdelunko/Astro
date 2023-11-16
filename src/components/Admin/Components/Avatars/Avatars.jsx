import React, { useEffect, useState } from "react";
import { GetUSerSticker } from "../../../utils/Api/stickerApi";
import Avatar from "./UserAvatar";
import { useSelector } from "react-redux";

export default function Avatars() {
  const [avatars, setAvatars] = useState();
	const touch = useSelector((state) => state.helpers.touch);

  const getData = async () => {
    const data = await GetUSerSticker();
    setAvatars(data.data);
  };

  useEffect(() => {
    getData();
  }, [touch]);

  return (
    <div className="flex flex-wrap gap-[15px] max-[420px]:flex-col">
      {avatars?.map((el) => (
        <Avatar avatar={el} key={el._id} />
      ))}
    </div>
  );
}
