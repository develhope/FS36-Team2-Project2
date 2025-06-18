import Header from "./components/headercomponents/Header.jsx";
import CardContainer from "./components/CardContainer";
import NewsSidebar from "./components/NewsSidebar";
import Footer from "./components/Footer";
import { useGetImages } from "./hooks/useGetImages";
import SideBar from "./components/headercomponents/SideBar.jsx";

function App() {
	const { images } = useGetImages();
	return (
		<div style={{
			backgroundColor: "#F4F4F4"
		}}>
			<Header />
			<SideBar />
			<div style={{
				display: "flex",

			}}>
				<CardContainer cardArray={images} />
				<NewsSidebar />
			</div>
			<Footer />
		</div>
	);
}

export default App;
