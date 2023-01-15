import React,{useState,useEffect} from 'react';
import axios from 'axios'

function Footer() {
  const[settings,set]=useState([]);
  async function getData() {
    try {
      const response = await axios.get('http://localhost:5000/settings');
      set(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    getData();
  },[])


  return (
    
<div className="text-left text-lg-start bg-dark text-muted">
  {settings.map((item)=>(
  <section className="">
  <div className="container text-left text-md-start mt-5 p-3">
    <div className="row mt-3">
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
          <i className="fas fa-gem me-3 text-secondary"></i>{item.cname}
        </h6>
        <p>
          {item.vision}
        </p>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
          Products
        </h6>
        <p>
          <a href="#!" className="text-reset">Meals</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Desserts</a>
        </p>
        <p>
          <a href="#!" className="text-reset">appetizers</a>
        </p>
      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
          Useful links
        </h6>
        <p>
          <a href="#!" className="text-reset">Fcebook</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Instagram</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Twitter</a>
        </p>

      </div>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i className="fas fa-home me-3 text-secondary"></i> {item.location}</p>
        <p>
          <i className="fas fa-envelope me-3 text-secondary"></i>
          {item.email}
        </p>
        <p><i className="fas fa-phone me-3 text-secondary"></i> {item.telephone}</p>
      </div>
    </div>
  </div>
</section> 
  ))}
</div>
  );
}

export default Footer;
