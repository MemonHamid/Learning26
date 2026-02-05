import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {
    const movieName =useParams().name
  return (
    <div>
        <h1>
            <h1>WATCHING.....{movieName}</h1>
        </h1>
    </div>
  )
}
