import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  filtroForm!: FormGroup;
  @Output() filtrosAplicados = new EventEmitter<any>();

  categorias = ['Alimentación', 'Transporte', 'Ocio', 'Salud', 'Otros'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filtroForm = this.fb.group({
      descripcion: [''],
      categoria: [''],
      fechaInicio: [''],
      fechaFin: ['']
    });
  }

  aplicarFiltros(): void {
    this.filtrosAplicados.emit(this.filtroForm.value);
  }

  limpiarFiltros(): void {
    this.filtroForm.reset();
    this.filtrosAplicados.emit({});
  }
}