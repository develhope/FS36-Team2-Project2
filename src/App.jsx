import Header from "./components/headercomponents/Header.jsx";
import CardContainer from "./components/CardContainer";
import NewsSidebar from "./components/NewsSidebar";
import Footer from "./components/Footer";
import { useGetImages } from "./hooks/useGetImages";
import SideBar from "./components/headercomponents/SideBar.jsx";

function App() {
	const { images } = useGetImages();
	return (
		<div>
			<Header />
			<SideBar />
			<CardContainer cardArray={images} />
			<NewsSidebar />
			<Footer />
		</div>
	);
}

export default App;
