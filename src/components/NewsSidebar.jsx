import React from "react";
import "./NewsSidebar.css";
import News from "./News";
import svg from "../assets/Logo e Svg/heart-like-favorite-svgrepo-com.svg";
const NewsSidebar = () => {
  const data = [
    {
      title: "In evidenza nel Nintendo eShop – 24/04/2025",
      date: "24/04/2025",
      platform: "Nintendo Switch",
      description:
        "Dai un'occhiata alle novità del Nintendo eShop di questa settimana!",
      link: "",
      // "https://www.nintendo.com/it-it/Notizie/2025/Aprile/In-evidenza-nel-Nintendo-eShop-24-04-2025-2806712.html",
      image: "/altre/1x1_WeeklyeShopHighlights_20250424_ITit_image950w.jpg",
    },
    {
      title: "In evidenza nel Nintendo eShop – 17/04/2025",
      date: "17/04/2025",
      platform: "Nintendo Switch",
      description:
        "Le novità del Nintendo eShop di questa settimana sono arrivate!",
      link: "",
      // "https://www.nintendo.com/it-it/Notizie/2025/Aprile/In-evidenza-nel-Nintendo-eShop-17-04-2025-2801434.html",
      image: "/altre/1x1_WeeklyeShopHighlights_20250417_ITit_image950w.jpg",
    },
    {
      title: "In evidenza nel Nintendo eShop – 10/04/2025",
      date: "10/04/2025",
      platform: "Nintendo Switch",
      description: "Cosa c'è di nuovo nel Nintendo eShop? Diamo un'occhiata!",
      link: "",
      // "https://www.nintendo.com/it-it/Notizie/2025/Aprile/In-evidenza-nel-Nintendo-eShop-10-04-2025-2798050.html",
      image: "/altre/1x1_WeeklyeShopHighlights_20250410_ITit_image950w.jpg",
    },
    {
      title: "Creator's Voice: The Duskbloods",
      date: "04/04/2025",
      platform: "Nintendo Switch 2",
      description:
        "Scopri di più sul gioco di FromSoftware in arrivo per Nintendo Switch 2",
      link: "",
      // "https://www.nintendo.com/it-it/Notizie/2025/Aprile/Creator-s-Voice-The-Duskbloods-2796823.html",
      image:
        "/altre/1x1_NSwitch2_TheDuskbloods_CreatorsVoice_S2Bar_image950w.jpg",
    },
    {
      title: "Chiedi allo sviluppatore, parte 17: GameChat - Capitolo 1",
      date: "03/04/2025",
      platform: "Nintendo Switch",
      description: "Una funzione distintiva",
      link: "",
      // "https://www.nintendo.com/it-it/Notizie/2025/Aprile/Chiedi-allo-sviluppatore-parte-17-GameChat-Capitolo-1-2788610.html",
      image: "/altre/1x1_AtD17_IT_it_image950w.jpg",
    },
    {
      title: "Chiedi allo sviluppatore, parte 17: GameChat - Capitolo 2",
      date: "03/04/2025",
      platform: "Nintendo Switch",
      description: "Atmosfera da festival",
      link: "",
      // "https://www.nintendo.com/it-it/Notizie/2025/Aprile/Chiedi-allo-sviluppatore-parte-17-GameChat-Capitolo-2-2788657.html",
      image: "/altre/1x1_AtD17_IT_it_image950w.jpg",
    },
    {
      title: "Chiedi allo sviluppatore, parte 17: GameChat - Capitolo 3",
      date: "03/04/2025",
      platform: "Nintendo Switch",
      description: "Sotto una luce diversa",
      link: "",
      // "https://www.nintendo.com/it-it/Notizie/2025/Aprile/Chiedi-allo-sviluppatore-parte-17-GameChat-Capitolo-3-2788658.html",
      image: "/altre/1x1_AtD17_IT_it_image950w.jpg",
    },
    {
      title:
        "Quali sono le novità di Nintendo Switch Online su Nintendo Switch 2?",
      date: "02/04/2025",
      platform: "Notizie più importanti",
      description:
        "Dai un occhiata a quello che è in arrivo per Nintendo Switch Online con Nintendo Switch 2 !",
      link: "",
      // "https://www.nintendo.com/it-it/Notizie/2025/Aprile/Quali-sono-le-novita-di-Nintendo-Switch-Online-su-Nintendo-Switch-2-2785954.html",
      image: "/altre/2x1_NSwitch2_NSO_logos.jpg",
    },
    {
      title:
        "Chiedi allo sviluppatore, parte 16: Nintendo Switch 2 - Capitolo 3",
      date: "02/04/2025",
      platform: "Nintendo Switch",
      description: "Valore aggiunto intrinseco",
      link: "",
      // "https://www.nintendo.com/it-it/Notizie/2025/Aprile/Chiedi-allo-sviluppatore-parte-16-Nintendo-Switch-2-Capitolo-3-2787953.html",
      image: "/altre/1x1_AtD17_IT_it_image950w.jpg",
    },
    {
      title:
        "Chiedi allo sviluppatore, parte 16: Nintendo Switch 2 - Capitolo 4",
      date: "02/04/2025",
      platform: "Nintendo Switch",
      description: "Un nuovo standard",
      link: "",
      // "https://www.nintendo.com/it-it/Notizie/2025/Aprile/Chiedi-allo-sviluppatore-parte-16-Nintendo-Switch-2-Capitolo-4-2787954.html",
      image: "/altre/1x1_AtD17_IT_it_image950w.jpg",
    },
  ];
  const secondData = [
    {
      title: "Cipher Monk",
      date: "29/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      link: "",

      image: "/altre/1x1_CipherMonk_image950w.jpg",
    },
    {
      title: "Fantasy Life",
      date: "29/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      link: "",
      image: "/altre/1x1_FantasyLifeITheGirl_WhoStealsTime_ITit_image950w.jpg",
    },
    {
      title: "Hannah's Day",
      date: "29/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      link: "",
      image: "/altre/1x1_HannahsDay_image950w.jpg",
    },
    {
      title: "Knight's Night",
      date: "30/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      link: "",

      image: "/altre/1x1_KnightsNight_image950w.jpg",
    },
  ];
  const thirdData = [
    {
      title: "Fantasy Life && Capcom Fighting Collection",
      date: "03/05/2025",
      platform: "Nintendo Switch",
      svg: svg,
      link: "",
      image: "/altre/1x1_NSwitch_UpcomingGames_May_IT_it_image950w.jpg",
    },
    {
      title: "High On Life && Spiritfall",
      date: "26/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      link: "",
      image: "/altre/1x1_WeeklyeShopHighlights_20250508_ITit_image950w.jpg",
    },
    {
      title: "American Arcadia",
      date: "25/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      link: "",
      image: "/altre/1x1_WeeklyeShopHighlights_20250515_IT_it_image950w.jpg",
    },
    {
      title: "Pancho's Missions",
      date: "25/04/2025",
      platform: "Nintendo Switch",
      svg: svg,
      link: "",
      image: "/altre/1x1_PanchosMission_image950w.jpg",
    },
  ];
  return (
    <>
      <aside className="news-sidebar">
        <div>
          <ul className="news-list">
            <li>
              <h2 className="ultime-novita">
                <News title="Ultime novità" />
              </h2>
            </li>
            {data.map((item, i) => (
              <li key={i} className="news-item">
                <a href={item.link}>
                  <img src={item.image} />
                  <div className="news-info">
                    <h3 className="news-title">{item.title}</h3>
                    <span className="news-date">
                      {item.date} | {item.platform}
                    </span>
                    <div className="news-description">{item.description}</div>
                  </div>
                </a>
              </li>
            ))}
            <li>
              <a href="" className="side-writting">
                {" "}
                PIU' NOTIZIE{">>"}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="news-list">
            <li>
              <h2 className="prossimi-giochi">
                <News title="Prossimi giochi" />
              </h2>
            </li>
            {secondData.map((item, i) => (
              <li key={i} className="news-item">
                <a href={item.link}>
                  <img src={item.image} />
                  <div className="news-info">
                    <h3 className="news-title">{item.title}</h3>
                    <span className="news-date">
                      {item.date} · {item.platform}
                    </span>
                    {/* <div className="news-svg">{item.svg}</div> */}
                  </div>
                </a>
                <a className="news-svg">{item.svg}</a>
              </li>
            ))}
            <li>
              <a href="" className="side-writting">
                VEDI TUTTI I GIOCHI{">>"}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="news-list">
            <li>
              <h2 className="uscito-di-recente">
                <News title="Uscito di recente" />
              </h2>
            </li>
            {thirdData.map((item, i) => (
              <li key={i} className="news-item">
                <a href={item.link}>
                  <img src={item.image} />
                  <div className="news-info">
                    <h3 className="news-title">{item.title}</h3>
                    <span className="news-date">
                      {item.date} · {item.platform}
                    </span>
                    {/* <div className="news-svg">{item.svg}</div> */}
                  </div>
                </a>
                <a className="news-svg">{item.svg}</a>
              </li>
            ))}
            <li>
              <a href="" className="side-writting">
                {" "}
                VEDI TUTTI I GIOCHI {">>"}
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default NewsSidebar;
