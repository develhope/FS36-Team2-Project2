import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CardContainer from "./components/CardContainer";
import NewsSidebar from "./components/NewsSidebar";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Header />
			<div className="appContainer">
				<SideBar />
				<CardContainer />
				<NewsSidebar />
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
