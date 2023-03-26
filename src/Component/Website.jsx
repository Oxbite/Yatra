import React from "react";
import Websiteimg from "../images/images/money1.png";
import Websiteimg1 from "../images/images/money2.png";
import Websiteimg2 from "../images/images/money3.png";

export default function Website() {
  return (
    <>
      <div className="webplans" id="websiteplan">
        <div className="webpalns2">
          <p className="webheading"> Website Plans</p>
          <div className="webboxes">
            <div className="box1">
              <div className="innerbox">
                <img src={Websiteimg} width="150px" height="150px" />
                <p className="topics">Basic</p>
                <p>
                  poor poor poor poor poor poor poor poor poor poor poor poor
                  poor poor poor poor poor poor
                </p>
              </div>
            </div>
            <div className="box1">
              <div className="innerbox">
                <img src={Websiteimg1} width="150px" height="150px" />
                <p className="topics">Best</p>
                <p>
                  poor poor poor poor poor poor poor poor poor poor poor poor
                  poor poor poor poor poor poor
                </p>
              </div>
            </div>
            <div className="box2">
              <div className="innerbox">
                <img src={Websiteimg2} width="150px" height="150px" />
                <p className="topics">Premium</p>
                <p>
                  poor poor poor poor poor poor poor poor poor poor poor poor
                  poor poor poor poor poor poor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
