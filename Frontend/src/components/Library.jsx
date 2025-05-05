
import { useState, useEffect } from 'react'
import axios from 'axios';
import Book from './Book';

function Library() {
  const [books, setBook] = useState([]);
  const [kivalasztottKonyv, setKivalasztottKonyv] = useState('');
  const [refresh, setRefresh] = useState(false);

  const frissites = () => {
    setRefresh(prev => !prev);
  }

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/books`)
      .then(res => setBook(res.data))
      .catch(err => alert(err.message));
  }, [refresh]);


  const keres = () => {
    if (kivalasztottKonyv !== '') { 
        axios.get(`${import.meta.env.VITE_BASE_URL}/books/search?cim=${kivalasztottKonyv}`)
        .then(res => setBook(res.data))
        .catch(err => alert(err.message));
    }else {[refresh]}
  };


    return (
      <div className="bg-sky-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center text-sky-700 mb-6">Könyvtár</h1>

        <div className="flex py-5 items-center justify-center">
          <div className="flex flex-col space-y-4 items-center ">
            <input
              type="text"
              placeholder="Keresés"
              value={kivalasztottKonyv}
              onChange={(e) => setKivalasztottKonyv(e.target.value)}
              className=" bg-white text-black border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={keres} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Keresés
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow-lg transition duration-300"
            onClick={frissites}>
            Frissítés
          </button>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-items-center">
          {books.map((konyv) => (
            <Book key={konyv.id} book={konyv} />
          ))}
        </div>
      </div>
    )
  
}

  export default Library