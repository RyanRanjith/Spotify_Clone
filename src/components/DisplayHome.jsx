import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'

const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className="my-5 font-bold text-2xl">
     {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name}/>))}
    </div>
    </>

  )
}

export default DisplayHome
