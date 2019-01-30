import React from "react"
import Layout from "../layouts/main"

export default class extends React.Component {
  constructor (props) {
     super(props)
  }
  render() {
    return (
      <Layout title="A page">
        <div>
          <h2>A Header</h2>
          <p>Some text for my page</p>
        </div>
      </Layout>
    )
  }
}