import React from 'react'

function Banner() {
  return (
    <div className='h-20vh md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://www.geekish.nl/wp-content/uploads/2022/03/the-batman-banner2.jpg)`}}>
      <div className='text-white text-2xl text-center w-full bg-blue-900/50'>Avengers Assemble</div>
    </div>
  )
}

export default Banner
