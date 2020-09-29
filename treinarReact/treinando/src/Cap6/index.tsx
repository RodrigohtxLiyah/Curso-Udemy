import React, { Component } from 'react'

import './styles.css'

export default function Babel() {
  let teste = [1, 2, 3].map(n => n + 2)

  return (
    <div>
      <h1>{teste}</h1>
    </div>
  )
}