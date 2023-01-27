import React from 'react'

const Loading = () => {
  return (
    <div>
      <button type="button" className="bg-green" disabled>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Loading. . .
      </button>
    </div>
  )
}

export default Loading