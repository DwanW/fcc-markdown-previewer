import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import marked from 'marked';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/';

const styles ={
  container:{
    display:'flex',
    height: '100vh',
    alignItems:'center'
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markdown: placeholder,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      markdown: event.target.value
      }
    )
  }

  render(){
    return(
      <Grid className={this.props.classes.container} justify="center" container>
        <Grid xs={11} lg={8} item>
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
          <Preview markdown={this.state.markdown} />
        </Grid>
      </Grid>
    )
  }
}

marked.setOptions({
  breaks: true,
});

const placeholder = `
# a header (H1 size)

## a sub header (H2 size)

a link [label](https://github.com/DwanW "Title"), inline code \`<div></div>\`

a 
\`\`\`
code block
function reaction(firstReaction, secondReaction){
  return firstReaction+secondReaction;
}
\`\`\`

a list item
1. first item
1. second item
1. third item

>a blockquote

an image ![Alt text](https://material-ui.com/static/brand.png)

and **bolded text**

`

export default withStyles(styles)(App);
