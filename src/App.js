import './App.css';
import Profile from './components/profile';
import Header from './components/Header';
import About from './components/about';
import Interests from './components/Interests';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <div className="card">
        <Profile />
        <div className="content">
          <Header />
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
