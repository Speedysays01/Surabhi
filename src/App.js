import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Extra from './pages/Extra/Extra';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer'; // Import Footer component

import './App.css'; // Global styles

const App = () => {
  const location = useLocation(); // Get the current route
  const noNavBarRoutes = ['/form', '/admin']; // Hide NavBar on these pages

  return (
    <>
      {/* Conditionally render NavBar */}
      {!noNavBarRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        {/* Define a single route for the main page with scrolling sections */}
        <Route
          path="/"
          element={
            <div className="scrollableContainer">
              <section id="home">
                <Home />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="experience">
                <Experience/>
              </section>

              <section id="projects">
                <Projects />
              </section>

            

              <section id="extra">
                <Extra />
              </section>

              <section id="contact">
                <Contact />
              </section>

              
             <section id="footer">
                <Footer />
              </section>
            </div>

            
          }
        />
       
      </Routes>
    </>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;



















// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// import NavBar from './components/NavBar/NavBar';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Skills from './pages/Skills/Skills';
// import Projects from './pages/Projects/Projects';
// import Experience from './pages/Experience/Experience';
// import Extra from './pages/Extra/Extra';
// import Contact from './pages/Contact/Contact';

// import './App.css'; // Global styles

// const App = () => {
//   const location = useLocation(); // Optional, in case you need current path

//   return (
//     <>
//       <NavBar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className="scrollableContainer">
//               <section id="home" className="scroll-section">
//                 <Home />
//               </section>

//               <section id="about" className="scroll-section">
//                 <About />
//               </section>

//               <section id="skills" className="scroll-section">
//                 <Skills />
//               </section>

//               <section id="projects" className="scroll-section">
//                 <Projects />
//               </section>

//               <section id="experience" className="scroll-section">
//                 <Experience />
//               </section>

//               <section id="extra" className="scroll-section">
//                 <Extra />
//               </section>

//               <section id="contact" className="scroll-section">
//                 <Contact />
//               </section>
//             </div>
//           }
//         />
//       </Routes>
//     </>
//   );
// };

// const Root = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default Root;
