import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import GenderCategory from './components/GenderCategory.jsx';
import Name from './components/Name.jsx';
import Price from './components/Price.jsx';
import Styles from './components/Styles.jsx';

const ProductNeedToKnow = styled.div`
  display: flex;
`;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      name: '',
      gender: '',
      category: '',
      style: {},
      styles: [],
    };
  }

  componentDidMount() {
    console.log('fetching...');
    $.ajax({
      url: '/products/all/1'
    }).done((data) => {
      console.log('server', data);
      let d = data[0];
      this.setState({
        productId: d.productId,
        name: d.name,
        gender: d.gender === 'male' ? 'Men\'s' : 'Women\'s',
        category: d.category,
        style: d.styles[0],
        styles: d.styles,
      });
      console.log('state', this.state);
    });
  }

  render() {
    return (
      <ProductNeedToKnow>
        <GenderCategory gender = {this.state.gender} category = {this.state.category} />
        <Price style = {this.state.style} />
        <Name name = {this.state.name} />
        <Styles styles = {this.state.styles} />
      </ProductNeedToKnow>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
