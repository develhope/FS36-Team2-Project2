import React from "react";
import "./NewsSidebar.css";
import News from "./News";
const NewsSidebar = () => {
  const data = [
    {
      title: "In evidenza nel Nintendo eShop – 24/04/2025",
      date: "24/04/2025",
      platform: "Nintendo Switch",
      description:
        "Dai un'occhiata alle novità del Nintendo eShop di questa settimana!",
      link: "https://www.nintendo.com/it-it/Notizie/2025/Aprile/In-evidenza-nel-Nintendo-eShop-24-04-2025-2806712.html",
      image:
        "https://www.nintendo.com/eu/media/images/news_12/2025/april_31/1x1_WeeklyeShopHighlights_20250424_ITit_bannerTM_MD.jpg",
    },
    {
      title: "In evidenza nel Nintendo eShop – 17/04/2025",
      date: "17/04/2025",
      platform: "Nintendo Switch",
      description:
        "Le novità del Nintendo eShop di questa settimana sono arrivate!",
      link: "https://www.nintendo.com/it-it/Notizie/2025/Aprile/In-evidenza-nel-Nintendo-eShop-17-04-2025-2801434.html",
      image:
        "https://www.nintendo.com/eu/media/images/news_12/2025/april_31/1x1_WeeklyeShopHighlights_20250417_ITit_bannerTM_MD.jpg",
    },
    {
      title: "In evidenza nel Nintendo eShop – 10/04/2025",
      date: "10/04/2025",
      platform: "Nintendo Switch",
      description: "Cosa c'è di nuovo nel Nintendo eShop? Diamo un'occhiata!",
      link: "https://www.nintendo.com/it-it/Notizie/2025/Aprile/In-evidenza-nel-Nintendo-eShop-10-04-2025-2798050.html",
      image:
        "https://www.nintendo.com/eu/media/images/news_12/2025/april_31/1x1_WeeklyeShopHighlights_20250410_ITit_bannerTM_MD.jpg",
    },
    {
      title: "Creator's Voice: The Duskbloods",
      date: "04/04/2025",
      platform: "Nintendo Switch 2",
      description:
        "Scopri di più sul gioco di FromSoftware in arrivo per Nintendo Switch 2",
      link: "https://www.nintendo.com/it-it/Notizie/2025/Aprile/Creator-s-Voice-The-Duskbloods-2796823.html",
      image:
        "https://www.nintendo.com/eu/media/images/news_12/2025/april_31/creatorsvoice/cv_td/1x1_NSwitch2_TheDuskbloods_CreatorsVoice_S2Bar_bannerTM_MD.jpg",
    },
  ];
  return (
    <>
      <aside className="news-sidebar">
        <div>
          <h2>
            <News title="Ultime novità" />
          </h2>
          <ul className="news-list">
            {data.map((item, i) => (
              <li key={i} className="news-item">
                <a href={item.link}>
                  <img src={item.image} alt={item.title} />
                  <div className="news-info">
                    <h3 className="news-title">{item.title}</h3>
                    <span className="news-date">
                      {item.date} - {item.platform}
                    </span>
                    <div className="news-description">{item.description}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <News title="Prossimi giochi" />
        </div>
        <div>
          <News title="Uscito di recente" />
        </div>
      </aside>
    </>
  );
};

export default NewsSidebar;
