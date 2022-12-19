import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { setCameraImage } from "./features/cameraSlice";
import { useNavigate } from "react-router-dom";
import './WebcamCapture.css';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};
const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    dispatch(setCameraImage(imageSrc));
    navigate('/preview')
  }, [webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  );
};

export default WebcamCapture;
