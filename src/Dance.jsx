import React, { Component } from 'react'
import { ThemeContext } from './context'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {
            (value) => {
              return <h1>{value}</h1>
            }
          }
        </ThemeContext.Consumer>
        
      </div>
    )
  }
}
