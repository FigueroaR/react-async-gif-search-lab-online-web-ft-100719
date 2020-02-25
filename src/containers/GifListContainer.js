import React from 'react' 
import GiftList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{
  constructor(){
    super();
    this.state= {
      list: [],
      filter: 'dolphin'
    }
  }

  handleSearch = (e) => {
    // console.log(e.target.value)
    e.preventDefault()
    this.setState({
      filter: e.target.value
    }, () => console.log(this.state.filter))
  }

  handleClick = (e) => {
    e.preventDefault()
    // console.log(e.target, this.state.list)
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.filter}&api_key=X2qUxkqSSF5EVYGwaRiS0C8KCkXw0WwJ&rating=g`)
    .then( resp => resp.json())
    .then( (gifs) => {
      // console.log(gifs)
        this.setState({
          list: gifs.data
        })
    }
    // , () => console.log(this.state.list)
    )}

  render(){
    return(
      <div>
        <GifSearch handleOnInput={this.handleSearch}  handleOnClick={this.handleClick}/>
        <br></br>
        <GiftList gifList={this.state.list} />
      </div>
    )
  }

  componentDidMount(){
    
  }
  


}