import { useEffect, useState } from "react";
import Paper from "./Paper";

const Papers = () => {

    const [papers, setPapers] = useState([]);

    useEffect(() => {
        fetch("papers.json")
            .then(res => res.json())
            .then(result => {
                setPapers(result);
            })
    }, [])
    console.log(papers);

    return (
        <div>
            <div>
                <h1 className="text-3xl text-center font-bold p-24">All Papers Are Here...</h1>
                <div className="mt-[-100px]"
                >
                    {
                        papers?.map(paper => (
                            <Paper
                                key={paper.id}
                                paper={paper}
                            ></Paper>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Papers;