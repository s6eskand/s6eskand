import React, { useEffect, useState } from 'react';

function Verify() {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);

    const createFunction = () => {
        const { codeSolution } = JSON.parse(localStorage.getItem("game"));
        const solutionFn = new Function("nums", "target", codeSolution);
        solutionFn("test", "test");
    }

    useEffect(() => {
        setLoading(true);
        createFunction();
        setLoading(false);
    }, [])

    return (
        <p>{loading ? "Loading..." : "done"}</p>
    )
}

export default Verify;