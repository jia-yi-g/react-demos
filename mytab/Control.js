function Control({jobs, setValue,value }) {
  return (
    <div className="btn-container">
      {jobs.map((item,index) => {
        return (
          <button
            className={`job-btn ${index==value && 'active-btn'}`}
            //在位于当前value时，使按钮样式变化
            onClick={() => {
              setValue(index);
            }}
            key={index}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}
export default Control