import React from 'react';

function Help() {
    return(
        <p>
            List of commands available to you: <br/><br/>
            <span style={{color: "yellow"}}>cd &lt;directory_name&gt;</span> change directories into the path specified <br/><br/>
            <span style={{color: "yellow"}}>edit &lt;file_name&gt;</span> edit the given file <br/><br/>
            <span style={{color: "yellow"}}>sans</span> view a drawing of sans with a random saying <br/><br/>
            <span style={{color: "yellow"}}>sam</span> display a fact about Sam (maybe useful later ;) <br/><br/>
        </p>
    )
}

export default Help;