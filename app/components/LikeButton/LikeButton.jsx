'use client'
import { useState } from 'react'
import './LikeButton.css'

function LikeButton ({ id }) {
  const [liked, setLiked] = useState(false)
  return (
    <button className='button' onClick={() => { setLiked(!liked) }}>
      {liked ? '♥' : '♡'}
    </button>
  )
}

export default LikeButton
