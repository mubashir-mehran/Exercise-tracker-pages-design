import React from 'react'
import { motion } from "framer-motion"
import LoginIcon from '@mui/icons-material/Login';
import "./signin.scss"

function Signin() {
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
          <LoginIcon sx={{ fontSize: 40 }} />
            LOG-IN TO YOUR ACCOUNT
          </h4>

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
          {/* <span style={{display:'flex', alignItems:'center'}}>
            <p>Forget password?</p>
          </span> */}
          <p style={{display:'flex'}}>
             Forget password?</p>
          <span style={{display:'flex',justifyContent:'center', flexDirection:'column', alignItems: 'center'}}>
          <input className='button1'
            
            type="submit"
            value={"SIGN IN"}
          />
          <p className='login'>Don't have an account? Sign-up</p>
          </span>
        </form>
      </div>
    )
}

export default Signin
