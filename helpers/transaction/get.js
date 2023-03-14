import {client} from '../client';

export async function get(id=''){
  return client.get(`/transactions?id=${id}`).set('Authorization', `Bearer ${process.env.TOKEN}`)
}
