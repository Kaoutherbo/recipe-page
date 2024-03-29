import React from 'react'
import CustomColumn from './CustomColumn'
export default function nutrition() {
  return (
    <div className='text-smSize'>
      <h2 className='text-primary-nutmeg font-serif text-xl mb-4'>Nutrition</h2>
      <p className='text-neutral-wenge-brown mb-2'> The table below shows nutritional values per serving without the additional fillings.</p>
      <CustomColumn nutrition="Calories" value="277kcal"/>
      <hr className="mt-3"/>
      <CustomColumn nutrition="Carbs" value="0g"/>
      <hr className="mt-3"/>
      <CustomColumn nutrition="Protein" value="20g" />
      <hr className="mt-3"/>
      <CustomColumn nutrition="Fat" value="22g" />
    </div>
  )
}
