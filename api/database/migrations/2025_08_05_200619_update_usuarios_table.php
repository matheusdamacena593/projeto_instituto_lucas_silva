<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('usuarios')->insert([
            'name' => 'Administrador',
            'username' => 'admin',
            'password' => bcrypt('senha123'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    public function down(): void
    {
        DB::table('usuarios')->where('username', 'admin')->delete();
    }
};
