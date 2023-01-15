import React from 'react'
import Headertwo from './Header2';
import Footer from '../components/Footer'
import { Jumbotron, Container,Row, Col } from 'react-bootstrap';
import Contact from '../components/Contact';
import "../styles/about.css";

function AdminAbout() {
  const url = "https://mccormick.widen.net/content/qvxeigxwtq/original/christmas_turkey_637390546118030666_800x800.jpg";
  return (
      <>
      <Headertwo />
      <section className="about__page-section m-4">
        <Container> 
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={url} alt="" className="w-100 rounded-3" style={{height: '50vh'}}/>
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Delicious and Nutritious: A Guide to Recipe Business Success
                </h2>

                <p className="section__description">
                Welcome to Delicious and Nutritious, your go-to source for healthy and tasty recipes! Our team of expert chefs and nutritionists have created a variety of dishes to suit all palates and dietary needs. Whether you're looking to lose weight, build muscle, or just eat healthier, we've got something for you. Our recipes are easy to follow and use fresh, whole ingredients to maximize flavor and nutrition. We also offer meal planning and catering services to help you reach your goals. Follow us for weekly recipe updates and check out our blog for cooking tips and nutrition advice. Thanks for choosing Delicious and Nutritious for your recipe needs!
                </p>

                <p className="section__description">
                At Delicious and Nutritious, we believe that eating healthy should be easy and enjoyable. That's why we've developed a wide range of recipes that cater to different dietary preferences and lifestyles. Our vegetarian, vegan, and gluten-free options are perfect for those looking to eliminate certain food groups from their diet. We also have low-carb and keto recipes for those following a specific weight loss plan. And for those who love to cook, we have gourmet recipes that are sure to impress your friends and family. No matter what your goals are, we have a recipe to suit you. So why wait? Start cooking with Delicious and Nutritious today and discover a world of tasty and healthy meals!
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Contact/>
      <Footer />
      </>
  )
}

export default AdminAbout
