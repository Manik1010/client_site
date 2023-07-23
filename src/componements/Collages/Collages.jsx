import { useEffect, useState } from "react";
import AllCollage from "./AllCollage";

const Collages = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/collages")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setColleges(result);
            })
    }, [])

    return (
        <div>
            <div className="mx-auto text-center md:w-4/12">
                <p className="text-yellow-600 uppercase mb-2">...Some Event of...</p>
                <h3 className="text-3xl  border-y-4"> All Collage </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    colleges?.map(collage => (
                        <AllCollage
                            key={collage._id}
                            collage={collage}
                        ></AllCollage>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Collages;