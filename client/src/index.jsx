import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Product from './components/Product.jsx';
import Styles from './components/Styles.jsx';

const PRODUCT_API = 'http://localhost:3008/product';
const PHOTO_API = 'http://localhost:3008/photos';

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
        name: 'Test',
        gender: 'male',
        category: 'Tennis',
        price: '200'
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

  handleStyleClick(styleId) {
    // change url to reflect the new styleId
    styleId = styleId.replace('00', '');
    window.location.pathname = `/shop/${this.state.productId}/${styleId}`;
  }

  fetchData() {
    let productId = this.state.productId;
    $.ajax({
      method: 'GET',
      url: `${PRODUCT_API}/${productId}`,
      datatype: 'json',
      success: (data) => {
        let currentStyle = this.state.styleId;
        this.setState({
          productId: data.productId,
          details: {
            name: data.name,
            gender: data.gender === 'male' ? 'Men\'s' : 'Women\'s',
            category: data.category,
            price: 100, // TODO this is a placeholder, it will need to be replaced with the new database. This current model won't work
          },
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  componentDidMount() {
  }

  render() {
    return (
      <ProductInfo>
        <Product details={this.state.details} />
        <Styles styles={this.state.styles} handleStyleClick={this.handleStyleClick.bind(this)}/>
      </ProductInfo>
    );
  }
}

ReactDOM.render(<ProductModule />, document.getElementById('product-module'));
