import React, { Component } from 'react'
import './Dollar.css'

export default class Dollar extends Component {
    render() {
        return (
            <div className="Dollar">
                {(this.props.image === "face") ? <img src={`https://tinyurl.com/react-coin-heads-jpg`}/> : <img src={`https://tinyurl.com/react-coin-tails-jpg`}/>}
            </div>
        )
    }
}
