import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const ReCaptcha = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ReCAPTCHA
        sitekey="6LfglsclAAAAANBCypsyrx_OaApVqodYZFUSueul"
        onChange={() => {
          navigate("/?verified=true&clickid=1");
        }}
      />
    </div>
  );
};

export default ReCaptcha;
