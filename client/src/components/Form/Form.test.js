import React from 'react';


import { render } from '@testing-library/react';
//import { shallow, mount } from '@wojtekmaj/enzyme-adapter-react-17';
import Form  from './index';

// describe('<Form /> Mounted', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<Form />);
//   });
//   it('El form debe tener un label que diga: "Username:"', () => {
//       const { container } = render(<Form />)
//       const element = container.querySelectorAll('label')[0]
//       expect(element.innerHTML).toBe('Username:');
//   });

//   it('El form debe tener un label que diga: "Password:"', () => {
//     const { container } = render(<Form />)
//     const element = container.querySelectorAll('label')[1]
//     expect(element.innerHTML).toBe('Password:');
//   });

  it('El form debe tener un input con name "name" y type "text"', () => {
    const { container } = render(<Form />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('username');
  });

  it('El form debe tener un input con name "height_min" y type "text"', () => {
    const { container } = render(<Form />)
    const element = container.querySelectorAll('input')[1]
    expect(element.type).toBe('text');
    expect(element.name).toBe('height_min');
  });

//   
//});
