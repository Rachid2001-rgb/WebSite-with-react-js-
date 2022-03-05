import logo from './logo.svg';
import "./App.css";
import NavigationBar from './components/NavigationBar';
import Hero from './components/hero';

const App = () => {
  return (
    <div >
      {/* <cimg src={logo} className="App-logo" alt="logo" /> */}
      <NavigationBar></NavigationBar>
      <Hero></Hero>
    </div>)
};


export default App;


