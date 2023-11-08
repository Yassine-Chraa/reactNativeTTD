import React from 'react';
import { it } from '@jest/globals';
import renderer from 'react-test-renderer';
import App from '../App';
import Home from '../src/screens/Home';
import { fetchUserDetails } from '../src/models/user';
import { getUserAction } from '../src/redux/actions/user';
import user from '../src/redux/reducers/user';

describe("Main App", () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
})

describe("Home Screen", () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Fetch User Details', () => {
    fetchUserDetails().then((res) => {
      expect(res).not.toBeNull();
    })
  })
  it.todo("...");
})

describe("Redux Reducers", () => {
  it("fetch user details", () => {
    const res = user(false,{type:"Get User",payload:{ fullName: "Yassine Chraa", age: 22 }});
    expect(res).toEqual({ fullName: "Yassine Chraa", age: 22 })
  })
  it("update user",()=>{
    const currentState = { fullName: "Yassine Chraa", age: 22 };
    const res = user(currentState,{type: "Update User",payload:{fullName: "Ahmed Chraa"}})
    expect(res).toEqual({fullName: "Ahmed Chraa",age: 22})
  })
})

