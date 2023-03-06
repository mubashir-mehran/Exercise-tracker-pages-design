import React from 'react'
import "./signup.scss"
import { motion } from "framer-motion"
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';


function Signup() {
  const transition = {type: 'spring', duration : 3}
  return (
    <div className='main'>
     
      <form className='form'
        // onSubmit={handleSubmit}
        method="POST"
      >
         <div className="wrapper">
          <motion.div
          initial={{left: '150px'}}
          whileInView={{left: '8px'}}
          transition ={{...transition, type: 'tween'}}
          >
          </motion.div>
          <h2>The Fit Club..!</h2>
        </div>
        
        <h4 className='heading'>
        <PersonAddAltSharpIcon sx={{ fontSize: 40 }} />
          SIGN UP
        </h4>
        
        <input className='inputs'

        //   onChange={handleChange}

          id="name"
          name="name"
          type="text"
        //   value={name}
          placeholder="Enter your name"
          required
        />
        <input className='inputs'
         
        //   onChange={handleChange}
          id="email"
          name="email"
          type="email"
        //   value={email}
          placeholder="Enter your email"
          autoComplete="email"
          required
        />
        <input className='inputs'
        
        //   onChange={handleChange}
          id="password"
          name="password"
          type="password"
        //   value={password}
          autoComplete="current-password"
          placeholder="Enter your password"
          required
        />
        <span style={{display:'flex',justifyContent:'center', flexDirection:'column', alignItems: 'center'}}>
        <input className='button'
          
          type="submit"
          value={"CREATE ACCOUNT"}
        />
        <p className='login'>Already have an account? Sign-in</p>
        </span>
      </form>
    </div>
  )
}

export default Signup
