import "./Airdop.css";
import React from "react";

import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const Airdop = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="2000"
      id="airdop"
      className="app-trade__itemss RoadMap_Card__A5iGA m-auto h-auto rounded-3xl hover:rounded-3xl w-72 md:w-full md:m-0 py-4 md:py-6 relative misc"
      style={{ textAlign: "center", marginTop: "80px", marginRight: "113.82px" }}
    >
      <h3
        className="text-center-airdrop text-[54px]-airdrop text-white-airdrop font-bold-airdrop"
        style={{ fontSize: "30px" }}
      >
        iLoopSwap Mega Drop Airdrop Offer
      </h3>
      <p
        style={{
          marginBottom: "15px",
          color: "rgb(255, 255, 255)",
     
        }}
        className="text-base text-white"
      >
        Offer Starts on May the 30th, 2022 and ends June 30th, 2022
      </p>

      <div className="calander-main-wrapper">
        <div className="date-wrapper">
          <span>
            <h5 className="text-base text-white">0</h5>
            <p className="text-base text-white">Days</p>
          </span>
          <span>
            <h5 className="text-base text-white">0</h5>
            <p className="text-base text-white">Hours</p>
          </span>
          <span>
            <h5 className="text-base text-white">0</h5>
            <p className="text-base text-white">Minutes</p>
          </span>
          <span>
            <h5 className="text-base text-white">0</h5>
            <p className="text-base text-white">Seconds</p>
          </span>
        </div>
      </div>

      <div className="rounded-full mr-2 hidden bg-purple-600 lg:block nav_btn misc-airdop text-base text-white">
        Claim AirDrop
      </div>

      <p style={{ margin: "1em 0" }}>
        <ul>
          <li style={{ textAlign: "center" }} className="text-base text-white">
            Follow all Social Media and Claim 1,000s of Tokens in Reward
          </li>
          <li style={{ textAlign: "center" }} className="text-base text-white">
            + Invite and Earn a Token when your invited guest claims bounty
            reward.
          </li>
        </ul>
      </p>

      <div className="social-icons-wrapper">
        <a
          href="https://t.me/infiniteLoop2022"
          target="_blank"
          rel="noreferrer"
        >
          <FaPaperPlane style={{ fontSize: "1.5rem" }}> </FaPaperPlane>
        </a>
        &nbsp;&nbsp;
        <a
          href="https://twitter.com/infinit90807152"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter style={{ fontSize: "2.5rem" }}></AiOutlineTwitter>
        </a>
        &nbsp;&nbsp;
        <a
          href="https://discord.gg/SvAQBYGU6p"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord style={{ fontSize: "2.5rem" }}></FaDiscord>
        </a>
        &nbsp;&nbsp;
      </div>
    </section>
  );
};
export default Airdop;
