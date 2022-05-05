import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Admin from './pages/Admin/admin';
import Products from './pages/Products/products';
import Layout from './components/Layout/layout';
import Settings from "./pages/Settings/settings";
import Profile from "./pages/Profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="admin" element={<Admin />}>
            <Route path="settings" element={<Settings/>}/>
            <Route path="profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
