import { Animal } from './../models/animal';
import { Component } from '@angular/core';
import { AnimalItemComponent } from "../animal-item/animal-item.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-animal-page',
    standalone: true,
    templateUrl: './animal-page.component.html',
    styleUrl: './animal-page.component.css',
    imports: [AnimalItemComponent, CommonModule]
})
export class AnimalPageComponent {
/**
 *
 */
constructor() {
  this.animals = [
    new Animal("Mingau", "Felino", "18 meses", "macho"),
    new Animal("Thor", "cao", "9 meses", "macho"),
    new Animal("Snow", "felino", "11 meses", "macho"),
    new Animal("Caramelo", "cao", "2 meses", "macho"),
    new Animal("Mel", "cao", "9 meses", "femea")
  ]

}

  animals: Animal[];
}
