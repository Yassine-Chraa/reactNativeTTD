import {Dispatch} from 'react';

export const getUserAction = () => async (dispatch: Dispatch<any>) => {
  try {
    //const {data} = await axios.get(`${usersUrl}/profile`);
    dispatch({type: `Get User`, payload: {FullName: 'Yassine Chraa', age: 22}});
    return {FullName: 'Yassine Chraa', age: 22};
  } catch (error: any) {
    return false;
  }
};
