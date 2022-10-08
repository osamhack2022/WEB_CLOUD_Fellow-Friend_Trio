/** 채팅 입장시 매칭 */
const ChatingInput = (socket) => {
  socket.on('chating Input', () => {
    console.log(`${socket.id} 채팅방에 입장하였습니다.`)
  })
  socket.on('error', () => {
    console.log(`${socket.io} 채팅방에 입장하지 못하였습니다.`)
  })
}

module.exports = { ChatingInput }
