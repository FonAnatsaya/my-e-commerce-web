import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:categoryId" element={<Category />} />
    </Routes>
  );
}
