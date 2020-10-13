import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import Product from './components/Product.jsx';
import Styles from './components/Styles.jsx';

const ProductInfo = styled.div`
  display: flex;
  flex-flow: column;
`;

class ProductModule extends React.Component {

  constructor(props) {
    const ids = window.location.pathname.split('/');
    super(props);
    this.state = {
      productId: ids[2],
      styleId: ids[3],
      details: {
        name: '',
        gender: '',
        category: '',
        price: ''
      },
      style: {},
      styles: [],
    };
  }

  setThumbnails(styles, photos) {
    let stylesUpdated = [];
    styles.map(style => {
      photos.map(photo => {
        if (photo.style_id === style.styleId) {
          style['imageThumbnail'] = photo.main_photo.thumbnail_url;
          style['imageRegular'] = photo.main_photo.regular_url;
          stylesUpdated.push(style);
        }
      });
    });
    return stylesUpdated;
  }

  componentDidMount() {
    $.ajax({
      url: `http://localhost:3008/product/${this.state.productId}`
    }).done((data) => {
      $.ajax({
        url: `http://localhost:3000/photos/${this.state.productId}`
      }).done((photos) => {
        let stylesUpdated = this.setThumbnails(data.styles, photos);
        let currentStyle = stylesUpdated.filter(s => '00' + this.state.styleId === s.styleId)[0];
        this.setState({
          productId: data.productId,
          details: {
            name: data.name,
            gender: data.gender === 'male' ? 'Men\'s' : 'Women\'s',
            category: data.category,
            price: currentStyle.price,
          },
          style: currentStyle,
          styles: stylesUpdated
        });
      });
    });
  }

  render() {
    console.log('====render state', this.state);
    return (
      <ProductInfo>
        <Product details={this.state.details} />
        <Styles styles = {this.state.styles} />
      </ProductInfo>
    );
  }
}

ReactDOM.render(<ProductModule />, document.getElementById('product-module'));
