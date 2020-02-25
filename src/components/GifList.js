import React, { Component } from 'react'

export default class GiftList extends Component {
  render(){
    // console.log(this.props.gifList)
    const theGif = this.props.gifList.map( gif => {
      // console.log(gif)
      // for(let i =  0; i < 4 ; i++) {
      //   let output =+ 
      return <li><img src={gif.images.downsized_large.url} alt=""/></li>
      // }
    });



    return(
      <div>
        <ul>
          {theGif}
        </ul>

      </div>
    )
  }
}