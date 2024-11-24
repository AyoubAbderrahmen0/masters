import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from "../images/logo.png"
import './Navb.css';

function Navb() {
  const etudiant = useSelector(state => state.EtudiantReducers.etudiant?.client);
  console.log(etudiant)
  const [displayPro , setSearch]=useState("")
  return (
    <div className="navbar">
        <Link to={"/home"} className="navbar-logo me-2">
        <img src={logo} alt='logo' style={{width:"60px" , height:"60px"}}  className='ms-4 me-2'/>
          <span className='fs-3'>posiMIND</span><span className='fs-6'>.com</span>
        </Link>
        <input
          v-model="searchQ"
          type="text"
          class="form-control"
          placeholder="What are you looking for?"
          onChange={(e)=>setSearch(e.target.value)}
          className='col-5 rounded-pill fs-5 py-2 ps-3'
        />
        <div className="navbar-menu">
          <Link to={"/home"} className="navbar-item navbar-links d-flex justify-content-center align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" className='me-2'>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>
            Accueil
          </Link>
          <div className="navbar-item navbar-links d-flex justify-content-center align-items-center">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ fill: 'white' , width:"25px" }} className='me-2'>
            <path d="M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"/>
            </svg>
            Ang */}
            Eng
            </div>
          {!etudiant?
         <Link to={"/signIn"} className="navbar-item navbar-links d-flex justify-content-center align-items-center">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: 'white' , width:"20px" }} className='me-2'>
           <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
         </svg>
         Sign in
       </Link>:null 
        }
          {!etudiant?
          <Link to={"/signUp"} className="navbar-item navbar-links me-4 d-flex justify-content-center align-items-center rounded-pill py-1 px-2" style={{backgroundColor:"#F28C28"}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: 'white' , width:"20px" }} className='me-2'>
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
          Sign up
        </Link>:null
        }
        {etudiant? <Link to={"/account"} className="navbar-item navbar-links d-flex justify-content-center align-items-center rounded-pill p-2" style={{backgroundColor:"#F28C28"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: 'white' , width:"18px" }} className='me-2'>
           <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
         </svg>
        Profile
        </Link>:null
        }
        </div>
    </div>
  )
}

export default Navb
