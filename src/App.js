import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboardview from './components/Dashboardview';
import { Outlet } from 'react-router-dom';
//import Main from './components/Main';

function App() {
  return (
    <div className="flex">
      <div className='basis-[20%] h-[100vh]'>
      <Sidebar></Sidebar>
      </div>
      
      <div className='basis-[88%] border h-[100vh] overflow-scroll'>
        <Dashboardview></Dashboardview>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      </div>
  );
}

export default App;
