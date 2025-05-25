import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoService } from '../../services/gasto.service';
import { CategoriaService } from '../../services/categoria.service';
import { Gasto } from '../../models/gasto.model';

@Component({
  selector: 'app-gasto-form',
  templateUrl: './gasto-form.component.html',
  styleUrls: ['./gasto-form.component.scss']
})
export class GastoFormComponent implements OnInit {
  gastoForm!: FormGroup;
  categorias: string[] = [];

  public gastoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private gastoService: GastoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gastoForm = this.fb.group({
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      importe: [null, [Validators.required, Validators.min(0.01)]],
      fecha: ['', Validators.required]
    });

    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gastoId = +id;
      this.gastoService.getGastoPorId(this.gastoId).subscribe(gasto => {
        this.gastoForm.patchValue(gasto);
      });
    }
  }

  onSubmit(): void {
    if (this.gastoForm.invalid) return;

    const gasto: Gasto = this.gastoForm.value;

    if (this.gastoId !== null) {
      gasto.id = this.gastoId;
      this.gastoService.updateGasto(gasto).subscribe(() => {
        alert('Gasto actualizado correctamente');
        this.router.navigate(['/gastos']);
      });
    } else {
      this.gastoService.addGasto(gasto).subscribe(() => {
        alert('Gasto creado correctamente');
        this.router.navigate(['/gastos']);
      });
    }
  }
}