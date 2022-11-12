import { Request, Response } from 'express';

export async function getPortafolio(req: Request, res: Response): Promise<any> {
  try {
    return res.json("portafolio");
  } catch (err) {
    console.log(err);
  }
  /* return res.json("prueba 2.1") */
}
