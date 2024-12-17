import React from 'react'

function Pagination({page , handleNext , handlePrev}) {
  return (
    <div className="bg-blue-500 flex justify-center p-4 gap-5" >
        <div className='hover:cursor-pointer' onClick={
            handlePrev
        }><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-xl'>{page}</div>
        <div className='hover:cursor-pointer' onClick={handleNext}> <i class="fa-solid fa-arrow-right"></i> </div>
            
        
      
      
    </div>
  )
}

export default Pagination