import { login } from "../../../services/users";

export default function handle(req, res) {
    try {
        const user = login(req.body);
        res.status(200).json(user);
    } catch(error) {
        res.status(400).json(error.message)
    }
}