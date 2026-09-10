class Pedido {
  private id: string;
  private cliente: string;
  private producto: string;
  private cantidad: number;
  private estado: string;

  constructor(id: string, cliente: string, producto: string, cantidad: number, estado: string) {
    this.id = id;
    this.cliente = cliente;
    this.producto = producto;
    this.cantidad = cantidad;
    this.estado = estado;
  }

  public getId(): string {
    return this.id;
  }

  public getCliente(): string {
    return this.cliente;
  }

  public getProducto(): string {
    return this.producto;
  }

  public getCantidad(): number {
    return this.cantidad;
  }

  public getEstado(): string {
    return this.estado;
  }

  public setEstado(estado: string): void {
    this.estado = estado;
  }
}

class GestionPedidos {
  // La lista principal guarda todos los pedidos de la tienda.
  private pedidos: Pedido[] = [];

  public agregarPedido(pedido: Pedido): void {
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

  public buscarPedido(id: string): number {
    // findIndex() devuelve la posición del pedido que coincide con el id.
    return this.pedidos.findIndex((pedido) => pedido.getId() === id);
  }

  public eliminarPedido(id: string): void {
    const indice = this.buscarPedido(id);

    if (indice === -1) {
      console.error(`Pedido ${id} no encontrado.`);
      return;
    }

    // splice() elimina un elemento desde la posición encontrada.
    this.pedidos.splice(indice, 1);
    console.log(`Pedido ${id} eliminado.`);
  }

  public actualizarPedido(id: string, pedidoNuevo: Pedido): void {
    const indice = this.buscarPedido(id);

    if (indice === -1) {
      console.error(`No se pudo actualizar porque el pedido ${id} no existe.`);
      return;
    }

    // Se modifica el elemento de la lista usando su índice.
    this.pedidos[indice] = pedidoNuevo;
    console.log(`Pedido ${id} actualizado correctamente.`);
  }

  public obtenerPedido(indice: number): Pedido | undefined {
    return this.pedidos[indice];
  }

  public obtenerPedidoPorId(id: string): Pedido | undefined {
    const indice = this.buscarPedido(id);
    return indice === -1 ? undefined : this.pedidos[indice];
  }

  public listarPedidos(): void {
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

  public cantidadPedidos(): number {
    // length indica cuántos elementos tiene la lista.
    return this.pedidos.length;
  }

  public ordenarPorId(): void {
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
