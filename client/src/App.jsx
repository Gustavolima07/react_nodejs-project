import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useRef } from 'react';

function App() {
  const [array, setArray] = useState([]);

  const fectchApi = async () => {
    const res = await axios.get("http://localhost:8080/api");
    setArray(res.data.fruits);
    console.log(res.data.fruits);
  }

  useEffect(() => {
    fectchApi();
  }, []);

  return (
    <>
      <div className='p-2'>
        <p className=''>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {
          array.map((fruit, index) => (
            <div key={index}>
              <p>{fruit}</p>
            </div>
          ))
        }
        <form>
          <input type="text" className="bg-gray-50 borde border-gray-300  text-blue-600 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
           dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite uma nova fruta" />
          <br />
        <button className="bg-sky-500 hover:bg-sky-700 ...">Adicionar fruta</button>
        </form>
      </div>
    </>
  )
}

export default App
