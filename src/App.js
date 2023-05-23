import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
      <Footer />
    </>
  );
}

export default App;
