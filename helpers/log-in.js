import request from 'supertest';
import {client} from './client';

export async function  logIn(login, password){
  return client.post('/auth').send({login, password})
}
