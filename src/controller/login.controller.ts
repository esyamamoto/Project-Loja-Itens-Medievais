import { Request, Response } from 'express';
import loginService from '../service/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await loginService.login(req.body);

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);  
  }  
  return res.status(200).json(serviceResponse.data);
}

export default {
  login,
};