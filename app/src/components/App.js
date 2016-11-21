import React, { Component } from 'react';
import Style from '../style';
import { Grid, Panel } from 'react-bootstrap/lib';

// custom components
import AlignInput from './AlignInput';
import AlignOutput from './AlignOutput';

class App extends Component {
  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    output: [""],
  };

  handleResize() {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  updateOutput(newOutput) {
    this.setState({ output: newOutput })
  }

  render() {
    var width;
    var height;
    var marginTop;
    var inputSeqHeight;
    if (this.state.windowWidth < Style.xsCutoff) {
      width = '100%';
      height = this.state.windowHeight;
      inputSeqHeight = height * 0.2;
      marginTop = 0;
    } else if (this.state.windowWidth < Style.smCutoff) {
      width = '723px';
      height = this.state.windowHeight * 0.9;
      inputSeqHeight = height * 0.4;
      marginTop = this.state.windowHeight * 0.05;
    } else if (this.state.windowWidth < Style.mdCutoff) {
      width = '933px';
      height = this.state.windowHeight * 0.8;
      inputSeqHeight = height * 0.4;
      marginTop = this.state.windowHeight * 0.1;
    } else {
      width = '1127px';
      height = this.state.windowHeight * 0.8;
      inputSeqHeight = height * 0.4;
      marginTop = this.state.windowHeight * 0.1;
    }

    var panelStyle = {
      width: width,
      margin: 'auto',
      marginTop: marginTop,
    }

    var gridStyle = {
      width: '100%',
      height: '100%',
    }

    const panelTitle = (
      <h3>Sequentify DNA Sequence Aligner</h3>
    )

    return (
      <Panel style={panelStyle} header={panelTitle} bsStyle="primary">
        <Grid style={gridStyle}>
          <AlignInput updateOutput={this.updateOutput.bind(this)} height={inputSeqHeight} />
          <AlignOutput output={this.state.output}/>
        </Grid>
      </Panel>
    );
  }
}

export default App;
