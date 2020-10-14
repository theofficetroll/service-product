import { configure, shallow, mount } from 'enzyme';
import React from 'react';
import Product from '../components/Product.jsx';
import Price from '../components/Price.jsx';
import Name from '../components/Name.jsx';
import Styles from '../components/Styles.jsx';
import Style from '../components/Style.jsx';


import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ProductModule />', () => {
  const details = {
    name: 'Spring Nova X7',
    gender: 'Men\'s',
    category: 'Trail Running',
    price: '670'
  };
  it('renders without crashing', () => {
    shallow(<Product details={details} />);
  });
});

describe('<Price />', () => {
  it('renders without crashing', () => {
    const price = '1200';
    shallow(<Price price={price} />);
  });
  it('renders with a 0 price', () => {
    const price = '0';
    shallow(<Price price={price} />);
  });
  it('renders with an undefined price', () => {
    const price = undefined;
    shallow(<Price price={price} />);
  });
});

describe('<Name />', () => {
  it('renders without crashing', () => {
    const name = 'Spring Nova X7';
    shallow(<Name name={name}/>);
  });
});

describe('<Styles />', () => {
  const styles = [{
    imageRegular: 'https://fake-url.com/1/001/regular.png',
    imageThumbnail: 'https://fake-url.com/1/001/thumbnail.png',
    options: 'Member Select',
    price: '100',
    styleId: '001'
  },
  {
    imageRegular: 'https://fake-url.com/1/001/regular.png',
    imageThumbnail: 'https://fake-url.com/1/001/thumbnail.png',
    options: 'Member Select',
    price: '200',
    styleId: '002'
  },
  {
    imageRegular: 'https://fake-url.com/1/001/regular.png',
    imageThumbnail: 'https://fake-url.com/1/001/thumbnail.png',
    options: 'Member Select',
    price: '300',
    styleId: '003'
  }];
  it('renders without crashing', () => {
    shallow(<Styles styles={styles}/>);
  });
  it('renders 3 <Style /> components', () => {
    const wrapper = mount(<Styles styles={styles} />);
    expect(wrapper.find(Style).length === 3).toEqual(true);
  });
});

describe('<Style />', () => {
  const style = {
    imageRegular: 'https://fake-url.com/1/001/regular.png',
    imageThumbnail: 'https://fake-url.com/1/001/thumbnail.png',
    options: 'Member Select',
    price: '550',
    styleId: '003'
  };
  it('renders without crashing', () => {
    shallow(<Style style={style}/>);
  });

});

