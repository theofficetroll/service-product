import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Product from './components/Product.jsx';
import Styles from './components/Styles.jsx';

console.log(process.env.PRODUCT_API);
console.log(process.env.PHOTO_API);
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
    this.fetchData();
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

  fetchData() {
    $.ajax({
      url: `${process.env.PRODUCT_API}/${this.state.productId}`
    }).done((data) => {
      $.ajax({
        url: `${process.env.PHOTO_API}/${this.state.productId}`
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
      }).fail(() => {
        console.log('handling failed request');
        let photos = [
          {
            'product_id': 1,
            'style_id': '001',
            'main_photo': {
              'thumbnail_url': 'https://ultimate-nike.s3.us-west-1.amazonaws.com/photos/main/thumbnail/1-001.jpg',
              'regular_url': 'https://ultimate-nike.s3.us-west-1.amazonaws.com/photos/main/regular/1-001.jpg'
            }
          },
          {
            'product_id': 1,
            'style_id': '002',
            'main_photo': {
              'thumbnail_url': 'https://ultimate-nike.s3.us-west-1.amazonaws.com/photos/main/thumbnail/1-002.jpg',
              'regular_url': 'https://ultimate-nike.s3.us-west-1.amazonaws.com/photos/main/regular/1-002.jpg'
            }
          },
          {
            'product_id': 1,
            'style_id': '003',
            'main_photo': {
              'thumbnail_url': 'https://ultimate-nike.s3.us-west-1.amazonaws.com/photos/main/thumbnail/1-003.jpg',
              'regular_url': 'https://ultimate-nike.s3.us-west-1.amazonaws.com/photos/main/regular/1-003.jpg'
            }
          }
        ];
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

  componentDidMount() {
  }

  render() {
    console.log(this.state);
    return (
      <ProductInfo>
        <Product details={this.state.details} />
        <Styles styles = {this.state.styles} />
      </ProductInfo>
    );
  }
}

ReactDOM.render(<ProductModule />, document.getElementById('product-module'));
