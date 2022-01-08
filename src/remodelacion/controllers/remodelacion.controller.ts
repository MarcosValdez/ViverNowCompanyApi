import { Request, Response } from 'express';
import { connect } from '../../database';

export async function getRemodelacion(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const conn = await connect();
    const response = await conn?.query(
      'SELECT * FROM Remodelacion where remodelacion_id = ?',
      [req.params.id]
    );
    return res.json(response);
  } catch (err) {
    console.log(err);
  }
}

export async function getAllRemodelacion(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const conn = await connect();
    const response = await conn?.query('SELECT * FROM Remodelacion');
    return res.json(response);
  } catch (err) {
    console.log(err);
  }
}

export async function createRemodelacion(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { nombre } = req.body;
    const conn = await connect();
    const reponse = await conn?.query(
      'insert into Remodelacion (nombre) values (?) ',
      [nombre]
    );
    return res.json(reponse);
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
    const conn = await connect();
    const reponse = await conn?.query(
      'update Remodelacion set nombre = ? where remodelacion_id = ?',
      [nombre, req.params.id]
    );
    return res.json(reponse);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteRemodelacion(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const conn = await connect();
    const reponse = await conn?.query(
      'delete from Remodelacion where remodelacion_id = ?',
      [req.params.id]
    );
    return res.json(reponse);
  } catch (err) {
    console.log(err);
  }
}
