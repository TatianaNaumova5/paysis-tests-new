import {client} from '../client';

async function delete_(id){
  return client.delete('/users').set('Authorization', `Bearer ${process.env.TOKEN}`).send({id})
}
export {delete_ as delete}