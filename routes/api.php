<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/books', [BookController::class, 'GetBooks']);

Route::get('/books/search', [BookController::class, 'GetBooksByTitle']);

Route::post('/books', [BookController::class, 'CreateBook']);