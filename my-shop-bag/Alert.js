import React, { useEffect } from 'react'

const Alert = ({al}) => {
  return (
    Boolean(al) && (
      <div className={ al <= 2 ? "alert alert-success" : "alert alert-danger"}>
        <p>
          {al == 1
            ? "Item added"
            : al == 2
            ? "Value Changed"
            : al == 3
            ? "cleard"
            : al==4
            ?'Item removed'
            :'please enter'}
        </p>
      </div>
    )
  );
}

export default Alert
//al==1?'Item added':al==2?'Value Changed':al==3?'cleard':'Item removed'
