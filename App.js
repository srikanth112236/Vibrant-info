
import './App.css';
import AddData from './components/AddData';
import EditData from './components/EditData';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import RoutesComponent from './routes/RoutesComponent';

function App() {
  return (
    <>
      
      <Header />
      <RoutesComponent>
      < Home / >
      <AddData />
      <EditData />
    </RoutesComponent>
      <Footer />
     
    </>
  );
}

export default App;
