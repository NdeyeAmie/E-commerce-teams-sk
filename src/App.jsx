import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidbar from './admin/sidbar/Sidbar';
import Dashboard from './admin/dashboard/Dashboard';
import HeaderAdmin from './admin/navbar/HeaderAdmin';
import Acceuil from './Page d\'accueil/accueil';


function App() {
  return (
    // <Acceuil/>
      <BrowserRouter>
      <HeaderAdmin/>
      <div className="main d-flex">
        <div className="sidebarWrapper">
          <Sidbar/>
        </div>
      

      <div className="content"> 
      <Routes>
        <Route path='/' exact={true} element={ <Dashboard/> } />
        <Route path='/dashboard' exact={true} element={ <Dashboard/> } />
      </Routes>
      </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
