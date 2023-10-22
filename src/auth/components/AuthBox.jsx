import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setToken,setCurrentUser } from '../../state/userSlide';
export default function AuthBox() {
    const dispatch = useDispatch();
  var user = useSelector((state) => state.user.current);
  const handleLogout = () => {
    dispatch(setCurrentUser({}));
    dispatch(setToken(''));
    localStorage.clear();
  };
  var myView =
    Object.keys(user).length === 0 ? (
      <span>
        <Link to="/register">
          <span className="icon-edit" /> Register
        </Link>{' '}
        <Link to="/login">
          <span className="icon-signin" /> Login
        </Link>{' '}
      </span>
    ) : (
      <span>
        <a href="#st">
          <span className="icon-user" /> {user.username}
        </a>{' '}
        <a onClick={handleLogout}>
          <span className="icon-signout" /> Logout
        </a>{' '}
      </span>
    );

  return <> 
  {myView}</>;
}
