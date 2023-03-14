import {client} from '../client';

export async function delete_(){
  return client.delete('/config').set('Authorization', `Bearer ${process.env.TOKEN}`)
}
