import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../models/gasto.model';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private apiUrl = 'http://localhost:3000/gastos';

  constructor(private http: HttpClient) {}

  // Obtener todos los gastos
  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.apiUrl);
  }

  // Agregar un nuevo gasto
  addGasto(gasto: Gasto): Observable<Gasto> {
    return this.http.post<Gasto>(this.apiUrl, gasto);
  }

  // Eliminar un gasto por ID
  deleteGasto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener un gasto por su ID
  getGastoPorId(id: number): Observable<Gasto> {
    return this.http.get<Gasto>(`${this.apiUrl}/${id}`);
  }

  // Actualizar un gasto existente
  updateGasto(gasto: Gasto): Observable<Gasto> {
    return this.http.put<Gasto>(`${this.apiUrl}/${gasto.id}`, gasto);
  }
}