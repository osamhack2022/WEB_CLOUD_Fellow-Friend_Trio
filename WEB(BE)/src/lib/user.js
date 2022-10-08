// const { User } = require('../models/user')

// /** Get Method 요청시 유저 정보 반환  */
// const GetUser = () => {
//   // 작성예정
//   return 1
// }

// /**유저 생성 */
// const CreateUser = () => {
//   const user = new User({ ...res.body })
//   user.save().then(() => {
//     // token값을 가져와서 보내야한다.
//     res
//       .json({
//         message: '계정이 생성되었습니다.',
//       })
//       // 실패 시 다시 시도할 수 있는 로직 구현해야한다.
//       .catch((err) => {
//         res.json({
//           message: '계정 생성에 실패하였습니다.',
//         })
//       })
//   })
// }

// /** 유저 1명 삭제 */
// const DeleteUser = () => {
//   User.findOneAndDelete({ id: req.body.id }).then(
//     (res) => {
//       res.json({
//         userDelete: true,
//         message: '유저 정보가 삭제되었습니다.',
//       })
//     },
//     (err) => {
//       if (err) {
//         res.json({
//           userDelete: false,
//           message: '유저가 삭제 되지않았습니다.',
//         })
//       }
//     }
//   )
// }
