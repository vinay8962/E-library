 import React from 'react'
 import Layout from "./Layout/Layout";
 import '../Styles/About.css';
 import moduleName from '../Images/three.jpg'
 const About = () => {
   return (
     <>
      <Layout>
        <div>
          
        <div className="custom-shape-divider-bottom-1705340300">
    <img src={moduleName} alt="" />
</div>
        </div>
        <div className='about-section'>
      <h1 className='A-h1'>About E-library</h1>

      <div className='A-p'>
       <p>E-library is a product of Salt and Light Children Discipleship with the vision to provide an extensive library of books in digital format for free to every one around the world.
</p>
<br />
    <p>with  E-library you have access to all kind of educational, motivation and career book to keep you going in any areas
</p>
<br />
<p>Over this years, we are still going strong in our mission to provide a valuable service to readers. Junky Books has grown into a platform where self-publishing authors have the opportunity to introduce their work to our community.</p>
</div>
</div>
</Layout>
     </>
   )
 }
 
 export default About
 
 
 
