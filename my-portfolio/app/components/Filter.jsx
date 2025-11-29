import React from 'react'

function Filter({activeTag, handleTag, tagList}) {
  return (
    <div className='w-[60%] flex flex-row justify-between'>
        {tagList.map((tag, i) => (
            <div onClick={() => handleTag(tag)} 
             className={`py-1 px-4 cursor-pointer rounded-lg hover:bg-(--ic) hover:text-(--tcl1)
             ${activeTag == tag ? 'bg-(--nxt-bg) text-(--nxt-clr)' : 'bg-(--tcl3)'}`}
             key={i}>
                {tag}
            </div>
        ))}
    </div>
  )
}

export default Filter