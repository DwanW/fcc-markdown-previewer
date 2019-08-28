import React from 'react';
import marked from 'marked';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const Preview =(props) => {
    return(
    <Card>
        <CardContent>
            <h1 style={{borderBottom:'1px solid gray'}}>Preview</h1>
         <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />
        </CardContent>
     </Card>
    )
}

export default Preview;