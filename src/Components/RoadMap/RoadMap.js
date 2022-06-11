import React from "react";
import img1 from "../../images/roadmap/svgviewer-output-1.svg";
import img2 from "../../images/roadmap/svgviewer-output-2.svg";
import img3 from "../../images/roadmap/svgviewer-output-3.svg";
import img4 from "../../images/roadmap/svgviewer-output-4.svg";
import Classes from "./RoadMap.module.css";
import Discalimer from "../Discalimer/Discalimer";
import ReferralProgram from "../ReferralProgram/ReferralProgram"
import Airdop from '../Airdop/Airdop';
import JoinPresale from '../JoinPresale/JoinPresale'
const Colors = [
    {
        id: 1,
        title: "Q2",
        members: "10,000 Community Members",
        img: img1,
        desc: "Presales/IDO Launch, Site Launch",
    },
    {
        id: 2,
        title: "Q3",
        members: "50,000 Community Members",
        img: img2,
        desc: "Native token ($ILX) Listed in CoinGecko/CoinMarketCap, Staking, Swapping, ROI Dapp Launch",
    },
    {
        id: 3,
        title: "Q4",
        members: " 100,000 Community members.",
        img: img3,
        desc: "iLoop NFT Launch, iLoop Market Place Announcement/launch",
    }
];

const RoadMap = () => {
    return (
        <div className="py-20 relative z-[4]" id="road">
            <div className="my-container">
                <div>
                    <h1 className="text-center text-[54px] text-white font-bold">
                        Roadmap
                    </h1>
                    <p className="text-center text-[20px] text-[#a7a1aa] font-bold">
                        Join ILX on our journey to the moon!
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-6 gap-y-16 text-white">
                    {Colors.map((color) => (
                        <div
                            key={color.id}
                            className={`${Classes.Card} p-2 m-auto h-auto rounded-3xl hover:rounded-3xl w-72 md:w-full md:m-0 py-4 md:py-6 relative`}
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                        >
                            <div className=" md:px-6 ">
                                <div className="flex items-center justify-around">
                                    <img
                                        className={`${Classes.road_img} text-center w-6 h-auto mr-1.5 road_img`}
                                        src={color.img}
                                        alt=""
                                    />
                                    <div>
                                        <h1 className="text-[20px] font-extrabold">
                                            {color.title}
                                        </h1>
                                        <h3 className="font-bold">{color.members}</h3>
                                    </div>
                                </div>
                            </div>
                            <h3 className="md:text-left text-center text-base md:text-2xl px-4 md:px-6 mt-6 md:mt-8 font-semibold">
                                <span className="2xl:text-2xl text-base">
                                    {color.desc}
                                </span>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            <JoinPresale></JoinPresale>
            <Airdop></Airdop>
            <ReferralProgram></ReferralProgram>
            {/* <JoinPresale></JoinPresale>
            <Airdop></Airdop>
            <ReferralProgram></ReferralProgram> */}
        </div>
    );
};

export default RoadMap;
