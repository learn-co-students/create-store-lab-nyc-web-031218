export default function manageUsers(state = {
  users: []
}, action){

  console.log(`action.type: `, action.type)
  console.log(`state: `, state)
  switch(action.type){
    case 'ADD_USER':
      return {
        users: [
          ...state.users,
          {
            username: action.user.username,
            hometown: action.user.hometown
          }
        ]
      }

    default:
      return state
  }
}
