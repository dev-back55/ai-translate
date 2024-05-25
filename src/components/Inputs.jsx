"use client";
import React from 'react'


export default function Inputypes() {
  return (

    <div className='flex flex-col justify-center items-center mt-5 gap-4'>
        Input Types
        <label for="name">Name: Type Text</label>
        <input type="text" id="name" name="name" className='text-black border-red-950'/>

        <label for="quantity">Quantity: Type Number</label>
        <input type="number" id="quantity" name="quantity" min="1" max="10000" className='text-black border-red-950'/>

        <label for="quantity">Type Number: Input Mode numeric</label>
        <input type="number" inputMode='numeric' id="quanti" name="quanti" min="1" max="10000" className='text-black border-red-950'/>
    </div>
  )
}
