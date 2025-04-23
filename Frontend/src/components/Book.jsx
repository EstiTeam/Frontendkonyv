

function Book({book}) 
{
    return (
        <div className="card bg-white shadow-lg rounded-lg border border-gray-200 w-96 m-4">
            <div className="card-body p-6">
                <p className="card-title text-xl font-bold text-center text-gray-800 mb-2">{book.cim}</p>
                <p className="text-gray-600 mb-1"><span className="font-semibold">Szerző:</span> {book.szerzo}</p>
                <p className="text-gray-600 mb-1"><span className="font-semibold">Tartalom:</span> {book.tema}</p>
                <p className={`text-sm font-semibold mb-4 ${book.elerheto === 'Elérhető' ? 'text-green-500' : 'text-red-500'}`}>
                    {book.konyv_status}
                </p>
                <div className="card-actions flex justify-end">
                    <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Kölcsönzés
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Book