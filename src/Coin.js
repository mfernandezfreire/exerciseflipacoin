import React, { Component } from 'react'
import Dollar from './Dollar'

export default class Coin extends Component {
    static defaultProps = {
        sides: ['face', 'tails']
    }
    constructor(props) {
        super(props)
        this.state = {
            side: 'face',
            flips: 0,
            head: 0,
            tails: 0
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        const side = this.props.sides[Math.floor(Math.random() * 2)]
        if (side === 'face') {
            this.setState({
                side: 'face',
                flips: this.state.flips+1,
                head: this.state.head+1,
                tails: this.state.tails
            })
        } else {
            this.setState({
                side: 'tails',
                flips: this.state.flips+1,
                head: this.state.head,
                tails: this.state.tails+1
            })
        }

    }

    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Dollar image={this.state.side}></Dollar>
                <button onClick={this.roll}>Flip MEEEEE!</button>
                <p>Our of {this.state.flips} flips, there have been {this.state.head} heads and {this.state.flips} tails</p>
            </div>
        )
    }
}

