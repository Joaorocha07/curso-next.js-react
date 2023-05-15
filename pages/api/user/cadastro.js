import { cadastro } from "../../../services/users";

export default function handle(req, res) {
    try {
        const novoUsuario = cadastro(req.body);
        res.status(201).json(novoUsuario);
    } catch(error) {
        res.status(400).json(error.message)
    }
}