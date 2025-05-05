import { useState, useEffect } from 'react'
import axios from 'axios';


function Book({ book }) {
    const handleStatusChange = () => {
        axios
            .put(`${import.meta.env.VITE_BASE_URL}/books/${book.id}`, {
                elerheto: !book.elerheto, // Az ellenkező értékre állítjuk
            })
            .then((res) => {
                console.log("Státusz frissítve:", res.data);
                alert(`A könyv státusza sikeresen módosítva: ${res.data.elerheto ? 'Elérhető' : 'Nem elérhető'}`);
                window.location.reload(); // Frissíti az oldalt, hogy a változás látszódjon
            })
            .catch((err) => {
                console.error("Hiba történt a státusz módosítása során:", err);
                alert("Nem sikerült módosítani a státuszt.");
            });
    };


    return (

        <div className="flex bg-base-100 shadow-md rounded-lg overflow-hidden">
            {/* Kép oldal */}
            <div className="w-2/4">
                <img
                    src={book.borito
                        ? `http://127.0.0.1:8000/storage/${book.borito}`
                        : `http://127.0.0.1:8000/storage/images/default.png`}
                    alt={book.cim}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Szöveg oldal */}
            <div className="w-3/5 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2 flex items-center">{book.cim}</h2>
                    <p className="text-gray-600 flex items-center">Szerző: {book.szerzo}</p>
                    <p className="text-gray-600 flex items-center">Téma: {book.tema}</p>
                    <p className="text-gray-600 flex items-center">Besorolás: {book.besorolas}</p>
                    <p className={`text-gray-600 flex items-center ${book.elerheto ? 'text-green-500' : 'text-red-500'}`}>
                        {book.elerheto ? (
                            <>
                                <span className="material-icons mr-2">check_circle</span> Elérhető: Igen
                            </>
                        ) : (
                            <>
                                <span className="material-icons mr-2">cancel</span> Elérhető: Nem
                            </>
                        )}
                    </p>
                </div>
                <div className="mt-6 flex justify-end gap-1">
                    <button
                        onClick={handleStatusChange}
                        className={`${book.elerheto ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                            } text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300`}
                    >
                        {book.elerheto ? 'Kölcsönzés' : 'Visszahozta'}
                    </button>
                    <button class="btn btn-active btn-accent bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-300">Módosítás</button>
                    <button className="btn btn-active btn-error bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-300">Törlés</button>
                </div>
            </div>
        </div>
    )
}

export default Book