import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {
        productId: '',
        name: '',
        gender: '',
        category: '',
        price: '',
        styles: [],
        options: ''
      }
    };
  }

  componentDidMount() {
    // API call to product service
    $.ajax({
      url: '/product',
      success: (data) => {
        console.log(data);
      }
    });
    // set state based on API response
  }

  render() {
    return (
      <h1>Hello!</h1>
    );
  }

}


ReactDOM.render(<App />, document.getElementById('app'));
