import type { NextFunction, Request, Response } from "express";

// Middleware d'erreur générique
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(err);

  res.status(500).json({
    message: "Une erreur interne est survenue.",
  });
}

