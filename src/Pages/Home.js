import React from 'react'
import Layout from '../components/Layout'
import {Link} from "react-router-dom"
import Banner from "./../Images/banner.jpeg.jpeg"
import '../../src/styles/HomeStyle.css';


const Home = () => {
  return (
    <Layout>
       <div className="home" style={{backgroundImage:`url(${Banner})`}} >
        <div className='headerContainer'>
          <h1>Chappan Dukan (56 Shop)</h1>
          <p>Best Food In Indore</p>
          <Link to ="/menu">
          <button>
            ORDER NOW
          </button>
          </Link>
        </div>


       </div>
        </Layout>
  )
}

export default Home