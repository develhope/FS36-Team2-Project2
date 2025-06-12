import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CardContainer from "./components/CardContainer";
import NewsSidebar from "./components/NewsSidebar";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Header />
      <SideBar />
      <CardContainer cardArray={cardArray} />
      <NewsSidebar />
      <Footer />
    </div>
  );
}

export default App;
