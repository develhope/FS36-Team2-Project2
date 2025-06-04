import React from "react";
import "./NewsSidebar.css";
import UltimeNovità from "./UltimeNovità";
import ProssimiGiochi from "./ProssimiGiochi";
import UscitoDiRecente from "./UscitoDiRecente";
const NewsSidebar = () => {
  return (
    <>
      <div className="news-sidebar">
        <div className="ultime_novità">
          <UltimeNovità />
        </div>
        <div className="prossimi_giochi">
          <ProssimiGiochi />
        </div>
        <div className="uscito_di_recente">
          <UscitoDiRecente />
        </div>
      </div>
    </>
  );
};

export default NewsSidebar;
