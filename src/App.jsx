import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Filter from "./Components/Filter";
import Topics from "./Components/Topics";
import Footer from "./Components/Footer";
import Notes from "./Components/Notes";
import Pdf from "./Components/Pdf.jsx";
import Contact from "./Components/Contact.jsx";
import FAQ from "./Components/FAQ.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Intro />
          <Filter />
          <Topics />
          <Footer />
        </>
      ),
    },

    {
      path: "/results",
      element: (
        <>
          <Navbar />
          <Notes />
          <Footer />
        </>
      ),
    },

    {
      path: "/results/view",
      element: (
        <>
          <Navbar />
          <Pdf />
          <Footer />
        </>
      ),
    },

    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },

    {
      path: "/FAQ",
      element: (
        <>
          <Navbar />
          <FAQ />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
