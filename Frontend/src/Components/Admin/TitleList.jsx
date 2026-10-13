import React from 'react'

const TitleList = ({text1, text2}) => {
  return (
   <h1 className='font-medium text-3xl'>
        {text1}
        <span className='underline text-red-600 text-primary'>{text2}</span>
    </h1>
  )
}

export default TitleList

