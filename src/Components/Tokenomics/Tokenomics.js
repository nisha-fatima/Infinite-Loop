import React from "react";
import rocket from "../../images/road-map.svg";
import Image from "../../images/tokeno.svg";
import RoadMap from "../RoadMap/RoadMap";
import "./Tokenomics.css";

const Tokenomics = () => {
  return (
    <div className="bg-[#15051c] text-white py-20 road_map" id="tokenomics">
      <div className="my-container">
        <div className="grid grid-cols-12 gap-4 ">
          <div
            className="col-span-12 lg:col-span-6 content-center items-center flex order-last lg:order-first"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img src={require('../../assets/map.png')} alt="" />
          </div>
          <div className="col-span-12 lg:col-span-6 content-center items-center flex">
            <div
              className="space-y-4 w-full lg:w-3/4"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <h1 className="text-[30px] md:text-[54px] text-center lg:text-left font-bold">
                Tokenomics
              </h1>
              {/* <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                $ILX is a deflationary token.
              </p> */}
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                Token Name: ILX <br />
                Mainnet: Binance Smart Chain <br />
                Total Supply: 142,000,000 <br />

              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                40% Liquidity locked
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                34% Staking/Rewards
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                10% IDO/DXSale
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                10% Presale
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                9% Ecosystem
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                7% Team
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                2% Airdrop
              </p>

            </div>
          </div>
        </div>
      </div>
      <RoadMap />
      <img className="road_map_img" src={rocket} alt="" />
    </div>
  );
};

export default Tokenomics;
