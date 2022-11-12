import { Request, Response } from 'express';

export async function getRemodelacion(
  req: Request,
  res: Response
): Promise<any> {
  try {

    
  } catch (err) {
    console.log(err);
  }
}

export async function getAllRemodelacion(
  req: Request,
  res: Response
): Promise<any> {
  try {
    
  } catch (err) {
    console.log(err);
  }
}

export async function createRemodelacion(
  req: Request,
  res: Response
): Promise<any> {
  try {
    
  } catch (err) {
    console.log(err);
  }
}

export async function updateRemodelacion(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { nombre } = req.body;
    return null
  } catch (err) {
    console.log(err);
  }
}

export async function deleteRemodelacion(
  req: Request,
  res: Response
): Promise<any> {
  try {
    
    return res.json("afd");
  } catch (err) {
    console.log(err);
  }
}
