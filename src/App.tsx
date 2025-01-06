import { HeroSpinningMetalicCubeDark as Hero } from "./Hero"
import { SupportedChains } from "./components/SupportedChains"
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-b from-black via-[#080808] to-[#111111]">
      <Hero />
      <SupportedChains />
      <Footer />
    </div>
  );
}

export default App;