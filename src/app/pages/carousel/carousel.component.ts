import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from '../../services/categorias.service';
import { MarcasService } from '../../services/marcas.service';
import { Lista_categorias } from '../../models/categorias.model';
import { Lista_marcas } from '../../models/marcas.model';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {

  constructor(private categoriasService: CategoriasService, 
    private marcasService: MarcasService) { }

    categorias: Lista_categorias[] = [];
    marcas: Lista_marcas[] = [];

    ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe( data => {
      this.categorias = data.Categorias;
    });    

    this.marcasService.getMarcas().subscribe(data => {
      this.marcas = data.Marcas;
    },);
  }
}
