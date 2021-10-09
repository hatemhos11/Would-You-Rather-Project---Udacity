import React from 'react'
import { Redirect, Route } from 'react-router'
import { useSelector } from 'react-redux'

const Private = ({ component: Component, exact, path}) => {
  const user = useSelector((state) => state.LoginReducer.user)
  return (
    <Route 
      exact={exact}
      path={path}
      render={(props) =>
        user !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state:{
                from: props.location
              }
            }}
          />
        )
      }
    />
  )
}

export default Private
