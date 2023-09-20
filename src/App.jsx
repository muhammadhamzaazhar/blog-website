import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import HomePage from "./pages/homepage/homepage.component";
import BlogContentPage from "./pages/blog-content-page/blog-content-page.component";

import useFetch from "./hooks/useFetch";

export default function App() {
  let { data, loading } = useFetch('http://localhost:1337/api/blogs?populate=*');

  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route exact path="/" element={loading ? <Spinner /> : <HomePage blogs={data ? data : ""} />} />
          <Route exact path="/blog/:id" element={loading ? <Spinner /> : <BlogContentPage blogs={data ? data : ""} />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}