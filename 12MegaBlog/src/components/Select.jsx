import React,{useId} from 'react'

function Select({options,label,className="",...props},ref) {
    const id =useId();
  return (

    <div className='w-full'>
      {/* if label available add label */}
      {label && <label htmlFor={id} className=''></label>}
      <select 
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white
            Otext-black outline-none focus:bg-gray-50
            duration-200 border border-gray-200 w-full $
            {className}`}
      >
        {/* there is possibility that options may be empty so check that before loopoing */}
        {options && options.length > 0 && options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
