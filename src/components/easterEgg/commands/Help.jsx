import React from 'react';

function Help() {
    return(
        <p>
            List of commands available to you: <br/><br/>
            <span style={{color: "yellow"}}>ls</span> display contents of current directory <br/><br/>
            <span style={{color: "yellow"}}>edit &lt;file_name&gt;</span> edit the given file <br/><br/>
            <span style={{color: "yellow"}}>cat &lt;file_name&gt;</span> print contents of txt file <br/><br/>
            <span style={{color: "yellow"}}>verify &lt;file_name&gt;</span> verify your answer to move forward <br/><br/>
            <span style={{color: "yellow"}}>quit</span> quit game and return to website <br/><br/>
            <span style={{color: "yellow"}}>sans</span> view a drawing of sans with a random saying <br/><br/>
            <span style={{color: "yellow"}}>sam</span> display a fact about Sam (maybe useful later ;) <br/><br/>
        </p>
    )
}

export default Help;