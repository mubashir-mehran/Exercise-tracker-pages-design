import React from "react";
import "./activity.scss";
import { motion } from "framer-motion"
import StartIcon from '@mui/icons-material/Start';

function Activity() {
    const transition = {type: 'spring', duration : 3}
  return (
    <div className="main">
      <form
        className="activity"
        // onSubmit={handleSubmit}
        method="POST"
      >
         <div className="wrapper1">
            <motion.div
            initial={{left: '150px'}}
            whileInView={{left: '8px'}}
            transition ={{...transition, type: 'tween'}}
            >
            </motion.div>
            <h2>The Fit Club..!</h2>
          </div>
        <h4 className="heading4">
            <StartIcon sx={{ fontSize: 40 }}/>
            Start Your Exercise Activity</h4>
        <label for="fname">Name:</label>
        <input
          //   onChange={handleChange}
          id="name"
          name="name"
          //   value={name}
          type="text"
          placeholder="Enter your name"
          required
        />
        <label for="fname">Description:</label>
        <input
          //   onChange={handleChange}
          id="desc"
          name="desc"
          //   value={desc}
          type="text"
          placeholder="Description"
          required
        />
        <label for="exercises">Choose Exercise Activity:</label>
        <select name="exercises" id="exercises">
          <option value="running">Running</option>
          <option value="bicycle">Cycling</option>
          <option value="ridding">Ridding</option>
          <option value="swimming">Swimming</option>
          <option value="walking">Walking</option>
          <option value="hiking">Hiking</option>
        </select>

        <label for="fname">Duration:</label>
        <input type="number" id="number" name="number" required />
        <label for="fname">Date:</label>
        <input type="date" id="date" name="date" required />
        <input className="start"

          type="submit"
          value={"START"}
        />
      </form>
    </div>
  );
}

export default Activity;
