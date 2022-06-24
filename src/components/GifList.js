import React, { Component } from 'react'

export default class GifList extends Component {

    constructor(props) {
        super()
        this.state = {
            gifData: props.gifs
        }
    }

    // 

    render() {

        const mapGifs = this.props.gifs.map((element, index) => {
            return <li><img key={index} src={element.images.original.url} alt="gif"></img></li>
        })

        return (
            <div>
               <ul>
               {mapGifs}
               </ul>
            </div>
        )
    }
}
