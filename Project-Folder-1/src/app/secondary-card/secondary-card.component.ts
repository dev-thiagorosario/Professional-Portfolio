import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-secondary-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './secondary-card.component.html',
  styleUrl: './secondary-card.component.css'
})
export class SecondaryCardComponent {
  posts = [
    {
      image: 'https://storage.googleapis.com/a1aa/image/l4PzdnoZ18IWDpGowf6YINaZVHgzCSujSo4rSyluzyFeyslTA.jpg',
      altText: 'Scenic view of a rocky landscape',
      category: 'Destination',
      title: 'Unveiling the Secrets Beyond the Tourist Trails',
      description: 'Dive into the local culture, discover hidden spots, and experience the authentic charm that often...',
      authorImage: 'https://storage.googleapis.com/a1aa/image/4nRzBys5qL7XAROiBDhUVZfa0GLGT4xdxRelS2gfZxywlZLnA.jpg',
      authorName: 'Seraphina Isabella'
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/abht2IeHTcV9ECeMc8uRuxTOFfgrffMBxC2NDARSX3TzWmtcC.jpg',
      altText: 'Fashionable clothes hanging on a rack',
      category: 'Lifestyle',
      title: 'A Fashionista\'s Guide to Wanderlust',
      description: 'Explore the intersection of fashion and travel as we delve into the wardrobes of globetrotters...',
      authorImage: 'https://storage.googleapis.com/a1aa/image/4nRzBys5qL7XAROiBDhUVZfa0GLGT4xdxRelS2gfZxywlZLnA.jpg',
      authorName: 'Maximilian Bartholomew'
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/amznGRNWvDZtK5sadqO5MdUqDa69lzmCjL0aoNoqAJUuMb5E.jpg',
      altText: 'Smartphone and smartwatch on a wooden table',
      category: 'Tips & Hacks',
      title: 'Top 5 Apps and Gadgets That Will Transform Your Journeys',
      description: 'Explore the latest in travel technology with our guide to must-have apps and gadgets...',
      authorImage: 'https://storage.googleapis.com/a1aa/image/4nRzBys5qL7XAROiBDhUVZfa0GLGT4xdxRelS2gfZxywlZLnA.jpg',
      authorName: 'Anastasia Evangeline'
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/vArZWeI51L0GWaq8hbhPWmAVeSVdXE4HXV4zBK1gBgf3lZLnA.jpg',
      altText: 'Delicious culinary dish on a table',
      category: 'Culinary',
      title: 'Exploring the Culinary Delights of the World',
      description: 'Join us on a gastronomic journey as we explore the diverse and delicious culinary traditions of...',
      authorImage: 'https://storage.googleapis.com/a1aa/image/4nRzBys5qL7XAROiBDhUVZfa0GLGT4xdxRelS2gfZxywlZLnA.jpg',
      authorName: 'Gourmet Traveler'
    }
  ];
}
