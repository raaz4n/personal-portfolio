import React from 'react'

function Filter({activeTag, handleTag, tagList}) {
  return (
    <div className='w-[100%] flex flex-wrap flex-row justify-between'>
        {tagList.map((tag, i) => (
            <div onClick={() => handleTag(tag)} 
             className={`py-1 px-4 cursor-pointer rounded-lg hover:bg-(--ic) hover:text-(--tcl1)
             ${activeTag == tag ? 'bg-(--nxt-bg) text-(--nxt-clr) border border-red-500' : 'bg-(--tcl3)'}`}
             key={i}>
                {tag}
            </div>
        ))}
    </div>
  )
}

export default Filter