import {client} from '../client';

export async function create(){
  return client.post('/users').set('Authorization', `Bearer ${process.env.TOKEN}`)
}