import { Component } from 'react'
import { Dropbox } from 'dropbox';

import FeaturedItem from './featured-item'

const accessToken = import.meta.env.VITE_KEY + "";

export default class FeaturedContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: []
    }
    this.getItems = this.getItems.bind(this)
    this.handleSetFeaturedItem = this.handleSetFeaturedItem.bind(this)
  }
  
  getItems() {
    const dbx = new Dropbox({
      accessToken,
      
    })
      dbx.sharingGetSharedLinks({
        path: ''
      }).then(res => {
        console.log(res)
        this.setState({
          data: res.result.links.map(i => i.url + "&raw=1 ")
        })

      })

  }
  handleSetFeaturedItem() {
    return this.state.data.map(i => {
      return <FeaturedItem featured={i} />
    })
  }
  componentDidMount() {
    this.getItems()
  }
  render() {
    return(
      
      <div>
        <div className="featured-wrapper">{this.handleSetFeaturedItem()}</div>
      </div>
    )
  }
}