// Definimos la interfaz Observador que tendrá el método actualizar para recibir las notificaciones
interface Observador {
    actualizar(equipo: Equipo): void;
}

// La clase Soporte implementa la interfaz Observador
class Soporte implements Observador {
    actualizar(equipo: Equipo): void {
        console.log(`Soporte notificado: ${equipo.getNombre()} ha cambiado su estado a ${equipo.getEstado()}`);
    }
}

// La clase Equipo que puede tener múltiples observadores
class Equipo {
    private observadores: Observador[] = [];
    private estado: string;

    constructor(private nombre: string, private tipo: string, estadoInicial: string) {
        this.estado = estadoInicial;
    }

    // Método para agregar un observador
    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    // Método para cambiar el estado del equipo
    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    // Método que notifica a todos los observadores del cambio de estado
    private notificarObservadores(): void {
        this.observadores.forEach(observador => observador.actualizar(this));
    }

    // Métodos para obtener el nombre y el estado del equipo
    getNombre(): string {
        return this.nombre;
    }

    getEstado(): string {
        return this.estado;
    }
}

// Ejemplo de uso
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

// Agregamos al observador soporte
equipo.agregarObservador(soporte);

// Cambiamos el estado del equipo, lo que notificará a los observadores
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.
