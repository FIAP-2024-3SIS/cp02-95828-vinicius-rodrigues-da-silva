import { Component, Input, input } from '@angular/core';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-animal-item',
  standalone: true,
  imports: [],
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


