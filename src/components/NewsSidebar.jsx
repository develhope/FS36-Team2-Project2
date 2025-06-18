import "./NewsSidebar.css";
import News from "./News";
import useLatestNews from "../hooks/useLatestsNews";
import useNextGames from "../hooks/useNextGames";
import useRecentlyReleased from "../hooks/useRecentlyReleased";
const NewsSidebar = () => {
  const { newsData } = useLatestNews();
  const { nextGameData } = useNextGames();
  const { recentlyReleasedData } = useRecentlyReleased();

  return (
    <>
      <aside className="news-sidebar">
        <div>
          <ul className="news-list">
            <li>
              <div className="news-first-li-element">
                <div className="little-rectangle"></div>
                <h2 className="news-first-title">
                  <News title="Ultime novità" />
                </h2>
              </div>
            </li>
            {newsData.map((item, i) => (
              <li key={i} className="news-item">
                <a href="">
                  <img className="news-img" src={item.image} />
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
                PIU' NOTIZIE{">>"}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="news-list">
            <li>
              <div className="news-first-li-element">
                <div className="little-rectangle"></div>
                <h2 className="news-first-title">
                  <News title="Prossimi giochi" />
                </h2>
              </div>
            </li>
            {nextGameData.map((item, i) => (
              <li key={i} className="news-item">
                <a href="">
                  <img className="news-img" src={item.image} />
                  <div className="news-info">
                    <h3 className="news-title">{item.title}</h3>
                    <span className="news-date">
                      {item.date} · {item.platform}
                    </span>
                  </div>
                </a>
                <a href="">
                  <img className="news-svg" src={item.svg} />
                </a>
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
              <div className="news-first-li-element">
                <div className="little-rectangle"></div>
                <h2 className="news-first-title">
                  <News title="Uscito di recente" />
                </h2>
              </div>
            </li>
            {recentlyReleasedData.map((item, i) => (
              <li key={i} className="news-item">
                <a href="">
                  <img className="news-img" src={item.image} />
                  <div className="news-info">
                    <h3 className="news-title">{item.title}</h3>
                    <span className="news-date">
                      {item.date} · {item.platform}
                    </span>
                  </div>
                </a>
                <a href="">
                  <img className="news-svg" src={item.svg} />
                </a>
              </li>
            ))}
            <li>
              <a href="" className="side-writting">
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
