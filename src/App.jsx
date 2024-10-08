// src/App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Introduction from "./components/Introduction"
import PhotoGallery from "./components/PhotoGallery"
import BlogPost from './components/Blog/BlogPost'; 
import BehindTheScenesBlogPost from './components/Blog/BehindTheScenesBlogPost';
import '../src/styles.css';
import Contact from './components/Contact';

function App() {
return (
	<Router>
		<Navbar />
	<div>
		
		
		<Routes>
		<Route path="/" element={<Introduction />} />
		<Route path="/blog/tips-for-portrait" element={<BlogPost />} />
<Route path="/blog/behind-the-scenes" element={<BehindTheScenesBlogPost />} />

		<Route path="/gallery" element={<PhotoGallery />} />
		<Route path="/contact" element={<Contact />} />

		</Routes>
	</div>
	</Router>
);
}

export default App;
