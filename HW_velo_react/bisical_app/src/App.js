
import './App.css';
import Header from './components/Header/Header';
import Rent from './components/Rent/Rent';
import Service from './components/Service/Service';
import ServiceList from './components/ServiceList/ServiceList';
import Slogan from './components/Slogan/Slogan';

function App() {
  return (
    <div >
    <Header/>
    <Service/>
    <Slogan/>
    <ServiceList/>
    <Rent/>
    </div>
  );
}

export default App;
