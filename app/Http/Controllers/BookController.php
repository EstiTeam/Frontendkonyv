<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function GetBooks()
    {
        $books = Book::OsszesKonyv();
        return response()->json($books);
    }

    public function GetBooksByTitle(Request $request)
    {
        $cim = $request->query('cim');
        $books = Book::KeresesCimAlapján($cim);
        if ($books->isEmpty()) {
            return response()->json(['message' => 'Nincs találat'], 404);
        }

        return response()->json($books);
    }
    
}
