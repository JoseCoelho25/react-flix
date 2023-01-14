import React from 'react'
import {Footer} from "flowbite-react";
import BsInstagram from "../images/instagram.png";
import BsFacebook from "../images/facebook.png";
import BsTwitter from "../images/twitter.png";
import BsGithub from "../images/github.png";
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";

function MainFooter() {

 

  return (
    <Footer container={true} className="bg-hero pt-32">
  <div className="w-full">
    <div className="w-full lg:flex">
      <div className="flex w-1/3 lg:w-full mx-auto">
        <Footer.Brand
          href="#"
          src={Logo}
          alt="Logo"
          className="lg:pl-4 bg-black"
        />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 mt-4 lg:mt-0  md:gap-0 lg:w-1/2 ">
        <div>
          <Footer.Title title="about" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Reactflix
            </Footer.Link>
            <Footer.Link href="#">
              Contact Us
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Follow us" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Github
            </Footer.Link>
            <Footer.Link href="#">
              LinkedIn
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Legal" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </div>
    <Footer.Divider />
    <div className="w-full sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
        href="#"
        by="Reactflix™"
        year={2023}
      />
      <div className="mt-4 mr-10 flex space-x-4 lg:space-x-12 sm:mt-0 sm:justify-center pr-32">
        <Link to="#">
          <img src={BsFacebook} alt="facebook"  className="h-8 bg-white"/>
        </Link>
        <Link to="#">
          <img src={BsTwitter} alt="twitter" className="h-8 bg-white" />
        </Link>
        <Link to="#">
          <img src={BsGithub} alt="github" className="h-8 bg-white" />
        </Link>
        <Link to="#">
          <img src={BsInstagram} alt="instagram" className="h-8 bg-white" />
        </Link>
      </div>
    </div>
  </div>
</Footer>
  )
}

export default MainFooter