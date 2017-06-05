import React, { Component } from 'react'

export default class BonesJokes extends Component {
  componentDidMount() {
    this.nextJoke()
  }

  nextJoke = () =>
    this.setState({
      joke: randomJoke(),
      answered: false,
    })

  answer = () =>
    this.setState({answered: true})

  render() {
    if (!this.state) { return null }

    const {joke, answered} = this.state
    return (
      <div onClick={answered ? this.nextJoke : this.answer}>
        <h1>{joke.q}</h1>
        {answered && <h2>{joke.a}</h2>}
        <cite>~xoxo, bones</cite>
      </div>
    )
  }
}

function randomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)]
}

const jokes = `Q: What's black and white and read all over?
A: A newspaper!`
  .split('\n')
  .reduce((all, row, i) =>
    i % 2 === 0
    ? [...all, {q: row}]
    : [...all.slice(0, all.length - 1), Object.assign({a: row}, all[all.length - 1])],
    [])
