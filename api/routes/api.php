<?php

use App\Http\Controllers\Api\V1\Auth\LoginController;
use App\Models\Usuario;
use Illuminate\Support\Facades\Route;


// Route::resource('produtos', ProdutoController::class);

// Route::resource('pedidos', PedidoController::class);

Route::get('/teste', fn () => response()->json(['status' => 'ok']));

Route::post('/register', [LoginController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [LoginController::class, 'logout']);
    // rotas protegidas aqui
    Route::get('usuarios', function () {
        $usuarios = Usuario::all();
        // Lógica para retornar usuários
        return response()->json(['usuarios' => $usuarios]);
    });
});
