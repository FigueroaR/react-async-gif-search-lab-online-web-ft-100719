import React, { Component } from 'react' 


export default class GifSearch extends Component {




  render(){
    return(
      <form onSubmit={this.props.handleOnClick}>
        <label>
          Search:
          <input type="text" onChange={this.props.handleOnInput} />
        </label>
        <input type="submit" value="Gif Me" />
      </form> 
    )
  }
}




{/* <form onSubmit={this.props.handleOnClick}>
        
        <input type="text" onChange={this.props.handleOnInput}></input>
        <input type='submit' value='submit'>Search Gif</input>
      </form> */}