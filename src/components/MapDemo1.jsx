import React from 'react'

export const MapDemo1 = () => {
    let Cars= ["audi","bmw","abcd","Merc","rr"]
  return (
    <div>
        <h1>MapDemo1</h1>
        {
            Cars.map((c)=>{
                return <h1>{c}</h1>
            })
        }
    </div>
    )
}
