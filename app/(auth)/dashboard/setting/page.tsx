import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function setting() {
  return (
    <div className='flex items-center justify-center h-full'>
      <UserProfile routing="hash"/>
    </div>
  )
}

export default setting
