import { AccordionItem, AccordionWrapper } from "custom-react-accordion";
import "custom-react-accordion/dist/Accordion.css";
import React from "react";
import "./According.css";


const faqs = [
    {
        id: 1,
        question: "How To Buy $ILX? ",
        answer: "Add $ILX to your MetaMask Wallet and use the Donation form in our homepage.",
    },
    {
        id: 2,
        question:
            "Why support our project?",
        answer: "Our project aims to provide long term passive income for its HODLers and investors. This becomes especially valuable for all our early adopters and investors. We are here for the long haul and not your typical get-rich-quick scheme.",
    },
    {
        id: 3,
        question: "What happens after our IDO?",
        answer: "After IDO, we go straight to working on the Q2 items of our roadmap as we will have to hit the ground running to be able to meet the items enumerated there.",
    },
    {
        id: 4,
        question: "What passive income strategies are being planned?",
        answer: " We have more than one investment proposals and strategies for our investors as available options for passive income and long term investors. See our Whitepaper for more details.",
    },
    {
        id: 5,
        question: "What are the guarantees this won’t be another scam or rug pull scenario?",
        answer: "As stated above, this is an incremental, long term investment platform that doesn’t promise overnight wealth but instead, a long term passive income opportunity that can act to safeguard your retirement without risking your current financial stimulation.",
    },
    {
        id: 6,
        question: "If I invest $100 equivalent today, what is the least compound interest I will acquire in a 30 day span?",
        answer: " In 30 days you will have compounded at least 15% should your initial investment be $100’or above. See Whitepaper for details",
    }
];

const According = () => {
    return (
        <div className="bg-[#1D0B25]" id="faq">
            <div className=" md:py-16">
                <h1 className="px-10 py-10 text-3xl md:text-5xl font-bold text-white text-center">
                    Frequently Asked Questions
                </h1>
                <p className="px-5 text-slate-400 font-bold text-center md:text-xl md:px-28">
                    Prepared below are some frequently asked questions about our
                    project. Feel free to drop a message in our Telegram group
                    if you still have doubts
                </p>
                <div
                    id="faqContainer"
                    className="continer md:px-16 py-16 mb-36"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                >
                    <AccordionWrapper>
                        {faqs.map((item, index) => (
                            <AccordionItem
                                key={index}
                                index={index}
                                title={item.question}
                                description={item.answer}
                            />
                        ))}
                    </AccordionWrapper>
                </div>
            </div>
        </div>
    );
};

export default According;
