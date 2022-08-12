import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='col-span-2 px-2 hidden mt-2 lg:inline'>
        {/* Search */}
        <div className='mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3'>
            <SearchIcon className='h-5 w-5 text-gray-400'/>
            <input type="text" placeholder='Search Twitter' className='flex-1 outline-none bg-transparent' />
        </div>

        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="ElvisGarramone"
  options={{height: 1000 }}
/>
    </div>
  )
}

export default Widgets