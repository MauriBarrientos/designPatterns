// Clase antigua InventarioViejo con su propio método para agregar un item
class InventarioViejo {
    private items: { nombre: string; tipo: string; estado: string }[] = [];

    public agregarItem(item: { nombre: string; tipo: string; estado: string }): void {
        this.items.push(item);
    }

    public obtenerItems(): { nombre: string; tipo: string; estado: string }[] {
        return this.items;
    }
}

// Nueva interfaz de Inventario con un método agregarEquipo
interface Inventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): { nombre: string; tipo: string; estado: string }[];
}

// Adaptador que permite usar InventarioViejo como si fuera el nuevo sistema
class AdaptadorInventario implements Inventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    // Se adapta el método agregarEquipo a la interfaz antigua de InventarioViejo
    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        const item = { nombre, tipo, estado };
        this.inventarioViejo.agregarItem(item);
    }

    // Se adapta el método listarEquipos para obtener los items del inventario viejo
    public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
        return this.inventarioViejo.obtenerItems();
    }
}

// Ejemplo de uso
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

// Agregamos un equipo utilizando el nuevo sistema
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");

// Listamos los equipos, adaptando la respuesta del inventario viejo
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]
