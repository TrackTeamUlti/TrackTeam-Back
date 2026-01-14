import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

// GET /api/users
export const getUsers = async (_req: Request, res: Response) => {
  const users = await prisma.users.findMany();
  res.json(users);
};

// GET /api/users/:id
export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  const user = await prisma.users.findUnique({
    where: { id },
  });

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.json(user);
};

// POST /api/users
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "email et password sont obligatoires" });
  }

  const newUser = await prisma.users.create({
    data: {
      username,
      email,
      password_hash: password, // TODO: à remplacer par un vrai hash
    },
  });

  res.status(201).json(newUser);
};
