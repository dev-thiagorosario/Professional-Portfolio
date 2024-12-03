import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-single-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent {
  cards = [
    {
      image: 'https://storage.googleapis.com/a1aa/image/khTWFL8zKFaTDx4HgH0I6zRLHh2jf32OWwrkzoQTxsbHPg3JA.jpg',
      alt: 'Two people discussing a project',
      date: 'Januari 24, 2022',
      title: 'Membuat kontrak project design dengan klien',
      description: 'Kontrak project adalah perjanjian tertulis untuk menjamin pekerja dan pemberi kerja berada di posisi aman dan tidak saling mencurangi.'
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/la3UywHPLTpVEtv8EEVIGqsM1pbfGgWNJ0EtiWDEHnqGPg3JA.jpg',
      alt: 'Person writing on a notebook with text "Copywriting Microcopy UX"',
      date: 'Desember 23, 2021',
      title: 'Berlatih UX Writing dengan Prinsip Dasar Microcopy',
      description: 'Clear, Concise, Consistent dan Functional, prinsip dasar microcopy sebagai panduan menulis UX Writing.'
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/JOwaobqkivLuIFd0nl6n3tcXUR8QCv20xKjJh6QvGRPjHw7E.jpg',
      alt: 'Person looking at a wall full of inspirational images',
      date: 'Februari 24, 2021',
      title: 'Cara memakai inspirasi dari referensi',
      description: 'Cari tahu apa yang membuatmu bagus, ambil lalu terapkan pada design mu.'
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/0V7JbUzJCSbjCxNtj3ftCf3l2nOfefXrrKvOaNIbesV4iHw7E.jpg',
      alt: 'A complex UX design sketch on a whiteboard',
      date: 'Desember 2, 2021',
      title: 'Kadang sebuah UX perlu dibikin susah',
      description: 'UX enggak melulu tentang membuat UX yang serba mudah dan cepat. Ada beberapa bagian dari sebuah produk yang musti dibikin susah.'
    }
  ];
}
