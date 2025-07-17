import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { HeroSection } from './Components/HeroSection';
import { Find } from './Components/Find';
import { LoginPage } from './Components/Login/LoginPage';

function App() {
  return (
    <div className="App">
      {/* <div className='main-page'>
      <Header></Header>
      <HeroSection></HeroSection>
      </div>
      <Find></Find> */}
      <LoginPage></LoginPage>

    </div>
  );
}

export default App;
