import React from 'react';
import TextField from '@material-ui/core/TextField';

const editorStyles = {
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'rgba(192,192,192,0.3)',
    borderWidth: '1px',
    borderBottom: '0px',
    borderTop: '0px'
}
const Editor =(props)=>{
    return(
        <div style={editorStyles}>
            <h1 style={{borderBottom:'1px solid gray'}}><strong>Editor</strong></h1><br/>
            <TextField id='editor' onChange={props.onChange} value={props.markdown} type='text' multiline={true} rows={5} rowsMax={20} fullWidth={true}  />
        </div>
    )
}

export default Editor;