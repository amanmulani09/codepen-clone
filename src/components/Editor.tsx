"use client"
import { useState } from "react"

//imporant imports from libs
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/theme/material.css'

const Editor = (props:any)=>{
    const {language,displayName,value,onChange} = props;
    const [open,setOpen] = useState(true);

    const handleChange = (editor:any, data:any, value:any)=>{
        onChange(value)
    }
    return(
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
            {displayName && displayName}
            <button type="button"
            className="expand-collapse-btn"
            onClick={() => setOpen(prevOpen => !prevOpen)}
            >
            </button>
            <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
            </div>

            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: 'material',
                lineNumbers: true
        }}
      />
        </div>
    )
}

export default Editor;