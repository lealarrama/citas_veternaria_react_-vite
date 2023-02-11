import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white font-bold text-center uppercase p-3 mb-3 rounded">
        <p> 
            {mensaje}
        </p>

    </div>
        
  )
}

export default Error
