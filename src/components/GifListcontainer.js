import React, { Component } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default class GifListcontainer extends Component {

    constructor() {
        super()
        this.state = {
            gifData: [],
        }
    }

    searchData = (data) => {
        const searchInput = data
        const API_KEY = '1RIoD7QFf4ZXhbURNrlxW3Ym0hBl7Mep'
        const GIF_URL =`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${API_KEY}&rating=g&limit=3`
        fetch(GIF_URL)
            .then(res => res.json())
            .then(response => this.setData(response.data))
    }

    setData = (data) => {
        this.setState({
            gifData: data
        })
    }

    render() {
        return (
            <div>
                <GifSearch submitHandler={this.searchData} />
                <GifList gifs={this.state.gifData}/>
            </div>
        )
    }
}
