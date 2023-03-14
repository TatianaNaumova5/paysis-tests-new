import {client} from '../client';

export async function patch(number, amount){
  return client.patch('/config').set('Authorization', `Bearer ${process.env.TOKEN}`)
    .send(number, amount)}
