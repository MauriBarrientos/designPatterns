interface equipo {
    nombre: string;
    ram: string;
    procesador: string;
    detalles(): string;
};

class tipoEquipo implements equipo {
    nombre: string;
    ram: string;
    procesador: string;
    tipo: string;


    constructor(tipo: string, nombre:string, ram:string, procesador:string){
        this.tipo = tipo;
        this.nombre= nombre;
        this.ram= ram;
        this.procesador= procesador;
    };

    detalles(): string{
        return `Equipo: ${this.tipo} ${this.nombre} con ${this.ram} de ram y procesador ${this.procesador}`;
    };
};

class Notebook extends tipoEquipo {
    constructor(nombre: string, ram: string, procesador: string) {
        super("Notebook", nombre, ram, procesador);
    };
};

class Desktop extends tipoEquipo {
    constructor(nombre: string, ram: string, procesador: string) {
        super("Desktop", nombre, ram, procesador);
    };
};

class Servidor extends tipoEquipo {
    constructor(nombre: string, ram: string, procesador: string) {
        super("Servidor", nombre, ram, procesador);
    };
};

class equipoFactory {
    static crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): equipo | undefined {
        switch(tipo){
            case "Notebook":
                return new Notebook(nombre, ram, procesador);
            case "Desktop":
                return new Desktop(nombre, ram, procesador);
            case "Servidor":
                return new Servidor(nombre, ram, procesador);
            default:
                return undefined;
        };
    };
};

//Llamada a la factory

const factory = new equipoFactory();
const notebook = equipoFactory.crearEquipo("Notebook", "HP", "8GB", "i5");
console.log(notebook.detalles());