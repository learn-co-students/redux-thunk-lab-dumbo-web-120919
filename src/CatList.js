// write your CatList component here
import React, { Component } from 'react';

export default class CatList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>  
        {this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)}
      </div>
    );
  }
}
