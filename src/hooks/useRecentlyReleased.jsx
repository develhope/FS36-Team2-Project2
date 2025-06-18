import { useState } from "react";
import svg from "../assets/Logo&Svg/heart.svg";
export default function useRecentlyReleased() {
  const [recentlyReleasedData] = useState([
    {
      title: "Fantasy Life && Capcom Fighting Collection",
      date: "03/05/2025",
      platform: "Nintendo Switch",
      svg: svg,
      image: "/altre/1x1_NSwitch_UpcomingGames_May_IT_it_image950w.jpg",
    },
    {
      title: "High On Life && Spiritfall",
      date: "26/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      image: "/altre/1x1_WeeklyeShopHighlights_20250508_ITit_image950w.jpg",
    },
    {
      title: "American Arcadia",
      date: "25/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      image: "/altre/1x1_WeeklyeShopHighlights_20250515_IT_it_image950w.jpg",
    },
    {
      title: "Pancho's Missions",
      date: "25/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      image: "/altre/1x1_PanchosMission_image950w.jpg",
    },
  ]);
  return { recentlyReleasedData };
}
