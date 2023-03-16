import {client} from '../client';

export async function patch(entries, amount){
  return client.patch('/config').set('Authorization', `Bearer ${process.env.TOKEN}`)
    .send(entries, amount)}
