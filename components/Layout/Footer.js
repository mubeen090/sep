import React from "react";
import LogoSkillGarage from "../../../public/assets/Logo.svg";
import Facebook from "../../../public/assets/Icon/facebook.svg";
import LinkedIn from "../../../public/assets/Icon/linkedin.svg";
import Instagram from "../../../public/assets/Icon/instagram.svg";

const Footer = () => {
  const handleLinkedInClick = () => {
    // Redirect to LinkedIn URL
    window.location.href = "https://www.linkedin.com/company/skillintern/";
  };

  const handleInstagramClick = () => {
    // Redirect to Instagram URL
    window.location.href = "https://instagram.com/skillintern?igshid=OGQ5ZDc2ODk2ZA==";
  };

  const handleDownloadClick = () => {
    // Redirect to Download URL
    window.location.href = "https://olelkx.on-app.in/app/home?orgCode=olelkx&referrer=utm_source=copy-link&utm_medium=tutor-app-referral";
  };

  const handleAboutUsClick = () => {
    // Redirect to About Us page
    // Replace with your actual route or URL
    // window.location.href = "/aboutus"; // Example for routing within the app
    window.location.href = "https://www.skillintern.com/"; // Example for an external URL
  };

  const handleJobsClick = () => {
    // Redirect to Jobs page
    // Replace with your actual route or URL
    // window.location.href = "/jobs"; // Example for routing within the app
    window.location.href = "https://forms.gle/JJvBDv28Ljo3Hgah6"; // Example for an external URL
  };

  const handleJobOpeningClick = () => {
    // Redirect to Job Openings page or Google Form
    // Replace with your actual route or URL
    // window.location.href = "/job-openings"; // Example for routing within the app
    window.location.href = "https://forms.gle/JJvBDv28Ljo3Hgah6"; // Example for a Google Form URL
  };

  const handleCampusAmbassadorClick = () => {
    // Redirect to Campus Ambassador page
    // Replace with your actual route or URL
    // window.location.href = "/campus-ambassador"; // Example for routing within the app
    window.location.href = "https://skillintern.com/campus-ambassador"; // Example for an external URL
  };

  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoSkillGarage className="h-6 w-auto mb-6" />

          <p className="mb-4">
            <strong className="font-medium">Skill Intern</strong> is a one-stop solution for all your college needs from learning skills to internships and placements.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <LinkedIn className="h-6 w-6 cursor-pointer" onClick={handleLinkedInClick} />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6 cursor-pointer" onClick={handleInstagramClick} />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Skill Intern
          </p>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all" onClick={handleDownloadClick}>
              Download
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all" onClick={handlePricingClick}>
              Pricing
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all" onClick={handleAboutUsClick}>
              Locations
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all" onClick={handleAboutUsClick}>
              Skill Intern ?
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all" onClick={handleAboutUsClick}>
              FAQ
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all" onClick={handleAboutUsClick}>
              Tutorials
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Jobs</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all" onClick={handleJobsClick}>
              Job Openings
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all" onClick={handleCampusAmbassadorClick}>
              Campus Ambassador
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
