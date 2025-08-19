import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { authService, AuthService } from '../../appwrite/auth';
export default function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{dispatch(logout())})
    }
    return(
        <Button className = 'inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</Button>
    )
}