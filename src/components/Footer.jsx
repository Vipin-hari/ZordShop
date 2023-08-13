import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
      <div className="footer" id="footer">

        <div className="sb-footer section-padding">
            <div className="sb__footer-links">
                
                <div className="sb__footer-links-div">
                    <h4>Partners</h4>
                    <a href="#">
                        <p>Metazord</p>
                    </a>
                </div>
                <div className="sb__footer-links-div">
                    <h4>Company</h4>
                    <a href="#about">
                        <p>About</p>
                    </a>
                    <a href="#content">
                        <p>Join</p>
                    </a>
                    {/* <a href="#">
                        <p>Career</p>
                    </a>
                    <a href="#">
                        <p>Contact</p>
                    </a> */}
                </div>
                <div className="sb__footer-links-div">
                    <h4>Know about</h4>
                    <div className="knowabout">
                          <a href="https://medium.com/bartersmartplace/decentralized-e-commerce-the-future-or-the-new-norm-be31c5162f03#:~:text=Decentralized%20Commerce%20(DeCo)%20allows%20users,can%20also%20block%20the%20transactions." target='_blank' rel="noreferrer"
                              style={{
                                // font: "Arial",
                              }}
                          > <p>e-commerce website</p></a>
                      </div>
                      <div className="knowabout">
                          < a href='https://medium.com/blockchain'
                              style={{
                                font: "Arial",
                              }}> <p>Blockchain</p></a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                    </p>
                </div>
                {/* <div className="sb__footer-below-links">
                    <a href="#"><div><p>Terms & Conditions</p></div></a>
                    <a href="#"><div><p>Privacy</p></div></a>
                    <a href="#"><div><p>Security</p></div></a>
                    <a href="#"><div><p>Cookie Declaration</p></div></a>
                    
                </div> */}
            </div>
        </div>
    </div>
)
};
