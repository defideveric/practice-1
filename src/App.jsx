import './App.css'
import Greet from './components/Greet'

const App = () => {

  return (
   <div>
      <Greet name='Maxine' heroName='girlfriend'>
        <p>This is a children prop</p>
      </Greet>
      <Greet name='Charlie' heroName='him'>
        <p>This is a second child prop</p>
      </Greet>
      <Greet name='Mike' heroName='himHim'/>
   </div>
  )
}

export default App
