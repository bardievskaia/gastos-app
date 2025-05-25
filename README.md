# 📊 GastosApp — Aplicación de Gestión de Gastos Personales

Esta aplicación permite registrar, visualizar, filtrar y analizar tus gastos personales. Desarrollada con **Angular 16+**, usa **JSON Server** como backend simulado y soporta **renderizado del lado del servidor (SSR)** con **Angular Universal**.

---

## 🚀 Funcionalidades

- Crear y editar gastos
- Filtros por descripción, categoría y fecha
- Gráfico de pastel con resumen mensual
- Ordenar por fecha o importe
- Renderizado SSR con Express y Angular Universal

---

## 📁 Estructura de carpetas

src/
├── app/
│   ├── components/        # Componentes Angular
│   ├── services/          # Servicios para HTTP
│   ├── models/            # Interfaces y tipos
│   ├── app.module.ts      # Módulo raíz (AppModule)
│   ├── app.routes.ts      # Rutas
│   ├── app.config.ts      # Configuración standalone
│   ├── app.server.module.ts # SSR AppModule
├── assets/
├── environments/
├── main.ts                # Bootstrap de Angular
├── main.server.ts         # Bootstrap del servidor
├── server.ts              # Servidor Express (SSR)

# Iniciar modo desarrollo #

npm run json-server      # Inicia el backend simulado en http://localhost:3000
npm start                # Inicia la app Angular en http://localhost:4200

# Iniciar con SSR (Angular Universal) #
npm run build:ssr
npm run serve:ssr        # App en SSR disponible en http://localhost:4000

# Ejecutar tests #
 Ejecutar tests

 # JSON Server (db.json) #
 {
  "gastos": [
    {
      "id": 1,
      "descripcion": "Supermercado",
      "categoria": "Alimentación",
      "importe": 100,
      "fecha": "2025-05-01"
    }
  ],
  "categorias": [
    "Alimentación", "Transporte", "Ocio", "Salud", "Otros"
  ]
}

