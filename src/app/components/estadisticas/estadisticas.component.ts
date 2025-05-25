import { Component, OnInit } from '@angular/core';
import { GastoService } from '../../services/gasto.service';
import { Gasto } from '../../models/gasto.model';
import { ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
  gastos: Gasto[] = [];
  totalMes: number = 0;
  promedioDiario: number = 0;
  gastosPorCategoria: { [categoria: string]: number } = {};

  chartLabels: string[] = [];
  chartData: ChartDataset<'pie'>[] = [];
  chartType: ChartType = 'pie';

  constructor(private gastoService: GastoService) {}

  ngOnInit(): void {
    this.gastoService.getGastos().subscribe((data) => {
      this.gastos = data;
      this.calcularEstadisticas();
      this.generarGrafico();
    });
  }

  calcularEstadisticas(): void {
    const hoy = new Date();
    const gastosMes = this.gastos.filter(g =>
      new Date(g.fecha).getMonth() === hoy.getMonth() &&
      new Date(g.fecha).getFullYear() === hoy.getFullYear()
    );

    this.totalMes = gastosMes.reduce((sum, g) => sum + g.importe, 0);

    const diasDelMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    this.promedioDiario = this.totalMes / diasDelMes;

    this.gastosPorCategoria = {};
    gastosMes.forEach(g => {
      this.gastosPorCategoria[g.categoria] = (this.gastosPorCategoria[g.categoria] || 0) + g.importe;
    });
  }

  generarGrafico(): void {
    this.chartLabels = Object.keys(this.gastosPorCategoria);
    const data = Object.values(this.gastosPorCategoria);

    this.chartData = [
      { data, label: 'Gastos por categoría' }
    ];
  }
}