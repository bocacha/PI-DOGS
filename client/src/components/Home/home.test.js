import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import store from './../../store/index';

import Home from './home';

describe('Home', () => {
    
    test('renders Home component', () => {
        
        render (<Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>);
        expect (document.getElementById('form')).toBeInTheDocument();
        // expect (document.getElementById('weight')).toBeInTheDocument();
    })
    test('renders learn react link', () => {
        const { getByText } = render (<Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>);;
        const linkElement = getByText(/Create your own!/i);
        expect(linkElement).toBeInTheDocument();
      });
    
})