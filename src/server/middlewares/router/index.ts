import express, { Request, Response } from "express";

export const router = express.Router({ strict: true });

router.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Pokedex",
    scripts: [],
  });
});

router.get("*", (req: Request, res: Response) => {
  res.status(404);
  res.render("index", {});
});
