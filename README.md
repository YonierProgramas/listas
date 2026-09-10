# Taller de Listas en TypeScript

## Materia

Estructuras de Datos

## Caso de estudio

Gestión de pedidos en una tienda

## Objetivo

Aplicar el concepto y manejo de listas en TypeScript mediante un sistema sencillo de gestión de pedidos.

## Clases principales

- `Pedido`: representa cada pedido con id, cliente, producto, cantidad y estado.
- `GestionPedidos`: administra la lista de pedidos y realiza las operaciones de la lista.

## Lista principal

La clase `GestionPedidos` usa una lista `Pedido[]` para guardar todos los pedidos.

## Operaciones implementadas

- Agregar pedido
- Buscar pedido
- Eliminar pedido
- Modificar pedido
- Acceder a un pedido
- Listar pedidos
- Contar pedidos
- Ordenar pedidos

## Operaciones de listas utilizadas

- `push()`: agregar pedidos
- `findIndex()`: buscar pedidos
- `splice()`: eliminar pedidos
- `[indice]`: modificar o acceder a elementos
- `length`: cantidad de pedidos
- `sort()`: organizar la lista

## Cómo compilar

```bash
npm install
npm run build
```

## Cómo ejecutar

```bash
node dist/app.js
```

## Observación

Este taller se mantiene dentro del alcance académico de listas en TypeScript y no incluye frameworks, backend ni bases de datos.
