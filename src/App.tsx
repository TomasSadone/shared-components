import React from 'react';
import './styles/app.sass';
import { Routes, Route } from 'react-router-dom';
import Layout from 'Layout';
import Home from 'Pages/Home';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/icons" element={<Home />} />
        <Route path="/forms" element={<Home />} />
        <Route path="/items" element={<Home />} />
        <Route path="/d1-item1" element={<Home />} />
        <Route path="/d1-item2" element={<Home />} />
        <Route path="/d2-item1" element={<Home />} />
        <Route path="/d2-item2" element={<Home />} />
        <Route path="/d3-item1" element={<Home />} />
        <Route path="/d3-item2" element={<Home />} />
        <Route path="/d4-item1" element={<Home />} />
        <Route path="/d4-item2" element={<Home />} />
        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
