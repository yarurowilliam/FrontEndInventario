export class Proveedor{
    nit: string;
    razonSocial: string;
    direccion: string;
    nombreEnc: string;
    telefono: string;
    email: string;

    constructor(razonSocial: string, direccion: string,nombreEnc: string , telefono: string,nit: string, email: string){
        this.nit = nit;
        this.razonSocial = razonSocial;
        this.direccion = direccion;
        this.nombreEnc = nombreEnc;
        this.telefono = telefono;
        this.email = email;
    }
}