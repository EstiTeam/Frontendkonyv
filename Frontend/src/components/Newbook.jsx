import React, { useState } from 'react';
import axios from 'axios';

function Newbook() {
    const [cim, setCim] = useState('');
    const [szerzo, setSzerzo] = useState('');
    const [tema, setTema] = useState('');
    const [idegen_cim, setIdegenCim] = useState('');
    const [borito, setBorito] = useState('');
    const [besorolas, setBesorolas] = useState(''); // Új állapot a besorolás tárolására

    const onSubmit = (e) => {
        e.preventDefault();

        const ujKonyv = {
            cim,
            szerzo,
            tema,
            idegen_cim,
            borito: null,
            besorolas,
            elerheto: true, // Alapértelmezett érték

        };

        axios.post(`${import.meta.env.VITE_BASE_URL}/books`, ujKonyv)
            .then((res) => {
                console.log("Könyv sikeresen hozzáadva:", res.data);
                alert("A könyv sikeresen hozzáadva!");
                setCim('');
                setSzerzo('');
                setTema('');
                setBesorolas(''); // Reset besorolás
                setIdegenCim('');
                setBorito('');
            })
            .catch((err) => {
                console.error("Hiba történt a könyv hozzáadása során:", err);
                alert("Hiba történt a könyv hozzáadása során.");
            });
    };

    return (
        <div>
            <h1 className='m-5 text-3xl text-red-800 font-bold text-center'>Új könyv felvitel:</h1>
            <form onSubmit={onSubmit} className='flex flex-col items-center justify-center'>
                <div className='m-5'>
                    <input
                        type="text"
                        placeholder="Adja meg a könyv címét"
                        value={cim}
                        onChange={(e) => setCim(e.target.value)}
                        className="input input-bordered input-secondary w-full max-w-xs"
                    />
                </div>
                <div className='m-5'>
                    <input
                        type="text"
                        placeholder="Adja meg a szerzőt"
                        value={szerzo}
                        onChange={(e) => setSzerzo(e.target.value)}
                        className="input input-bordered input-secondary w-full max-w-xs"
                    />
                </div>
                <div className='m-5'>
                    <input
                        type="text"
                        placeholder="Adja meg a témát"
                        value={tema}
                        onChange={(e) => setTema(e.target.value)}
                        className="input input-bordered input-secondary w-full max-w-xs"
                    />
                </div>
                <div className='m-5'>
                    <input
                        type="text"
                        placeholder="Adja meg az idegen címet"
                        value={idegen_cim}
                        onChange={(e) => setIdegenCim(e.target.value)}
                        className="input input-bordered input-secondary w-full max-w-xs"
                    />
                </div>
                <div className='m-5'>
                    <input
                        type="text"
                        placeholder="Adja meg besorolást"
                        value={besorolas}
                        onChange={(e) => setBesorolas(e.target.value)}
                        className="input input-bordered input-secondary w-full max-w-xs"
                    />
                </div>
                <div className='m-5'>
                    <input
                        type="text"
                        placeholder="Adja meg a borító URL-jét"
                        value={borito}
                        onChange={(e) => setBorito(e.target.value)}
                        className="input input-bordered input-secondary w-full max-w-xs"
                    />
                </div>
                <button type="submit" className="btn bg-red-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-800 transition duration-300">
                    Küldés
                </button>
            </form>
        </div>
    );
}

export default Newbook;