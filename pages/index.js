import React from "react"
import Layout from "../layouts/main"

export default class extends React.Component {
  constructor (props) {
     super(props)
  }
  render() {
    return (
      <Layout title="Main page" lang="en">
        <div>
          <h2 className="big-title">A Header</h2>
          <p className="paragraph">Some text for my page</p>
        </div>
      </Layout>
    )
  }
}