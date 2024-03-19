import './App.css'
import { Store } from './app/Store';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={Store}>
      <h1 className='text-3xl'>Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App;
