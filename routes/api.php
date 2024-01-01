<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\StudentController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [RegisteredUserController::class, 'registerApi']);
Route::post('login', [RegisteredUserController::class, 'login']);

//Route::apiResource('students', StudentController::class)->middleware('auth:sanctum');

Route::get('students', [StudentController::class, 'index'])->middleware('auth:sanctum');
Route::get('students/{student}', [StudentController::class, 'show'])->middleware('auth:sanctum');
Route::post('students', [StudentController::class, 'store'])->middleware('auth:sanctum');
Route::post('students/{student}', [StudentController::class, 'update'])->middleware('auth:sanctum');
Route::delete('students/{student}', [StudentController::class, 'destroy'])->middleware('auth:sanctum');