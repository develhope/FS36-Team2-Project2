import { useState } from "react";

export default function useLatestNews() {
  const [newsData] = useState([
    {
      title: "In evidenza nel Nintendo eShop - 24/04/2025",
      date: "24/04/2025",
      platform: "Nintendo Switch",
      description:
        "Dai un'occhiata alle novità del Nintendo eShop di questa settimana!",
      image: "/altre/1x1_WeeklyeShopHighlights_20250424_ITit_image950w.jpg",
    },
    {
      title: "In evidenza nel Nintendo eShop - 17/04/2025",
      date: "17/04/2025",
      platform: "Nintendo Switch",
      description:
        "Le novità del Nintendo eShop di questa settimana sono arrivate!",
      image: "/altre/1x1_WeeklyeShopHighlights_20250417_ITit_image950w.jpg",
    },
    {
      title: "In evidenza nel Nintendo eShop - 10/04/2025",
      date: "10/04/2025",
      platform: "Nintendo Switch",
      description: "Cosa c'è di nuovo nel Nintendo eShop? Diamo un'occhiata!",
      image: "/altre/1x1_WeeklyeShopHighlights_20250410_ITit_image950w.jpg",
    },
    {
      title: "Creator's Voice: The Duskbloods",
      date: "04/04/2025",
      platform: "Nintendo Switch 2",
      description:
        "Scopri di più sul gioco di FromSoftware in arrivo per Nintendo Switch 2",
      image:
        "/altre/1x1_NSwitch2_TheDuskbloods_CreatorsVoice_S2Bar_image950w.jpg",
    },
    {
      title: "Chiedi allo sviluppatore, parte 17: GameChat - Capitolo 1",
      date: "03/04/2025",
      platform: "Nintendo Switch",
      description: "Una funzione distintiva",
      image: "/altre/1x1_AtD17_IT_it_image950w.jpg",
    },
    {
      title: "Chiedi allo sviluppatore, parte 17: GameChat - Capitolo 2",
      date: "03/04/2025",
      platform: "Nintendo Switch",
      description: "Atmosfera da festival",
      image: "/altre/1x1_AtD17_IT_it_image950w.jpg",
    },
    {
      title: "Chiedi allo sviluppatore, parte 17: GameChat - Capitolo 3",
      date: "03/04/2025",
      platform: "Nintendo Switch",
      description: "Sotto una luce diversa",
      image: "/altre/1x1_AtD17_IT_it_image950w.jpg",
    },
    {
      title:
        "Quali sono le novità di Nintendo Switch Online su Nintendo Switch 2?",
      date: "02/04/2025",
      platform: "Notizie più importanti",
      description:
        "Dai un occhiata a quello che è in arrivo per Nintendo Switch Online con Nintendo Switch 2 !",
      image: "/altre/2x1_NSwitch2_NSO_logos.jpg",
    },
    {
      title:
        "Chiedi allo sviluppatore, parte 16: Nintendo Switch 2 - Capitolo 3",
      date: "02/04/2025",
      platform: "Nintendo Switch",
      description: "Valore aggiunto intrinseco",
      image: "/altre/1x1_AtD17_IT_it_image950w.jpg",
    },
    {
      title:
        "Chiedi allo sviluppatore, parte 16: Nintendo Switch 2 - Capitolo 4",
      date: "02/04/2025",
      platform: "Nintendo Switch",
      description: "Un nuovo standard",
      image: "/altre/1x1_AtD17_IT_it_image950w.jpg",
    },
  ]);
  return { newsData };
}
