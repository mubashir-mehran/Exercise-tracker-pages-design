import React from "react";
import "./progress.scss";
import FilterListIcon from '@mui/icons-material/FilterList';
import { motion } from "framer-motion"

function Progress() {
    const transition = {type: 'spring', duration : 3}
  return (
    <div>
          <div className="wrapper5">
            <motion.div
            initial={{left: '450px'}}
            whileInView={{left: '8px'}}
            transition ={{...transition, type: 'tween'}}
            >
            </motion.div>
        <h1>
            <FilterListIcon sx={{ fontSize: 40 }}/>
            Here Is Your Exercise Progress</h1>
            </div>
      <main className="main">
        <div className="card">
          <h2>Activity</h2>
          <h3>Name</h3>
          <h3>Description</h3>
          <h3>Duration</h3>
          <h3>Date</h3>
        </div>
        <div className="card">
          <h2>Activity</h2>
          <h3>Name</h3>
          <h3>Description</h3>
          <h3>Duration</h3>
          <h3>Date</h3>
        </div>
        <div className="card">
          <h2>Activity</h2>
          <h3>Name</h3>
          <h3>Description</h3>
          <h3>Duration</h3>
          <h3>Date</h3>
        </div>
        <div className="card">
          <h2>Activity</h2>
          <h3>Name</h3>
          <h3>Description</h3>
          <h3>Duration</h3>
          <h3>Date</h3>
        </div>
        <div className="card">
          <h2>Activity</h2>
          <h3>Name</h3>
          <h3>Description</h3>
          <h3>Duration</h3>
          <h3>Date</h3>
        </div>
        <div className="card">
          <h2>Activity</h2>
          <h3>Name</h3>
          <h3>Description</h3>
          <h3>Duration</h3>
          <h3>Date</h3>
        </div>
      </main>
    </div>
  );
}

export default Progress;
