import './App.css';
import HookCounter from './components/Hook Counter';
import Greet from './components/Greet';

const App = () => {

  return (
   <div>
    <Greet name ="Eric" heroName="eBreezy"/>
    <HookCounter/>
   </div>
  )
}

export default App
