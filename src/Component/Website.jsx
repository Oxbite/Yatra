import React from "react";
import Websiteimg from "../images/images/money1.svg";
import Websiteimg1 from "../images/images/money2.svg";
import Websiteimg2 from "../images/images/money3.svg";

export default function Website() {
  return (
    <>
      <div className="webplans" id="websiteplan">
        <div className="webpalns2">
          <h1 className="webheading"> Website Plans</h1>
          <div className="webboxes">
            <div className="planBox">
              <object type="image/svg+xml" aria-label="pcImage" data={Websiteimg} width="200px"></object>
              <h2>Basic</h2>
              <h3 className="price">NPR.8,000+</h3>
              <br />
              <p>Company landing page with </p>
              <p>social media integration and</p>
              <p>upto 500MB hosting storage</p>  
              <br />
              <input type="button" value="Join Now" className="btnn"/>
            </div>

            <div className="contline"></div>

            <div  className="planBox">
              <object type="image/svg+xml" aria-label="pcImage" data={Websiteimg1} width="200px"></object>
              <h2>Advanced</h2>
              <h3 className="price">NPR.20,000+</h3>
              <br />
              <p>Webpage with content management</p>
              <p>and social media integration</p>
              <p>upto 5GB hosting storage.</p> 
              <br />
              <input type="button" value="Join Now" className="btnn"/>
            </div>

            <div className="contline"></div>

            <div  className="planBox">
              <object type="image/svg+xml" aria-label="pcImage" data={Websiteimg2} width="200px"></object>
              <h2>Premium</h2>
              <h3 className="price">NPR.1,00,000+</h3>
              <br />
              <p>E-commerce functionality</p>
              <p>unlimited hosting storage.</p>
              <p>6 months free maintenance</p> 
              <br />
              <input type="button" value="Join Now" className="btnn"/>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
