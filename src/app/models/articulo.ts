export class Articulo{
    referencia: string; 
    nombre: string;
    cantidad: number; 
    precio: number;
    categoriaId: number; 
    categoria?:string;
    proveedorNit: string;
    proveedor?:string;
    estadoCompra?:string;
    precioFinalCompra ?: number;
    comentarios ?: string;
}