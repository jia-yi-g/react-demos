import React, { useState, useEffect } from "react";

function Jobs({ value, jobs }) {
  
  const {title,duties,dates,id,company}=jobs[value]||{}
  //没有加或的符号之前一直在报错，在Stack Overflow上找到的答案
  return (
    
      <div className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {
    duties&&duties.map((duty, index) => {
      //第一次页面渲染的时候，map的对象是undefined,进行判断
      return (
        <div className="job-desc">
          <p>{duty}</p>
        </div>
      );
    })
 } 
      </div>
      
   
  );
}
export default Jobs
// 