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
        console.log('with thumbnails', stylesUpdated);
        this.setState({
          productId: data.productId,
          name: data.name,
          gender: data.gender === 'male' ? 'Men\'s' : 'Women\'s',
          category: data.category,
          style: stylesUpdated.filter(s => this.state.styleId === s.styleId)[0],
          styles: stylesUpdated
        });
      });
    });
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
