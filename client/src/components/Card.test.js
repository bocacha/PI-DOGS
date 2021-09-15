import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
    test('renders Card component', () => {
        render (<Card />);
        expect (document.getElementById('name')).toBeInTheDocument();
        expect (document.getElementById('weight')).toBeInTheDocument();
    })
})