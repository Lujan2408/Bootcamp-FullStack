import './App.css'
import Messages from './Messages.jsx'
import Titles from './Titles.jsx'

const App = () => {
          
  return (
    <div id='root'> 
    <Titles color='red' title='Welcome'/>
    <Titles color='blue' title='Welcome'/>
    <Titles color='orange' title='Hello World'/>
    <Messages color='red' msg='Estamos en'/>
    <Messages color='blueviolet'  msg='un curso de React'/>
    <Messages color='blue' msg='con midudev'/>  
    </div>
  )
}
export default App
