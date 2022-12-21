import React, { useEffect } from "react";
import "./ChatView.css";
import { useSelector } from "react-redux";
import { selectSelectedImage } from "./features/appSlices";
import { useNavigate } from "react-router-dom";
import { ExitToApp } from "@mui/icons-material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const ChatView = () => {
  const selectedImage = useSelector(selectSelectedImage);
  const navigate = useNavigate();
  const exit = () => {
    navigate("/chats");
  };
  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage]);

  return (
    <div className="chatView">
      <img src={selectedImage} onClick={exit} alt="" />
      <div className="chatView___timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[
            ["#004777", 0.33],
            ["#F7BB01", 0.33],
            ["#A30000", 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default ChatView;
