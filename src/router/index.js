import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Cart from 'pages/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho-de-compras" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
