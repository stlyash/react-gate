import React from 'react'

const GateBanner = () => {
  return (
    <div>
        <div className="m-0 text-start" style={{borderBottom:"solid 1px grey"}}>
        <div className="row align-items-start p-2">
            <div className="col-2 gate-text m-0 fw-bold fs-4">
                GATE
            </div>
            <div className="col-10 fs-5">
                Graduate Aptitude Test in Engineering
            </div>
        </div>
        </div>
    </div>
  )
}

export default GateBanner