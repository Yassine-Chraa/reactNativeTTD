import UserInterface from '../../interfaces/UserInterface';

export default (
  user: UserInterface | false,
  action: {type: String; payload: UserInterface},
) => {
  switch (action.type) {
    case 'Get User':
      return action.payload;
    case 'Update User':
      if (user) {
        return {
          fullName: action.payload.fullName || user.fullName,
          age: action.payload.age || user.age,
        };
      } else {
        return action.payload;
      }
    default:
      return false;
  }
};
