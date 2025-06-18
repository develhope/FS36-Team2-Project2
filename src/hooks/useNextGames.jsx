import { useState } from "react";
import svg from "../assets/Logo&Svg/heart.svg";

export default function useNextGames() {
  const [nextGameData] = useState([
    {
      title: "Cipher Monk",
      date: "29/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      image: "/altre/1x1_CipherMonk_image950w.jpg",
    },
    {
      title: "Fantasy Life",
      date: "29/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      image: "/altre/1x1_FantasyLifeITheGirl_WhoStealsTime_ITit_image950w.jpg",
    },
    {
      title: "Hannah's Day",
      date: "29/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      image: "/altre/1x1_HannahsDay_image950w.jpg",
    },
    {
      title: "Knight's Night",
      date: "30/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      image: "/altre/1x1_KnightsNight_image950w.jpg",
    },
  ]);
  return { nextGameData };
}
