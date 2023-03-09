import {client} from '../client';

export async function delete_(id){
  return client.delete('/users').set('Authorization', `Bearer ${process.env.TOKEN}`).send({id})
}