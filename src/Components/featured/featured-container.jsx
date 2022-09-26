import { Component } from 'react'
import { Dropbox } from 'dropbox';
import axios from 'axios'
//import crypto from 'crypto'


import FeaturedItem from './featured-item'

const accessToken = "sl.BQASn4GeJUPVm41nGwntP2OSfu4ir4YFB3miuk0NZCWjhSwl8mxRQLjktSF6O5JUTJjkSEpl2R4e7pIDpGrJG0LQ5To5R_-g30YFKwgqFBx2SC6ZcFBDiCsWbucwGlFdI1o5eurm25SH";

export default class FeaturedContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
    this.getItems = this.getItems.bind(this)
    this.handleSetFeaturedItem = this.handleSetFeaturedItem.bind(this)
    this.getAccessToken = this.getAccessToken.bind(this)
  }

  getAccessToken() {

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
    return (

      <div>
        <div className="featured-wrapper">{this.handleSetFeaturedItem()}</div>
      </div>
    )
  }
}