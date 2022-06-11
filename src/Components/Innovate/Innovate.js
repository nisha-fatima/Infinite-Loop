import React from "react";
import img3 from "../../images/lunar.svg";
import img2 from "../../images/pending.svg";
import img1 from "../../images/staking.svg";
import img4 from "../../images/swap.svg";
import Classes from "./Innovate.module.css";

const Colors = [
    {
        id: 1,
        title: "iLoopSwap",
        img: img1,
        desc: "Zero commission swaps for token holders on our own hosted DEX. Easily swap between BNB, MATIC and other premium tokens.",
    },
    {
        id: 2,
        title: "$ILX",
        img: img2,
        desc: "Be on our whitelisted addresses for the Presale  & IDO. Our deflationary token isn’t only written to be a passive income earner for its holders, but also a durable and lasting investment, forming part of your portfolio",
    },
    {
        id: 3,
        title: "PancakeSwap DEX",
        img: img3,
        desc: "Automate all of your trades and rest easy on our hosted DEX server, utilizing some of the most innovative market features and extensive token directory.",
    },
    {
        id: 4,
        title: "Community Based Outreach ",
        img: img4,
        desc: "We treasure our community and will through a proposed DAO, initiate in our 4th quarter, a set of strong community based proposals to benefit our token holders and the charities they support.",
    },
];

const Innovate = () => {
    return (
        <div className={`${Classes.innovate_bg} text-white py-20`}>
            <div className="my-container">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-6 content-center items-center flex flex-col  lg:border-r-2 lg:border-b-0 border-b-2 border-white border-opacity-25">
                        <div data-aos="zoom-in" data-aos-duration="2000">
                            <h1
                                className={`${Classes.innovate_title} text-[2rem] md:text-[60px] font-bold md:leading-tight text-center lg:text-left`}
                            >
                                Proprietary Earning Potential In Perpetuity
                            </h1>
                            <p className="mt-10 text-[18px] font-bold text-white text-center lg:text-left px-4 lg:px-0">
                                <p className="mt-[15px] text-base font-bold text-white">
                                Holders of the deflationary $ILX token are eligible for staking and darling a lifetime of rewards on a daily basis.
                                </p>
                                <p className="mt-[15px] text-base font-bold text-white">
                                $ILX will be the primary native and utility token on our platform where we will seek to deliver the following services:
                                </p>
                                <p className="mt-[15px] text-base font-bold text-white">
                                    - iLoopSwap in our own hosted PancakeSwap DEX.
                                </p>
                                <p className="mt-[15px] text-base font-bold text-white">
                                    - Staking, Farms, LPs & Limit Orders
                                </p>
                                <p className="mt-[15px] text-base font-bold text-white mb-10 lg:mb-0">
                                    - Rewards, GameFi, NFT Marketplace
                                </p>
                                <p className="mt-[15px] text-base font-bold text-white mb-10 lg:mb-0">
                                    - Community & Charitable Outreach
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 content-center items-center">
                        <div className="grid grid-cols-1 gap-y-5 px-5 md:px-0 text-white">
                            {Colors.map((color) => (
                                <div
                                    key={color.id}
                                    className={`${Classes.innovateCard} m-auto h-auto px-5 md:px-0 rounded-3xl hover:rounded-3xl md:w-full md:m-0 py-4 md:py-6`}
                                    data-aos="zoom-in"
                                    data-aos-duration="2000"
                                >
                                    <div className=" md:px-6 ">
                                        <div className="flex items-center justify-around flex-row-reverse">
                                            <img
                                                className={`${Classes.innovate_img} text-center w-6 h-auto mr-1.5 road_img`}
                                                src={color.img}
                                                alt=""
                                            />
                                            <div>
                                                <h1 className="text-[20px] font-extrabold">
                                                    {color.title}
                                                </h1>
                                                <span className="2xl:text-2xl text-base">
                                                    {color.desc}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Innovate;
