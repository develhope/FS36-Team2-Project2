import Header from "./components/headercomponents/Header";
import SideBar from "./components/headercomponents/SideBar";
import CardContainer from "./components/CardContainer";
import NewsSidebar from "./components/NewsSidebar";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Header />
			<SideBar />
			<CardContainer />
			<NewsSidebar />
			<Footer />
		</div>
	);
}

export default App;
