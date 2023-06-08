import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/myprojects/Projects";
import Blogs from "./components/myblogs/Blogs";
import BlogAdmin from "./components/admin/BlogAdmin";
import Contact from "./components/contact/Contact";
import NotFoundPage from "./components/notfound/NotFoundPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/rdjislove" element={<BlogAdmin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
