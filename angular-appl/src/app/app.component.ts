import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DataService } from "./services/data.service";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { StarRatingComponent } from './star-rating/star-rating.component';

import { ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, StarRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faCoffee = faCoffee;

  dataService = inject(DataService);

  todosLosDatos: any[] = [];

  obtenerTodosLosDatos(){
    this.dataService.obtenerDatos().subscribe((respuesta: any)=>{
      console.log("respuesta: ", respuesta);
      if (respuesta) {        
      this.todosLosDatos = respuesta;
      } else {
        console.log("Error 404, no hay respuesta");
      }
    })
  }

  ngOnInit(){
    this.obtenerTodosLosDatos();
  }
}
