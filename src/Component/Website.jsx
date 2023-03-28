import React from "react";
import Websiteimg from "../images/images/money1.svg";
import Websiteimg1 from "../images/images/money2.svg";
import Websiteimg2 from "../images/images/money3.svg";

export default function Website() {
  return (
    <>
      <div className="webplans" id="websiteplan">
        <div className="webpalns2">
          <p className="webheading"> Website Plans</p>
          <div className="webboxes">
            <div className="box1">
              <div className="innerbox">
                {/* <img src={Websiteimg} width="150px" height="150px" /> */}
                <object type="image/svg+xml" aria-label="Websiteimg" data={Websiteimg} width="120px"></object>
                <p className="topics">Basic</p>
                <ul>
                  <li>Up to 5 pages</li>
                  <li>Mobile responsive design</li>
                  <li>Basic SEO optimization</li>
                  <li>Contact form</li>
                  <li>One time payment Rs.10,000</li>
                    
                </ul>
              </div>
            </div>
            <div className="box1">
              <div className="innerbox">
              <object type="image/svg+xml" aria-label="Websiteimg" data={Websiteimg1} width="120px"></object>
                {/* <img src={Websiteimg1} width="150px" height="150px" /> */}
                <p className="topics">Best</p>
                <ul>
                  <li>Up to 10 pages</li>
                  <li>Custom design</li>
                  <li>Advanced SEO optimization</li>
                  <li>Contact form</li>
                  <li>live chat</li>
                  <li>Social media integration</li>
                  <li>One time payment Rs.20,000</li> 
                </ul>
              </div>
            </div>
            <div className="box2">
              <div className="innerbox">
              <object type="image/svg+xml" aria-label="Websiteimg" data={Websiteimg2} width="120px"></object>
                {/* <img src={Websiteimg2} width="150px" height="150px" /> */}
                <p className="topics">Premium</p>
                <ul>
                  <li>Unlimited pages</li>
                  <li>Custom design with logo</li>
                  <li>Advanced SEO optimization with ongoing monitoring and reporting</li>
                  <li>Custom blog design and content creation</li>
                  <li>24/7 website monitoring and security</li>
                  <li>Social media integration</li>
                  <li>Live chat and unlimited bandwidth</li>
                  <li>One time payment Rs.1,50,000 with Rs.3000/month maintenance and support fee </li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
