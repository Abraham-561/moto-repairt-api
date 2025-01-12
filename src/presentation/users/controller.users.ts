import { Request, Response } from "express";

export class UsersController {
    constructor() {}

    // Obtener lista de usuarios
    getUsers = (_req: Request, res: Response) => {
        return res.status(200).json({
            message: "Lista de usuarios",
            users: [], // Aquí deberías obtener los usuarios de la base de datos
        });
    };

    // Obtener un usuario por ID
    getUserById = (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Se requiere un ID válido" });
        }

        // Validar si el usuario existe en la base de datos
        const user = null; // Aquí deberías buscar el usuario por ID en la base de datos

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        return res.status(200).json({
            message: "Usuario encontrado",
            user,
        });
    };

    // Crear un nuevo usuario
    createUser = (req: Request, res: Response) => {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "Faltan campos obligatorios: name, email, password, role" });
        }

        if (!["client", "employee"].includes(role)) {
            return res.status(400).json({ message: "El rol debe ser 'client' o 'employee'" });
        }

        // Crear el usuario en la base de datos
        const newUser = { id: 1, name, email, password, role, status: "active" }; // Simulación

        return res.status(201).json({
            message: "Usuario creado con éxito",
            user: newUser,
        });
    };

    // Actualizar datos de un usuario
    updateUser = (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, email } = req.body;

        if (!id) {
            return res.status(400).json({ message: "Se requiere un ID válido" });
        }

        if (!name && !email) {
            return res.status(400).json({ message: "Se requiere al menos un campo para actualizar: name o email" });
        }

        // Validar si el usuario existe en la base de datos
        const user = null; // Aquí deberías buscar el usuario por ID en la base de datos

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Actualizar el usuario en la base de datos
        const updatedUser = { ...user, name, email }; // Simulación

        return res.status(200).json({
            message: "Usuario actualizado con éxito",
            user: updatedUser,
        });
    };

    // Deshabilitar la cuenta de un usuario
    disableUser = (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Se requiere un ID válido" });
        }

        // Validar si el usuario existe en la base de datos
        const user = null; // Aquí deberías buscar el usuario por ID en la base de datos

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Cambiar el estado del usuario en la base de datos
        const disabledUser = { ...user, status: "disabled" }; // Simulación

        return res.status(200).json({
            message: "Usuario deshabilitado con éxito",
            user: disabledUser,
        });
    };
}
