import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeUser } from '../store/authSlice'

export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
dispatch((removeUser()))
navigate('/')

    },[dispatch, navigate]);
  return (
    <div>
      
    </div>
  );
}
