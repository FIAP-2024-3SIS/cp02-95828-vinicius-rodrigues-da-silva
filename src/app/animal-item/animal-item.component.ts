import { Component, Input, input } from '@angular/core';
import { Animal } from '../models/animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-item.component.html',
  styleUrl: './animal-item.component.css'
})
export class AnimalItemComponent {
  /**
   *
   */
  constructor() {
    this.animal = new Animal("Mingau", "Felino", "18 meses", "macho");
  }

  @Input() animal: Animal;

}


