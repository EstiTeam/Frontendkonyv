<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('books')->insert([
            [
                'cim' => 'Egri csillagok',
                'szerzo' => 'Gárdonyi Géza',
                'tema' => 'Történelmi regény',
                'idegen_cim' => 'Stars of Eger',
                'besorolas' => 'Klasszikus',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Pál utcai fiúk',
                'szerzo' => 'Molnár Ferenc',
                'tema' => 'Ifjúsági regény',
                'idegen_cim' => 'The Boys of Paul Street',
                'besorolas' => 'Klasszikus',
                'borito' => null,
                'elerheto' => false,
            ],
            [
                'cim' => 'Száz év magány',
                'szerzo' => 'Gabriel García Márquez',
                'tema' => 'Regény',
                'idegen_cim' => 'One Hundred Years of Solitude',
                'besorolas' => 'Világirodalmi klasszikus',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Harry Potter és a Bölcsek Köve',
                'szerzo' => 'J.K. Rowling',
                'tema' => 'Fantázia',
                'idegen_cim' => 'Harry Potter and the Philosopher\'s Stone',
                'besorolas' => 'Ifjúsági',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'A kis herceg',
                'szerzo' => 'Antoine de Saint-Exupéry',
                'tema' => 'Meseregény',
                'idegen_cim' => 'The Little Prince',
                'besorolas' => 'Klasszikus',
                'borito' => null,
                'elerheto' => false,
            ],
            [
                'cim' => 'Büszkeség és balítélet',
                'szerzo' => 'Jane Austen',
                'tema' => 'Romantikus regény',
                'idegen_cim' => 'Pride and Prejudice',
                'besorolas' => 'Klasszikus irodalom',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'A Gyűrűk Ura',
                'szerzo' => 'J.R.R. Tolkien',
                'tema' => 'Fantázia',
                'idegen_cim' => 'The Lord of the Rings',
                'besorolas' => 'Világirodalom',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Az ember tragédiája',
                'szerzo' => 'Madách Imre',
                'tema' => 'Filozófiai mű',
                'idegen_cim' => null,
                'besorolas' => 'Magyar klasszikus',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => '1984',
                'szerzo' => 'George Orwell',
                'tema' => 'Dystópia',
                'idegen_cim' => 'Nineteen Eighty-Four',
                'besorolas' => 'Politikai regény',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Az alkimista',
                'szerzo' => 'Paulo Coelho',
                'tema' => 'Önismeret',
                'idegen_cim' => 'The Alchemist',
                'besorolas' => 'Kortárs irodalom',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Tüskevár',
                'szerzo' => 'Fekete István',
                'tema' => 'Ifjúsági regény',
                'idegen_cim' => null,
                'besorolas' => 'Magyar irodalom',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Hamlet',
                'szerzo' => 'William Shakespeare',
                'tema' => 'Tragédia',
                'idegen_cim' => 'Hamlet',
                'besorolas' => 'Világirodalom',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Állatfarm',
                'szerzo' => 'George Orwell',
                'tema' => 'Szatíra',
                'idegen_cim' => 'Animal Farm',
                'besorolas' => 'Politikai allegória',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Don Quijote',
                'szerzo' => 'Miguel de Cervantes',
                'tema' => 'Kalandregény',
                'idegen_cim' => 'Don Quixote',
                'besorolas' => 'Világirodalom',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Robinson Crusoe',
                'szerzo' => 'Daniel Defoe',
                'tema' => 'Kalandregény',
                'idegen_cim' => 'Robinson Crusoe',
                'besorolas' => 'Klasszikus regény',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Moby Dick',
                'szerzo' => 'Herman Melville',
                'tema' => 'Kaland és filozófia',
                'idegen_cim' => 'Moby-Dick',
                'besorolas' => 'Világirodalom',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Frankenstein',
                'szerzo' => 'Mary Shelley',
                'tema' => 'Horror és sci-fi',
                'idegen_cim' => 'Frankenstein; or, The Modern Prometheus',
                'besorolas' => 'Klasszikus',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'A szépség és a szörnyeteg',
                'szerzo' => 'Gabrielle-Suzanne Barbot de Villeneuve',
                'tema' => 'Mese',
                'idegen_cim' => 'Beauty and the Beast',
                'besorolas' => 'Klasszikus mese',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Az éhezők viadala',
                'szerzo' => 'Suzanne Collins',
                'tema' => 'Dystópia',
                'idegen_cim' => 'The Hunger Games',
                'besorolas' => 'Kortárs ifjúsági',
                'borito' => null,
                'elerheto' => true,
            ],
            [
                'cim' => 'Percy Jackson: A villámtolvaj',
                'szerzo' => 'Rick Riordan',
                'tema' => 'Fantázia',
                'idegen_cim' => 'Percy Jackson and the Lightning Thief',
                'besorolas' => 'Ifjúsági fantasy',
                'borito' => null,
                'elerheto' => true,
            ],
        ]);
    }
}
