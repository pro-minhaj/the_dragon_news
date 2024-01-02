import { useState } from "react";
import New_Detalis_Content from "../New_Detalis_Content/New_Detalis_Content";
import { useLoaderData } from "react-router-dom";

const Main_Content = () => {
    const newsData = useLoaderData();

    return (
        <div>
            <h2 className="text-dark fs-5 fw-semibold font-family-Poppins m-0 px-3 py-2">Dragon News Home</h2>
            <div className="d-flex flex-column gap-4 my-3">
                {
                    newsData.map(news => <New_Detalis_Content key={news._id} news={news}></New_Detalis_Content>)
                }
            </div>
        </div>
    );
};

export default Main_Content;