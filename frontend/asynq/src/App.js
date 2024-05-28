
import './App.css';
import Navbar from './Component/Navbar';
import Allroutes from './Component/Route/Allroutes';

function App() {
  return (
    <div className="App">
     {/* <h1 className='text-[40px]'>Asynq App</h1> */}
     <div className='sticky top-0 z-10'>
     <Navbar/>
     </div>
    
     <Allroutes/>
    </div>
  );
}

export default App;
