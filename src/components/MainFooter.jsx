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
    <Footer container={true}>
  <div className="w-full">
    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      <div>
        <Footer.Brand
          href="#"
          src={Logo}
          alt="Logo"
          name="The best copy in town!"
        />
      </div>
      <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
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
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Link to="#">
          <img src={BsFacebook} alt="facebook"  className="h-8"/>
        </Link>
        <Link to="#">
          <img src={BsTwitter} alt="twitter" className="h-8" />
        </Link>
        <Link to="#">
          <img src={BsGithub} alt="github" className="h-8" />
        </Link>
        <Link to="#">
          <img src={BsInstagram} alt="instagram" className="h-8" />
        </Link>
      </div>
    </div>
  </div>
</Footer>
  )
}

export default MainFooter