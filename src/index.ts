import express from 'express';
import  User  from './controllers/user';
const app = express();

app.get('/', (req, res) => {
    let usuario: User = new User('Otro', 20);
    let edad: number = usuario.getAge();

    res.send(`Hola usuario con edad: ${edad}`);
})

app.listen(3000, () => console.log('Server started on port 3000'));