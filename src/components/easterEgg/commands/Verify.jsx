import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

const testCases = [
    {
        nums: [2,7,11,15],
        target: 9,
        expected: [0,1]
    },
    {
        nums: [3,2,4],
        target: 6,
        expected: [1,2]
    },
    {
        nums: [3,3],
        target: 6,
        expected: [0,1]
    },
    {
        nums: [],
        target: 10,
        expected: []
    }
]

function Verify() {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(0);
    const history = useHistory();

    const createFunction = () => {
        const { codeSolution } = JSON.parse(localStorage.getItem("game"));
        if (codeSolution.includes("window") || codeSolution.includes("localStorage")) {
            return new Function("nums", "target", "console.log(\"nice try\");")
        }
        return new Function("nums", "target", codeSolution);
    }

    const verify = (actual, expected) => {
        if (!actual) {
            return false;
        }
        if (!Array.isArray(actual)) {
            return false;
        }
        if (actual.length !== expected.length) {
            return false;
        }
        if (actual.length === 0 && expected.length === 0) {
            return true;
        }
        if ((actual[0] !== expected[0] || actual[1] !== expected[1]) && (actual[0] !== expected[1] || actual[1] !== expected[0])) {
            return false;
        }
        return true;
    }

    const runTestCases = () => {
        const solutionFn = createFunction();
        let fails = 0;
        testCases.forEach((test) => {
            const actual = solutionFn(test.nums, test.target);
            const pass = verify(actual, test.expected);
            if (!pass) fails++;
        })
        setResult(fails);
        if (fails === 0) {
            let data = JSON.parse(localStorage.getItem("game"));
            data.level = 2;
            localStorage.setItem("game", JSON.stringify(data));
            setTimeout(() => {
                history.push("/")
            }, 500);
        }
    }

    useEffect(() => {
        setLoading(true);
        runTestCases();
        setLoading(false);
    }, [])

    return (
        <>
        {loading ?
            <p>Loading...</p>
            :
            <>
            {result === 0 ?
                <span style={{ color: "green" }}>All test cases passed!</span>
                :
                <span style={{ color: "red" }}>{result}/4 test cases failed!</span>
            }
            </>
        }
        </>
    )
}

export default Verify;