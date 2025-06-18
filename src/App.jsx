import Header from "./components/headercomponents/Header";
import SideBar from "./components/headercomponents/SideBar";
import CardContainer from "./components/CardContainer";
import NewsSidebar from "./components/NewsSidebar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<SideBar />
			<CardContainer />
			<NewsSidebar />
			<Footer />
		</>
	);
}

export default App;
