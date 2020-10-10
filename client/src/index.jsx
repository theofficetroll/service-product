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
    const ids = window.location.pathname.split('/');
    super(props);
    this.state = {
      productId: ids[2],
      styleId: ids[3],
      name: '',
      gender: '',
      category: '',
      style: {},
      styles: [],
    };
  }

  setThumbnails(photos) {
    let test = this.state.styles.map(style => {
      // console.log('state style', style);
      photos.map(photo => {
        // console.log('photo style', photo);
        if (photo.style_id === style.styleId) {
          // console.log(photo.style_id, style.styleId);
          test = style;
          test['imageThumbnail'] = photo.main_photo.thumbnail_url;
          test['imageRegular'] = photo.main_photo.regular_url;
        }
      });
    });
    this.setState({
      styles: test
    });
  }

  componentDidMount() {
    $.ajax({
      url: `http://localhost:3008/product/${this.state.productId}`
    }).done((d) => {
      console.log('product received', d);
      this.setState({
        productId: d.productId,
        name: d.name,
        gender: d.gender === 'male' ? 'Men\'s' : 'Women\'s',
        category: d.category,
        style: d.styles.filter(s => this.state.styleId === s.styleId),
        styles: d.styles,
      // console.log('state', this.state);
      }, () => {
        $.ajax({
          url: `http://localhost:3000/photos/${this.state.productId}`
        }).done((photos) => {
          this.setThumbnails(photos);
        });
      });
    });
    console.log('====componentDidMount state', this.state);
  }

  render() {
    console.log('====render state', this.state);
    return (
      <ProductNeedToKnow>
        <NameGenderCategoryPrice name = {this.state.name} gender= {this.state.gender} category = {this.state.category} price = {this.state.style.price} />
        <Styles styles = {this.state.styles} />
      </ProductNeedToKnow>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
