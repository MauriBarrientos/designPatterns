class Inventario {
    private static instancia: Inventario;
    private equipo: { nombre:  string, tipo:string, estado: "disponible" | "reparando" }[] = [];

    private constructor() {}

    public static obtenerInstancia():Inventario { 
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    };

    public agregarEquipo(nombre: string, tipo: string, estado : "disponible" | "reparando"): void {
        this.equipo.push({nombre, tipo, estado});
    };

    public listarEquipo(): {} {
        return this.equipo;
    };

};


const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Laptop", "portatil", "disponible");
inventario.agregarEquipo("PC", "escritorio", "reparando");
console.log(inventario.listarEquipo());
