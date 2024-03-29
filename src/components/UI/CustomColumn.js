import React from 'react';

export default function CustomColumn({ nutrition, value }) {
  return (
    <div className='grid pt-3 pl-5 grid-cols-2'>
      <p className='text-neutral-wenge-brown self-start'>{nutrition}</p>
      <p className='text-primary-nutmeg font-semibold justify-self-start'>{value}</p>
    </div>
  );
}
