import express, { Request, Response } from "express";

export const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Pokedex",
    scripts: [{ src: "/assets/bundle.js", type: "text/javascript" }],
  });
});

router.get("*", (req: Request, res: Response) => {
  res.status(404);
  res.render("index", { scripts: [] });
});
