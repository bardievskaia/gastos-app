export interface Gasto {
    id?: number; // opcional, lo asigna json-server
    descripcion: string;
    categoria: string;
    importe: number;
    fecha: string; // formato ISO, ej. "2025-05-25"
  }