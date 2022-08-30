import React from 'react'
import wallpaper from '../img/wallpaperflare.com_wallpaper.jpg';
// import { Outlet } from 'react-router-dom'

function Home() {
  let stl={
    width:'18rem'
  }
  return (
  <>
    {/* <div className={`text-${props.Mode==='light'? 'dark':'light'}`}>Home<Outlet /></div> */}
        <div className="container-fluid">
          <div className="row align-middle">
            <div className="col-md-6">

                <div className="card" style={stl}>
          <img src={wallpaper} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>

            </div>
          </div>

  </>
  )
}

export default Home