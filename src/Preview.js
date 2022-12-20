import React, { useEffect } from "react";
import "./Preview.css";
import { useDispatch, useSelector } from "react-redux";
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CreateIcon from "@mui/icons-material/Create";
import NoteIcon from "@mui/icons-material/Note";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TimerIcon from "@mui/icons-material/Timer";
import CropIcon from "@mui/icons-material/Crop";
import { Send } from "@mui/icons-material";
import {v4 as uuid } from "uuid";
import { db, storage } from "./firebase";
import firebase from "firebase/compat/app";
const Preview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cameraImage = useSelector(selectCameraImage);
  const closePreview = () => {
    dispatch(resetCameraImage());
  };
  const sendPost = () => {
    const id = uuid(); // uuid is there to provide unique id to an image no image with same id exist .....
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(cameraImage, "data_url");
    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageUrl: url,
              username: "Papa React",
              read: false,
              //profilePicture,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            navigate("/chats");
          });
      }
    );
  };
  useEffect(() => {
    if (!cameraImage) {
      navigate("/");
    }
  }, [cameraImage, navigate]);
  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview__close" />
      <div className="preview__toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={cameraImage} alt="" />
      <div onClick={sendPost} className="preview__footer">
        <h5>Send Now</h5>
        <Send  fontSize="small" className="preview__sendIcon" />
      </div>
    </div>
  );
};

export default Preview;
