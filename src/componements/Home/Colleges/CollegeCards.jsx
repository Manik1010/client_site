import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
// import { useLoaderData } from "react-router-dom";

const CollegeCards = () => {
    // const colleges = useLoaderData();
    // console.log(colleges);
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/collageview")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setColleges(result);
            })
    }, [])
    // console.log(colleges);
    return (
        <div>
            <div className="mx-auto text-center md:w-4/12 my-8">
                <p className="text-yellow-600 uppercase mb-2">...Most Populer Collage in BD...</p>
                <h3 className="text-3xl  border-y-4"> Top 3 Collages </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    colleges?.map(collage => (
                        <CollegeCard
                            key={collage._id}
                            collage={collage}
                        ></CollegeCard>
                    ))
                }
            </div>
            
        </div>
    );
};

export default CollegeCards;