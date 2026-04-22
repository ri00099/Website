import express, { Request, Response } from "express";
import path from "path";

export function serveStatic(app: express.Express) {
  const rootPath = path.resolve();
  const distPath = path.join(rootPath, "dist/public");

  app.use(express.static(distPath));

  // app.get("/*", (_req: Request, res: Response) => {
  //   res.sendFile(path.join(distPath, "index.html"));
  // });

  app.use((req: Request, res: Response) => {
  res.sendFile(path.join(distPath, "index.html"));
});
}