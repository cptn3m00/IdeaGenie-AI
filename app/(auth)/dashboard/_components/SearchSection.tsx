import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchSection=({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-violet-400 via-violet-600 to-purple-800 flex flex-col justify-center items-center text-white'>
        <h2 className='text-2xl font-bold'>Browse All Templates</h2>
        <p>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-4 w-[40%]'>
                <SearchIcon className='text-primary'/>
                <input type="text" placeholder='Search..'
                onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full outline-none text-black'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection
