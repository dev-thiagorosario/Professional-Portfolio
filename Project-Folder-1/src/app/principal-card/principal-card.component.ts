import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-principal-card',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './principal-card.component.html',
  styleUrls: ['./principal-card.component.css']
})
export class PrincipalCardComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  slideInterval: any;

  // Array de slides
  slides = [
    {
      imageUrl: 'https://storage.googleapis.com/a1aa/image/YVJ6WInVvvKtKFfEPCgHMqIfUkgmRNJr471taNBASpaQPwmTA.jpg',
      altText: 'Desert Sunset',
      tag: 'Desert Sunset',
      title: 'Journey to the Desert',
      description: 'Experience the serene beauty of a desert sunset, a perfect escape into nature.'
    },
    {
      imageUrl: 'https://storage.googleapis.com/a1aa/image/b2xwpCRU88pqDZOoQwfbSEnt3L9SnxYavwe1VIbacsOZVwmTA.jpg',
      altText: 'Forest Adventure',
      tag: 'Forest Adventure',
      title: 'Exploring the Depths of the Forest',
      description: 'A peaceful hike through the heart of a dense forest, surrounded by nature.'
    },
    {
      imageUrl: 'https://storage.googleapis.com/a1aa/image/SmpTS6ia0DqCLxQYZZ1FBmSUuO8BRuy6GYu36AmPyC9WFs5E.jpg',
      altText: 'Mountain Heights',
      tag: 'Mountain Heights',
      title: 'Conquering the Mountain Peaks',
      description: 'An unforgettable journey to the top of the world, where the view is endless.'
    }
  ];

  // Informações do autor
  author = {
    image: 'https://storage.googleapis.com/a1aa/image/j0rTrqVmchIDDRNOjBHqnCeWJ2TalJcc2DdlntZgTZyoHYzJA.jpg',
    name: 'Theodore Reginald',
    date: '24 Jan 2024',
    readTime: '10 mins read'
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Verifica se o código está sendo executado no navegador
    if (isPlatformBrowser(this.platformId)) {
      this.startSlideShow();
    }
  }

  ngOnDestroy(): void {
    this.stopSlideShow();
  }

  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length; // Troca entre os slides dinamicamente
    }, 3000);
  }

  stopSlideShow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  getTransform(): string {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  // Função para exibir o slide específico quando o usuário clica nos "dots"
  showSlide(index: number): void {
    this.currentSlide = index;
  }
}
