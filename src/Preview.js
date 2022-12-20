import React, { useEffect } from "react";
import "./Preview.css";
import { useDispatch, useSelector } from "react-redux";
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TimerIcon from '@mui/icons-material/Timer';
import CropIcon from '@mui/icons-material/Crop';
import { Send } from "@mui/icons-material";
const Preview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cameraImage = useSelector(selectCameraImage);
  const closePreview = () => {
    dispatch(resetCameraImage());
  };
  const sendPost=()=>{
    
  }
  useEffect(() => {
    if (!cameraImage) {
      navigate("/");
    }
  }, [cameraImage, navigate]);
  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview__close" />
      <div className="preview__toolbarRight">
        <TextFieldsIcon/>
        <CreateIcon/>
        <NoteIcon/>
        <MusicNoteIcon/>
        <AttachFileIcon/>
        <CropIcon/>
        <TimerIcon/>
      </div>
      <img src={cameraImage} alt="" />
      <div className="preview__footer">
        <h5>Send Now</h5>
        <Send  fontSize="small" className="preview__sendIcon"/>
      </div>
    </div>
  );
};

export default Preview;
