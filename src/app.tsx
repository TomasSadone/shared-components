import React from 'react';
// import './styles/app.sass';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home';
import Icons from './pages/icons';
import Items from './pages/items';
import Forms from './pages/forms';
import Links from './pages/Links';
import { Tables } from './pages/tables';
import Test from './pages/Test';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/items" element={<Items />} />
          <Route path="/links" element={<Links />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/d1-item1" element={<Home />} />
          <Route path="/d1-item2" element={<Home />} />
          <Route path="/d2-item1" element={<Home />} />
          <Route path="/d2-item2" element={<Home />} />
          <Route path="/d3-item1" element={<Home />} />
          <Route path="/d3-item2" element={<Home />} />
          <Route path="/d4-item1" element={<Home />} />
          <Route path="/d4-item2" element={<Home />} />
          <Route path="/test" element={<Test />} />

          {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
