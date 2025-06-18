import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CardContainer from "./components/CardContainer";
import NewsSidebar from "./components/NewsSidebar";
import Footer from "./components/Footer";
import { useGetImages } from "./hooks/useGetImages";

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
