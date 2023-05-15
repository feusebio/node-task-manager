import { get, post } from 'axios';
import User from '../models/users.model';
import jwt from 'jsonwebtoken'

const url = 'http://127.0.0.1:3000/api/v1'
const userOne = {
    id: 1,
    email: "filipe@test.com",
    password: "xpto",
    tokens: [{
      token: jwt.sign({ user_id: 1, email: "filipe@test.com" },
        process.env.TOKEN_KEY, { expiresIn: "2h"})
    }]
}

let token = "";

describe('The router', () => {
  test('Should login existing user', async () => {
      const response = await post(url+'/users/login', {
        email:userOne.email,
        password: userOne.password
      })
      expect(200)
    const user = await User.findOne(userOne.email)
    token = response.data.token
    expect(response.data.token).toBe(userOne.tokens[0].token)
  })

  test('Get all tasks', async () => {
    const res = await get(url+'/tasks?token='+token)

    // expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    // expect(res.data).toEqual('')
  })

  test('Create a task', async () => {
    const res = await post(url+'/tasks?token='+token, {
      name: 'task test',
      summary: 'mocked task test'
    })
    expect(res.status).toBe(200)
    // expect(res.data).toEqual('')
  });
})