import React, { Component } from 'react'

export default class Test2 extends Component {
  state = {
    data: [1, 2]
  }
  go = () => {
    console.log(this.one);
    this.setState({ data: [1, 2, 3] })
  }
  render() {
    const { name, age } = this.props
    const { data } = this.state
    return (
      <div className='Test' ref={c => this.one = c}>
        {name + age}
        {
          data.map((i, index) => (
            <strong onClick={this.go} key={index}>{i}</strong>
          ))
        }
      </div>
    )
  }
}
