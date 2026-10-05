import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import type { CATEGORIES } from "./data/posts";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Article from "./pages/Article";

export type Filter = (typeof CATEGORIES)[number];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export default function App() {
  const [filter, setFilter] = useState<Filter>("All");
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [subscribed, setSubscribed] = useState(false);

  const toggleLike = (id: string) => setLiked((l) => ({ ...l, [id]: !l[id] }));

  return (
    <div className="page">
      <ScrollToTop />
      <Nav onFilter={setFilter} />
      <main>
        <Routes>
          <Route path="/" element={<Home filter={filter} onFilter={setFilter} />} />
          <Route path="/essays/:id" element={<Article liked={liked} onToggleLike={toggleLike} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Newsletter subscribed={subscribed} onSubscribe={() => setSubscribed(true)} />
      </main>
      <Footer />
    </div>
  );
}
