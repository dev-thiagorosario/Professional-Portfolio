import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './testmonials.component.html',  // Corrigido o nome do template
  styleUrls: ['./testmonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      image: 'https://storage.googleapis.com/a1aa/image/MKSQNEOFrbpsMR6J4gCQkTk82yEDWsZ54K6UC0I7qb2AeewTA.jpg',
      message: 'Blog nya om @dwinawan_ sangat mudah dipahami dan enak dibacanya, bahkan saya masih sering mampir buat pengingat atau referensi. Kudos om 👏.',
      username: '@dadimdum'
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/LU4WFeJUmEzGK6rcTTYsbd2ngwj9t6kL2lKtUifU6XRJ49wTA.jpg',
      message: 'Blog mas Nawan sangat bite-sized. Mudah untuk dicerna dan dikemas pake bahasa sehari-hari. Sering banget visit ulang blognya buat reminder terhadap suatu topik 📝.',
      username: '@GMiwanusa'
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/Q1S6PTyakOYpNVL0ZfWeHeDedKWQyER4VdyNZJwHzpWfAvHeE.jpg',
      message: 'Blognya mudah dipahami mas 👌 dan cukup enak dibaca buat pemula seperti saya.',
      username: '@istighfaryuk_ _'
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/fD5wjZW9CT0bRatf2iRyCaZjrKH2kYm9ldnafioTqgkLw7hnA.jpg',
      message: 'Informasinya compact tapi useful banget mas.',
      username: '@idhamarsyd'
    }
  ];

  newTestimonial = { image: '', message: '', username: '' };


  scrollRight() {
    const carousel = document.querySelector('.testimonial-wrapper') as HTMLElement;
    if (carousel) {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  scrollLeft() {
    const carousel = document.querySelector('.testimonial-wrapper') as HTMLElement;
    if (carousel) {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  viewAllTestimonials() {
    alert("Display all testimonials in a new view or modal.");
  }

  printTestimonials() {
    const printContents = document.getElementById('testimonials-section')?.innerHTML;
    if (printContents) {
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();  // Recarrega a página para restaurar o conteúdo original
    }
  }
}
