import React from 'react'
import Layout from './Layout/Layout';
import Author from './Author';
import AboutSection from './AboutSection';
import Latestbook from './Latestbook'; 
import Homeslider from './Homeslider';

 
 
const Home = () => {
  return (
    <div>
      <Layout>
       <Homeslider></Homeslider>
       
  <Latestbook></Latestbook>
 <AboutSection></AboutSection> 
<Author></Author>
 

 
 {/* <Slider/> */}

 </Layout>
       </div>
  )
}

export default Home
