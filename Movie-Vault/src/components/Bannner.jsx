import React from 'react'

function Banner() {
  return (
    <div className='h-20vh md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://th.bing.com/th/id/R.54a3122864faffd83798f808429e9ce0?rik=%2fxamNDznrzD80w&riu=http%3a%2f%2fmoviefail.com%2fwp-content%2fuploads%2f2012%2f05%2favengers-4.jpeg&ehk=AUMutxE%2fsMSL5vL3Mxxhk91UTsob%2bMTNY78I%2fxjlXac%3d&risl=&pid=ImgRaw&r=0)`}}>
      <div className='text-white text-2xl text-center w-full bg-blue-900/50'>Avengers Assemble</div>
    </div>
  )
}

export default Banner
