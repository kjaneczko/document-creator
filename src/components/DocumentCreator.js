import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DocumentComponent from './DocumentComponent';

class DocumentCreator extends Component {
  constructor() {
    super();
    this.state = {
        title: '',
        creatingTime: '',
        lastEditTime: '',
        components: {
          1: {
            uuid: 'a5701a96-a2a1-41a4-8dd7-82f2cd69212d',
            content: '<h1>Header</h1>'
          },
          2: {
            uuid: '41856f52-fd09-4104-a3c4-c8daeb5daeec',
            content: '<p>Paragraph</p>'
          },
          lastId: 2
        },
    };
  }

  uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  handleComponentChange = (content, editor) => {
     const id = editor.id.split('-')[0];
     const components = this.state.components;
     components[id].content = content;
     this.setState(prevState => ({
       ...prevState,
       components
     }));
  }

  handleAddNewComponent = () => {
    const components = this.state.components;
    ++components.lastId;
    components[components.lastId] = {
      uuid: components.lastId + '-' + this.uuidv4(),
      content: '<p>Start writing!</p>'
    };
    this.setState(prevState => ({
      ...prevState,
      components
    }));
  }

  render() {
    const components = [];
    Object.keys(this.state.components).forEach(function(i) {
      if(i !== 'lastId') {
        components.push(<DocumentComponent key={i} componentId={i} component={this.state.components[i]} handleComponentChange={this.handleComponentChange} />);
      }
    }, this);
    return(
      <div>
        <h1>DocumentCreator</h1>
        <button onClick={this.handleAddNewComponent}>[+]</button>
        {components}
      </div>
    );
  }
}

export default DocumentCreator;
