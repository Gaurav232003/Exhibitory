import React from 'react'
import Sculpture from '../images/sculpture.png'
import {Data} from './Data'
import ContestTable from './ContestTable'

const Second = (props) => {
  return (
    <div class="container text-center">
  <div class="row secondpage-row">
  { Data.map((item) => (
    <>
    <div class={item.body}>
          <div class={item.class}>
              <img
                  src={item.image}
                  alt={item.alt}
                  className="second-sculpture1" />
              <span class="box-text">{item.title}</span>
          </div>
      </div><div class={item.t}>
              <h1 className='lcontest'>Upcoming Contests</h1>
              <ContestTable/>
          </div></>
    ))}
  </div>
</div>

  )
}

export default Second
