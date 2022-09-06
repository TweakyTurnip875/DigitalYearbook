import { Component } from 'react'
import { Dropbox } from 'dropbox';

export default class FeaturedItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      featured: this.props.featured
    }
  }
  render() {
    return (
      <div className="featured-item-container">
        <div 
          className="featured-image-wrapper"
          style={{
            backgroundImage: `url(${this.props.featured})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          />
      </div>
    )
  }
}