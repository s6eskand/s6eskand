import React, {useState, useEffect} from "react";
import Prism from "prismjs";

import './CodeEditor.css';

function CodeEditor() {
    const [solution, setSolution] = useState("// enter your solution here");

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

    useEffect(() => {
        Prism.highlightAll();
    }, [solution]);

    return (
        <div className="code-edit-container">
            <textarea
              spellCheck={false}
              className="code-input"
              value={solution}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <pre className="code-output">
                {/*<span className="token keyword">function </span>*/}
                {/*<span className="token function">solution</span>*/}
                {/*<span className="token punctuation">(</span>*/}
                {/*<span className="token parameter">*/}
                {/*    nums*/}
                {/*    <span className="token punctuation">,</span>*/}
                {/*     target*/}
                {/*</span>*/}
                {/*<span className="token punctuation">)</span>*/}
                {/*<span className="token punctuation">&#123;</span>*/}
                <code className="language-javascript">{solution}</code>
            </pre>
        </div>
    );
}

export default CodeEditor;