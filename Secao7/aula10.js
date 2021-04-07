/*
Método Estático - Permite acesso sem a necessidade de instanciar um objeto
*/

class Carro{
    constructor(modelo){
        this._marca = Carro.retornar_marca;
        this._modelo = modelo;
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }         
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }  
    static retornar_marca(){
        return 'Honda';
    }  
}

const fit = new Carro('Fit');

console.log(Carro.retornar_marca());
