import express, { type Express } from "express";
import path from "path";

export function serveStatic(app: Express) {
  const rootPath = path.resolve(); // project root
  const distPath = path.join(rootPath, "dist/public");

  app.use(express.static(distPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}