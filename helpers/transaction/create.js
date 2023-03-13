import {client} from '../client';

export async function create(from, to, amount){
  return client.post('/transactions')
    .set('Authorization', `Bearer ${process.env.TOKEN}`)
    .send({
      from,
      to,
      amount,
    })
}
