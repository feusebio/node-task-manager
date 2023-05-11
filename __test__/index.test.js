const axios = require('axios');

const url = 'http://127.0.0.1:3000/api/v1/tasks'

describe('The router', () => {
  test('Get all tasks', async () => {
    const res = await axios.get(url)

    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    // expect(res.data).toEqual('')
  })

  test('Create a task', async () => {
    const res = await axios.post(url, {
      name: 'task test',
      description: 'mocked task test'
    })
    expect(res.status).toBe(200)
    // expect(res.data).toEqual('')
  });
})