import React from "react"
import "./TTBFooter.css"

const TTBFooter = () => 
<footer className="page-footer font-small FooterColor pt-4 fontfortext">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase redfortext">T-Town Bounce</h5>
                <p className="bluefortext">All of our rentals are "for the day", so you can bounce and slide from morning 'til night. The prices listed with each item include delivery and setup to most areas in Northport and Tuscaloosa, an additional delivery fee may be added in some cases depending on your distance from us. Please give us a call with any questions 205-454-5120</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase redfortext">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#! " className="bluefortext">Link 1</a></li>
                    <li><a href="#!" className="bluefortext">Link 2</a></li>
                    <li><a href="#!" className="bluefortext">Link 3</a></li>
                    <li><a href="#!" className="bluefortext">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase redfortext">Links</h5>
                <ul className="list-unstyled ">
                    <li><a href="#!" className="bluefortext">Link 1</a></li>
                    <li><a href="#!" className="bluefortext">Link 2</a></li>
                    <li><a href="#!" className="bluefortext">Link 3</a></li>
                    <li><a href="#!" className="bluefortext">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 redfortext">2023 AMG©
    </div>

</footer>

export default TTBFooter;
