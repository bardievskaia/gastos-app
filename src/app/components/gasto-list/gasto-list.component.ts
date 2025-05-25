import { Component, OnInit } from '@angular/core';
import { GastoService } from '../../services/gasto.service';
import { Gasto } from '../../models/gasto.model';

@Component({
  selector: 'app-gasto-list',
  templateUrl: './gasto-list.component.html',
  styleUrls: ['./gasto-list.component.scss']
})
export class GastoListComponent implements OnInit {
  gastos: Gasto[] = [];
  orden: 'fecha' | 'importe' = 'fecha';

  constructor(private gastoService: GastoService) {}

  ngOnInit(): void {
    this.obtenerGastos();
  }

  obtenerGastos(): void {
    this.gastoService.getGastos().subscribe((data) => {
      this.gastos = this.ordenarGastos(data);
    });
  }

  ordenarGastos(gastos: Gasto[]): Gasto[] {
    return gastos.slice().sort((a, b) => {
      if (this.orden === 'fecha') {
        return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
      } else {
        return b.importe - a.importe;
      }
    });
  }


  cambiarOrden(tipo: 'fecha' | 'importe') {
    this.orden = tipo;
    this.gastos = this.ordenarGastos(this.gastos);
  }

  eliminarGasto(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este gasto?')) {
      this.gastoService.deleteGasto(id).subscribe(() => {
        this.gastos = this.gastos.filter(g => g.id !== id);
      });
    }
    }
    
    aplicarFiltros(filtros: any): void {
      this.gastoService.getGastos().subscribe((data) => {
        let filtrados = data;
    
        if (filtros.descripcion) {
          filtrados = filtrados.filter(g =>
            g.descripcion.toLowerCase().includes(filtros.descripcion.toLowerCase())
          );
        }
    
        if (filtros.categoria) {
          filtrados = filtrados.filter(g => g.categoria === filtros.categoria);
        }
    
        if (filtros.fechaInicio) {
          filtrados = filtrados.filter(g =>
            new Date(g.fecha) >= new Date(filtros.fechaInicio)
          );
        }
    
        if (filtros.fechaFin) {
          filtrados = filtrados.filter(g =>
            new Date(g.fecha) <= new Date(filtros.fechaFin)
          );
        }
    
        this.gastos = this.ordenarGastos(filtrados);
      });
    }
}
