<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    //Lekérdezi az összes könyvet
    public function GetBooks()
    {
        $books = Book::OsszesKonyv();
        return response()->json($books);
    }
    //-------------------------------------------------------
    //Keresés cím alapján
    public function GetBooksByTitle(Request $request)
    {
        $cim = $request->query('cim');
        $books = Book::KeresesCimAlapján($cim);
        if ($books->isEmpty()) {
            return response()->json(['message' => 'Nincs találat'], 404);
        }

        return response()->json($books);
    }
    //-------------------------------------------------------
    //Könyv létrehozása
    public function CreateBook(Request $request)
    {
    // Validáció
    $validatedData = $request->validate([
        'cim' => 'required|string|max:255',
        'szerzo' => 'required|string|max:255',
        'tema' => 'nullable|string|max:255',
        'idegen_cim' => 'nullable|string|max:255',
        'besorolas' => 'nullable|string|max:255',
        'borito' => 'nullable|string|max:255',
        'elerheto' => 'required|boolean',
    ], 
    [
        'cim.required' => 'A cím megadása kötelező.',
        'cim.string' => 'A címnek szövegnek kell lennie.',
        'szerzo.required' => 'A szerző megadása kötelező.',
        'szerzo.string' => 'A szerzőnek szövegnek kell lennie.',
        'elerheto.required' => 'Az elérhetőség megadása kötelező.',
        'elerheto.boolean' => 'Az elérhetőség csak igaz vagy hamis lehet.',
    ]);

      // Kép mentése, ha van
      if ($request->hasFile('borito')) {
        $file = $request->file('borito');
        $path = $file->store('images', 'public'); // A kép mentése a "public/images" mappába
        $validatedData['borito'] = $path; // Az útvonal mentése az adatbázisba
    }

    // Könyv létrehozása
    $book = Book::create($validatedData);

    return response()->json($book, 201);
    }
    //-------------------------------------------------------
    //Könyv frissítése
    public function UpdateBook(Request $request, $id)
    {
    $book = Book::find($id);

    if (!$book) {
        return response()->json(['message' => 'A könyv nem található.'], 404);
    }

    // Validáció
    $validatedData = $request->validate([
        'cim' => 'nullable|string|max:255',
        'szerzo' => 'nullable|string|max:255',
        'tema' => 'nullable|string|max:255',
        'idegen_cim' => 'nullable|string|max:255',
        'besorolas' => 'nullable|string|max:255',
        'borito' => 'nullable|string|max:255',
        'elerheto' => 'nullable|boolean',
    ]);

    // Kép mentése, ha van
    if ($request->hasFile('borito')) {
        $file = $request->file('borito');
        $path = $file->store('images', 'public'); // A kép mentése a "public/images" mappába
        $validatedData['borito'] = $path; // Az útvonal mentése az adatbázisba
    }

    // Könyv frissítése
    $book->update($validatedData);

    // Válasz visszaadása
    return response()->json($book, 200);
    }

    //-------------------------------------------------------
    //Könyv törlése
    public function DeleteBook($id)
    {
    
    $book = Book::find($id);

    // Ellenőrzés, hogy létezik-e a könyv
    if (!$book) {
        return response()->json(['message' => 'A könyv nem található.'], 404);
    }

    // Könyv törlése
    $book->delete();

    // Válasz visszaadása
    return response()->json(['message' => 'A könyv sikeresen törölve lett.'], 200);
    }










    
}
