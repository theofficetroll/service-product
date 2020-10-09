import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import NameGenderCategoryPrice from './components/NameGenderCategoryPrice.jsx';
import Styles from './components/Styles.jsx';

const ProductNeedToKnow = styled.div`
  display: flex;
  flex-flow: column;
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
    console.log(this.state);
    return (
      <ProductNeedToKnow>
        <NameGenderCategoryPrice name = {this.state.name} gender= {this.state.gender} category = {this.state.category} price = {this.state.style.price} />
        <Styles styles = {this.state.styles} />
      </ProductNeedToKnow>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
