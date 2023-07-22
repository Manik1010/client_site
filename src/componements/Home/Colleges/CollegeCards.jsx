import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
// import { useLoaderData } from "react-router-dom";

const CollegeCards = () => {
    // const colleges = useLoaderData();
    // console.log(colleges);
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch("collages.json")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setColleges(result);
            })
    }, [])
    // console.log(colleges);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    colleges?.map(collage => (
                        <CollegeCard
                            key={collage.id}
                            collage={collage}
                        ></CollegeCard>
                    ))
                }
            </div>
            
        </div>
    );
};

export default CollegeCards;