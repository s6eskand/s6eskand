import React from 'react';

function Help() {
    return(
        <p>
            List of commands available to you: <br/><br/>
            <span style={{color: "yellow"}}>help</span> display a list of commands available to you
            <span style={{color: "yellow"}}>ls</span> display contents of current directory <br/><br/>
            <span style={{color: "yellow"}}>code</span> edit your solution<br/><br/>
            <span style={{color: "yellow"}}>cat &lt;file_name&gt;</span> print contents of txt file <br/><br/>
            <span style={{color: "yellow"}}>verify</span> verify your answer to move forward <br/><br/> {/* TODO: Status, in progress */}
            <span style={{color: "yellow"}}>quit</span> quit game and return to website <br/><br/> {/* TODO: Status, not started */}
            <span style={{color: "yellow"}}>sans</span> view a drawing of sans with a random saying <br/><br/>
        </p>
    )
}

export default Help;