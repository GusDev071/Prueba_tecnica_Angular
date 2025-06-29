import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from '../../services/categorias.service';
import { MarcasService } from '../../services/marcas.service';
import { Lista_categorias } from '../../models/categorias.model';
import { Lista_marcas } from '../../models/marcas.model';



@Component({
  selector: 'app-coupons',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.css'
})
export class CouponsComponent implements OnInit {

  categorias: Lista_categorias[] = [];
  marcas: Lista_marcas[] = [];
  selectedIndex = 0;
  viewMode = 'grid'; //en grid o list
  sortBy = '';
  showAll = false; //para mostrar todas las marcas o solo 16

  constructor(private categoriasService: CategoriasService, 
    private marcasService: MarcasService) { }

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe( data => {
      this.categorias = data.Categorias;
    });    

    this.marcasService.getMarcas().subscribe(data => {
      this.marcas = data.Marcas;
    });
  }

  get marcasFiltradas() {
  let filtradas = this.marcas.filter(
    m => m.categoria_marca === this.categorias[this.selectedIndex]?.nombre_categoria
  );

  if (this.sortBy === 'name') {
    filtradas = filtradas.slice().sort((a, b) => a.nombre_marca.localeCompare(b.nombre_marca));
  }

  return filtradas;
}

  get marcasMostradas() {
    return this.showAll ? this.marcasFiltradas : this.marcasFiltradas.slice(0, 16);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }


}
