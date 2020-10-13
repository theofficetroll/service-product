import { configure, shallow } from 'enzyme';
import React from 'react';
import Product from '../components/Product.jsx';
import Price from '../components/Price.jsx';
import Name from '../components/Name.jsx';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ProductModule />', () => {
  it('renders without crashing', () => {
    shallow(<Product />);
  });
});

describe('<Price />', () => {
  it('renders without crashing', () => {
    shallow(<Price />);
  });
});

describe('<Name />', () => {
  it('renders without crashing', () => {
    shallow(<Name />);
  });
});