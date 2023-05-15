import jwt from 'jsonwebtoken';

let users = []

const SECRET = process.env.JWT_SECRET;

function criarToken(user) {
    return jwt.sign({ email: user.email, nome: user.nome }, SECRET);
}

function lerToken(token) {
    try {
        return jwt.verify(token, SECRET)
    } catch (error) {
        throw new Error('Token inválido');
    }
}

export function cadastro(body) {
    const user = users.find(({ email }) => email  === body.email);
    
    if (user) throw new Error('Usuario já cadastrado');

    users.push(body);
    
    const token = criarToken(body);

    return token;
}

export function login(body) {
    const user = users.find(({ email }) => email  === body.email);
    
    if (!user) throw new Error('Usuario não encontrado');
    
    if (user.senha !== body.senha) throw new Error('Senha incorreta');

    const token = criarToken(user);
    
    return token;
}