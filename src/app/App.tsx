import About from "../components/About";
import Header from "../components/Header";
import Home from "../components/Home";
import Services from "../components/Services";
import Portfolio from "../components/portfolio";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
    </div>
  )
}