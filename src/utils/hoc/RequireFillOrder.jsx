import { useLocation, Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

function RequireFill({ children }) {
  const location = useLocation();
  const fill = useSelector((state) => state.story.fill);

  if (!fill) {
    return <Navigate to="/create" state={{ from: location }} />;
  }
  return children;
}

function RequirePay({ children }) {
  const location = useLocation();
  const pay = useSelector((state) => state.story.pay);

  if (!pay) {
    return <Navigate to="/checkout" state={{ from: location }} />;
  }
  return children;
}

function RequirePayStickers({ children }) {
  const location = useLocation();
  const paySticker = useSelector((state) => state.stickers.pay);

  if (!paySticker) {
    return <Navigate to="/stickers-page-upload" state={{ from: location }} />;
  }
  return children;
}

export { RequireFill, RequirePay, RequirePayStickers };
