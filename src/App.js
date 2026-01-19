import { useState, useEffect } from "react";

import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from "./views/Home";
import Categories from "./views/Categories";
import CategoryPage from "./views/CategoryPage";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {!loading ? (
        <div>
          <Navbar onNavigateToHome={() => setSelectedCategory(null)} />
          {!selectedCategory ? (
            <>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="categories">
                <Categories onSelectCategory={setSelectedCategory} />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </>
          ) : (
            <CategoryPage
              categoryId={selectedCategory}
              onBack={() => {
                setSelectedCategory(null);
                setTimeout(() => {
                  const element = document.getElementById("categories");
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.pageYOffset - 25;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }, 100);
              }}
            />
          )}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </ThemeProvider>
  );
}

export default App;
