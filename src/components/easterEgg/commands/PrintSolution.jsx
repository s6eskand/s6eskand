import React from 'react';

function PrintSolution() {
    const { codeSolution } = JSON.parse(localStorage.getItem("game"));

    const formatSolution = () => {
        return codeSolution.split('\n');
    }

    return (
        <p>function &#123;
            {
                formatSolution().map(text => (
                    <span style={{ marginLeft: 300 }}><br/> {text} </span>
                ))
            }
            <br/> &#125;
        </p>
    )
}

export default PrintSolution;