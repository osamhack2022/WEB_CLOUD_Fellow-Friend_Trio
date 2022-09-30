/** test file */
let temp
describe('socket.io Testing', () => {
  beforeEach(() => {
    temp = 1
  })

  afterEach(() => {
    temp = 0
  })

  test('1 is 1', () => {
    expect(1).toBe(1)
  })

  test('[1,2,3] is [1,2,3]', () => {
    expect(1).toEqual(1)
  })
})
