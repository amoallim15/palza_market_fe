import React, { useState} from 'react';
import HubPage1 from "./HubPage1__1"
import HubPage2 from "./HubPage1__2"

const HubTab = () => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div className="">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl mb-8 font-bold mt-8 text-center">창업 허브</h2>
                <ul className="lg:grid lg:grid-cols-2 leading-10 my-4 text-center hidden">
                    <li className={
                        "text-md " + (openTab === 1 ? "border-b-2 border-black" : "border-b-2 border-gray-300")
                        }>
                        <a className={
                            "block cursor-pointer " + (openTab === 1 ? "font-bold" : "text-gray-800")}
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                        data-goggle = "tab"
                        herf = "#link1"
                        role = "tablist">
                            프랜차이즈 창업
                        </a>
                    </li>
                    <li className={
                        "text-md " + (openTab === 2 ? "border-b-2 border-black" : "border-b-2 border-gray-300")
                        }>
                        <a className={
                            "block cursor-pointer " + (openTab === 2 ? "font-bold" : "text-gray-800")}
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                        data-goggle = "tab"
                        herf = "#link1"
                        role = "tablist">
                            팔자 매거진
                        </a>
                    </li>
                </ul>
                <div>
                    <div className="">
                        <div className={openTab === 1?"block" : "hidden"} id="link1">
                        <HubPage1 />
                        </div>
                        <div className={openTab === 2?"block" : "hidden"} id="link2">
                            <HubPage2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HubTab;