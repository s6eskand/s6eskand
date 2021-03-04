import React, { useState } from 'react';

import Editor from 'react-simple-code-editor';
import { highlight } from 'prismjs/components/prism-core';
import Prism from 'prismjs';

function CodeEditor() {
    const [solution, setSolution] = useState("// add your solution here");

    return(
        <Editor
            value={solution}
            onValueChange={(code) => setSolution(code)}
            highlight={(code) => highlight(code, Prism.languages.javascript, "javascript")}
        />
    )
}

export default CodeEditor;