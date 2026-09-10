"use strict";
class Pedido {
    constructor(id, cliente, producto, cantidad, estado) {
        this.id = id;
        this.cliente = cliente;
        this.producto = producto;
        this.cantidad = cantidad;
        this.estado = estado;
    }
    getId() {
        return this.id;
    }
    getCliente() {
        return this.cliente;
    }
    getProducto() {
        return this.producto;
    }
    getCantidad() {
        return this.cantidad;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
}
class GestionPedidos {
    constructor() {
        // La lista principal guarda todos los pedidos de la tienda.
        this.pedidos = [];
    }
    agregarPedido(pedido) {
        if (!pedido.getId().trim()) {
            console.error("No se permite un ID vacío.");
            return;
        }
        if (pedido.getCantidad() <= 0) {
            console.error(`El pedido ${pedido.getId()} tiene una cantidad inválida.`);
            return;
        }
        if (this.buscarPedido(pedido.getId()) !== -1) {
            console.error(`El pedido ${pedido.getId()} ya existe en la lista.`);
            return;
        }
        // push() agrega el pedido al final de la lista.
        this.pedidos.push(pedido);
        console.log(`Pedido ${pedido.getId()} agregado correctamente.`);
    }
    buscarPedido(id) {
        // findIndex() devuelve la posición del pedido que coincide con el id.
        return this.pedidos.findIndex((pedido) => pedido.getId() === id);
    }
    eliminarPedido(id) {
        const indice = this.buscarPedido(id);
        if (indice === -1) {
            console.error(`Pedido ${id} no encontrado.`);
            return;
        }
        // splice() elimina un elemento desde la posición encontrada.
        this.pedidos.splice(indice, 1);
        console.log(`Pedido ${id} eliminado.`);
    }
    actualizarPedido(id, pedidoNuevo) {
        const indice = this.buscarPedido(id);
        if (indice === -1) {
            console.error(`No se pudo actualizar porque el pedido ${id} no existe.`);
            return;
        }
        // Se modifica el elemento de la lista usando su índice.
        this.pedidos[indice] = pedidoNuevo;
        console.log(`Pedido ${id} actualizado correctamente.`);
    }
    obtenerPedido(indice) {
        return this.pedidos[indice];
    }
    obtenerPedidoPorId(id) {
        const indice = this.buscarPedido(id);
        return indice === -1 ? undefined : this.pedidos[indice];
    }
    listarPedidos() {
        if (this.pedidos.length === 0) {
            console.log("No hay pedidos registrados.");
            return;
        }
        console.table(this.pedidos.map((pedido) => ({
            ID: pedido.getId(),
            Cliente: pedido.getCliente(),
            Producto: pedido.getProducto(),
            Cantidad: pedido.getCantidad(),
            Estado: pedido.getEstado()
        })));
    }
    cantidadPedidos() {
        // length indica cuántos elementos tiene la lista.
        return this.pedidos.length;
    }
    ordenarPorId() {
        // sort() organiza los elementos de la lista.
        this.pedidos.sort((a, b) => a.getId().localeCompare(b.getId()));
    }
}
const gestionPedidos = new GestionPedidos();
const pedido1 = new Pedido("P001", "Ana", "Camiseta", 2, "SOLICITADO");
const pedido2 = new Pedido("P002", "Carlos", "Zapatos", 1, "APROBADO");
const pedido3 = new Pedido("P003", "Laura", "Bolso", 3, "PREPARADO");
const pedido4 = new Pedido("P004", "Andrés", "Gorra", 2, "SOLICITADO");
const pedido5 = new Pedido("P005", "María", "Chaqueta", 1, "DESPACHADO");
console.log("=== CREANDO GESTION DE PEDIDOS ===");
console.log("Se inicia la lista de pedidos de la tienda.");
console.log("=== AGREGANDO PEDIDOS ===");
gestionPedidos.agregarPedido(pedido1);
gestionPedidos.agregarPedido(pedido2);
gestionPedidos.agregarPedido(pedido3);
gestionPedidos.agregarPedido(pedido4);
gestionPedidos.agregarPedido(pedido5);
console.log("=== PEDIDOS INICIALES ===");
gestionPedidos.listarPedidos();
console.log("=== CANTIDAD TOTAL DE PEDIDOS ===");
console.log(`Total: ${gestionPedidos.cantidadPedidos()}`);
console.log("=== BUSCANDO PEDIDO P003 ===");
const indicePedido = gestionPedidos.buscarPedido("P003");
console.log(`Resultado de la búsqueda: ${indicePedido}`);
console.log("=== VALIDACIÓN DE BÚSQUEDA INEXISTENTE ===");
console.log(`Resultado de buscar P999: ${gestionPedidos.buscarPedido("P999")}`);
console.log("=== ACTUALIZANDO PEDIDO P002 ===");
const pedidoActualizado = new Pedido("P002", "Carlos", "Zapatos", 2, "PREPARADO");
gestionPedidos.actualizarPedido("P002", pedidoActualizado);
gestionPedidos.listarPedidos();
console.log("=== ELIMINANDO PEDIDO P004 ===");
gestionPedidos.eliminarPedido("P004");
gestionPedidos.listarPedidos();
console.log("=== VALIDACIÓN DE ELIMINACIÓN INEXISTENTE ===");
gestionPedidos.eliminarPedido("P999");
console.log("=== ACCEDIENDO A UN PEDIDO ===");
const pedidoAccedido = gestionPedidos.obtenerPedido(1);
console.log(pedidoAccedido);
console.log("=== VALIDACIÓN DE ID DUPLICADO ===");
gestionPedidos.agregarPedido(new Pedido("P002", "Pedro", "Camisa", 1, "SOLICITADO"));
console.log("=== PEDIDOS ORDENADOS ===");
gestionPedidos.ordenarPorId();
gestionPedidos.listarPedidos();
console.log("=== FIN DEL TALLER ===");
