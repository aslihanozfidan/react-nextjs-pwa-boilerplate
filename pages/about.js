import React from 'react'
import Link from 'next/link'
import Layout from "../layouts/main"
import "../styles/about.scss";

export default class extends React.Component {
  constructor (props) {
     super(props)
  }
  render() {
    return (
      <Layout title="About us">
        <div>
          <h2 className="big-title">About Us</h2>
          <p className="paragraph">Paragraph about us will go here maybe</p>
        </div>
      </Layout>
    )
  }
}