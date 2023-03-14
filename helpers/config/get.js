import {client} from '../client';

export async function getConfig(){
  return client.get('/config').set('Authorization', `Bearer ${process.env.TOKEN}`)
}
