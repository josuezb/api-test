import express, {Application, Request, Response, NextFunction} from 'express';

const server: Application = express();

const sumaArray = (numeros: number[]): number => {
    let total = 0;
    numeros.forEach(e => total += e);
    return total;
}

server.get('/', (req: Request, res: Response, next: NextFunction)=>{
    console.log(sumaArray([3, 4, 6]));
    res.send('Aplicación de Prueba');
});

server.listen(3000, () => console.log('Servidor Inicializado'));