import React from 'react';
import ReactDOM from 'react-dom';

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
    // set state based on API response
  }


}

const ProductApp = () => {
  console.log('here');
  return (
    <h1>Hello!</h1>
  );
};

ReactDOM.render(<ProductApp />, document.getElementById('app'));
