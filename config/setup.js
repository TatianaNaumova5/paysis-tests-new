import 'dotenv/config'
import {logIn, config} from '../helpers';

before(async  () =>{
  const response = await logIn(process.env.LOGIN,process.env.PASSWORD)
  process.env['TOKEN'] = response.body.token
})

after(async  () =>{
  await config.delete()
})
