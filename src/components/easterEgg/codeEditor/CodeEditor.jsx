import React, {useState, useEffect} from "react";
import Prism from "prismjs";
import Textareaautosize from 'react-textarea-autosize';
import { useHistory } from 'react-router-dom';

import './CodeEditor.css';
import Sans from "../sans/Sans";

function CodeEditor() {
    const [solution, setSolution] = useState("");
    const history = useHistory();

    const handleKeyDown = (e) => {
        let value = solution, selStartPos = e.currentTarget.selectionStart;

        // handle 4-space indent
        if (e.key === "Tab") {
            value = value.substring(0, selStartPos) + "    " + value.substring(selStartPos, value.length);
            e.currentTarget.selectionStart = selStartPos + 3;
            e.currentTarget.selectionEnd = selStartPos + 4;
            e.preventDefault();

            setSolution(value);
        }
    };

    const handleChange = (e) => {
        setSolution(e.target.value);
    };

    const handleExit = () => {
        const data = JSON.parse(localStorage.getItem("game"));
        data.codeSolution = solution;
        localStorage.setItem("game", JSON.stringify(data));
        history.push("/terminal")
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("game"));
        setSolution(data.codeSolution);
    }, [])

    useEffect(() => {
        Prism.highlightAll();
    }, [solution]);

    return (
        <>
            <div className="code-edit-container">
                <pre className="base-code">
                    <code className="language-javascript">
                        const solution = (nums, target) => &#123;
                    </code>
                </pre>
                <Textareaautosize
                    autoFocus
                    spellCheck={false}
                    className="code-input"
                    value={solution}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onFocus={(e) => {
                        const val = e.target.value;
                        e.target.value = '';
                        e.target.value = val;
                    }}
                />
                <pre className="code-output">
                    <code className="language-javascript">
                        {solution}
                    </code>
                </pre>
                <pre className="base-code">
                    <code className="language-javascript">
                        &#125;
                    </code>
                </pre>
                <button onClick={handleExit} className="exit-button">exit and save</button>
            </div>
            <div className="warning-message">
                <p>Sans says: Rotate your phone</p>
                <Sans />
            </div>
        </>
    );
}

export default CodeEditor;