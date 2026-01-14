import type { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    console.log('register', req.body)
    const { username, email, password } = req.body;
    res.json({ message: 'register' })
}