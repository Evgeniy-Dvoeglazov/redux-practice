import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  function addCash(cash) {
    dispatch({type: "ADD_CASH", payload: cash})
  }  
  
  function getCash(cash) {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
      </div>
    </div>
  );
}

export default App;
