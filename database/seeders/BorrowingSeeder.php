<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BorrowingSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('borrowings')->insert([
            [
                'konyv_id' => 1, // Egri csillagok
                'kolcsonzo_id' => 1001,
                'kolcsonzes_kezdete' => '2025-04-01',
                'kolcsonzes_vege' => '2025-04-10', // Elérhető, lezárva
            ],
            [
                'konyv_id' => 2, // Pál utcai fiúk
                'kolcsonzo_id' => 1002,
                'kolcsonzes_kezdete' => '2025-03-20',
                'kolcsonzes_vege' => null, 
            ],
            [
                'konyv_id' => 3, // Száz év magány
                'kolcsonzo_id' => 1003,
                'kolcsonzes_kezdete' => '2025-02-01',
                'kolcsonzes_vege' => '2025-02-03', // Elérhető, lezárva
            ],
            [
                'konyv_id' => 4, // Harry Potter és a Bölcsek Köve
                'kolcsonzo_id' => 1004,
                'kolcsonzes_kezdete' => '2025-01-15',
                'kolcsonzes_vege' => '2025-01-30', // Elérhető, lezárva
            ],
            [
                'konyv_id' => 5, // A kis herceg
                'kolcsonzo_id' => 1005,
                'kolcsonzes_kezdete' => '2025-04-05',
                'kolcsonzes_vege' => null, 
            ],
            [
                'konyv_id' => 6, // Büszkeség és balítélet
                'kolcsonzo_id' => 1006,
                'kolcsonzes_kezdete' => '2025-03-10',
                'kolcsonzes_vege' => '2025-03-20', // Elérhető, lezárva
            ],
            [
                'konyv_id' => 7, // A Gyűrűk Ura
                'kolcsonzo_id' => 1007,
                'kolcsonzes_kezdete' => '2025-02-20',
                'kolcsonzes_vege' => '2025-03-10', // Elérhető, lezárva
            ],
            [
                'konyv_id' => 8, // Az ember tragédiája
                'kolcsonzo_id' => 1008,
                'kolcsonzes_kezdete' => '2025-01-01',
                'kolcsonzes_vege' => '2025-01-15', // Elérhető, lezárva
            ],
            [
                'konyv_id' => 9, // 1984
                'kolcsonzo_id' => 1009,
                'kolcsonzes_kezdete' => '2025-03-01',
                'kolcsonzes_vege' => '2025-03-12', // Elérhető, lezárva
            ],
            [
                'konyv_id' => 10, // Az alkimista
                'kolcsonzo_id' => 1010,
                'kolcsonzes_kezdete' => '2025-04-01',
                'kolcsonzes_vege' => '2025-04-15', // Elérhető, lezárva
            ],
        ]);
    }
}
