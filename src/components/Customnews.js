import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Customnews extends Component {
  render() {
    return (
      <>
        <div className='container d-flex justify-content-center' style={{ height: "50px",overflow:"auto" }} >
          <div className="d-flex ">
              <Link to='/sport' className="mx-4 my-2 btn btn-outline-light">Sports</Link>
              <Link to='/science' className="mx-4 my-2 btn btn btn-outline-light" aria-pressed="true">Science</Link>
              <Link to='/business' className="mx-4 my-2 btn btn btn-outline-light">Business</Link>
              <Link to='/technology' className="mx-4 my-2 btn btn btn-outline-light">Technology</Link>
              <Link to='/entertainment' className="mx-4 my-2 btn btn-outline-light">Entertainment</Link>
              <Link to='/health' className="mx-4 my-2 btn btn-outline-ligh">Health</Link>
            </div>
        </div>
      </>
    )
  }
}

export default Customnews
