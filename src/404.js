import React from 'react'
import {Redirect } from 'react-router';

const Error404 = (props) => {
  return (
    <div className='Page404' style={{padding:'40px'}}>
      <Redirect to='/404'/>

      <div className='P404'>
        404
      </div>
      <div className='ErrMsg'>
      NOT FOUND
      </div>
      <button onClick={() => props.history.push('/')} className='goBackBtn'>Go Home</button>
    </div>
  )
}

export default Error404
