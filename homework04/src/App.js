import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuComponent from './MenuComponent';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MenuComponent />}>
            <Route path="/" element={<Component1 />} />
            <Route path="/component2" element={<Component2 />} />
            <Route path="/component3" element={<Component3 />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
};

export default App;