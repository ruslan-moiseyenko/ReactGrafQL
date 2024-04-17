import React from 'react'
import { Counter } from '../Counter/Counter'
import { List } from '../List/index.tsx'
import { ListWithDelayedLoad } from '../ListWithDelayedLoad/ListWithDelayedLoad.tsx'

export const Pet = () => {
  return (
    <div>
      <h2>Pet Details</h2>
      <p>Name: Fido</p>
      <p>Species: Dog</p>
      <p>Age: 5</p>
      <Counter />
      <List />
      <ListWithDelayedLoad />
    </div>
  )
}