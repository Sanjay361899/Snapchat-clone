import { Avatar } from "@mui/material";
import React from "react";
import "./Chat.css";
import { StopRounded } from "@mui/icons-material";
import ReactTimeago from "react-timeago";
import { useDispatch } from "react-redux";
import { selectedImage } from "./features/appSlices";
import { db } from "./firebase";
import { Navigate, useNavigate } from "react-router-dom";
const Chat = ({ id, profilePic, username, timestamp, imageUrl, read }) => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const open = () => {
    if (!read) {
      dispatch(selectedImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );
      navigate('/chats/view');
    }
  };
  return (
    <div onClick={open} className="chat">
      <Avatar className="chat__avatar" src={profilePic} />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
        {!read && " Tap to view -"}{" "}
          <ReactTimeago date={new Date(timestamp?.toDate())?.toUTCString()} />
        </p>
      </div>
      {!read && <StopRounded className="chat__readIcon" />}
    </div>
  );
};

export default Chat;
