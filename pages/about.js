import React from 'react'
import Link from 'next/link'
import Layout from "../layouts/main"

export default class extends React.Component {
  constructor (props) {
     super(props)
  }
  render() {
    return (
      <Layout title="About us">
        <div>
          <h2>About Us</h2>
          <p>Paragraph about us will go here maybe</p>
        </div>
      </Layout>
    )
  }
}