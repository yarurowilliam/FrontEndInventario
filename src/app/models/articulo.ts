export class Articulo{
    referencia: string; 
    nombre: string;
    cantidad: number; 
    precio: number;
    categoriaId: number; 
    proveedorNit: string;
    estadoCompra?:string;
    precioFinalCompra ?: number;
    comentarios ?: string;
}