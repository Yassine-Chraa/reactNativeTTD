import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import App from '../App';
import Home from '../src/screens/Home';
import { fetchUserDetails } from '../src/models/user';


describe("Main App",()=>{
  it('renders correctly', () => {
    renderer.create(<App />);
  });
})

describe("Profile Screen",()=>{
  it('renders correctly', () => {
    renderer.create(<Home />);
  });
  it('Fetch User Details',()=>{
    fetchUserDetails().then((res)=>{
      expect(res).not.toBeNull();
    })
  })
  it.todo("...");
})

