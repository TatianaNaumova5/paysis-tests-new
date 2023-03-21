import 'dotenv/config'
import {logIn, config} from '../helpers';
import {start} from './server'

const baseUrl = process.env.BASE_URL
const port = process.env.PORT
const isMock = baseUrl.includes(`localhost:${port}`)

if(isMock)
  start(port)

before(async  () =>{
  const response = await logIn(process.env.LOGIN,process.env.PASSWORD)
  process.env['TOKEN'] = response.body.token
})

after(async  () =>{
  if (!isMock)
  await config.delete()
})
