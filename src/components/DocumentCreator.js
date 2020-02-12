import React, {Component} from 'react';
import DocumentComponent from './DocumentComponent';
import DocumentAddComponentButton from './DocumentAddComponentButton';

class DocumentCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            creatingTime: '',
            lastEditTime: '',
            components: [
                {
                    id: 0,
                    uuid: '0-a5701a96-a2a1-41a4-8dd7-82f2cd69212d',
                    content: '<h1>Header</h1>'
                },
                {
                    id: 1,
                    uuid: '1-41856f52-fd09-4104-a3c4-c8daeb5daeec',
                    content: '<p>Paragraph</p>'
                },
            ],
        };
    }

    uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    handleComponentChange = (content, editor) => {
         const id = editor.id.split('-')[0];
         const components = this.state.components;
         components[id].content = content;
         this.setState(prevState => ({
             ...prevState,
             components
         }));
    };

    handleAddNewComponent = (event) => {
        const newComponentId = event.target.dataset.id;
        const oldComponents = this.state.components;
        const newComponents = [];
        oldComponents.forEach(function(item, i) {
            if(i < newComponentId) {
                return newComponents.push(item);
            }
        });
        newComponents.push({
            id: newComponentId,
            uuid: newComponentId + '-' + this.uuidv4(),
            content: '<p>[Added by button] Start writing!</p>'
        });
        oldComponents.forEach(function(item, i) {
            if(i >= newComponentId) {
                item.id = Number(item.id) + 1;
                item.uuid.replace(/[0-9]*/, item.id);
                return newComponents.push(item);
            }
        });
        this.setState(prevState => ({
            ...prevState,
            components: newComponents
        }));
    };

    handleChangeOrder = (event) => {

    }

    render() {
        const components = [<DocumentAddComponentButton key={"b0"} handleAddNewComponent={this.handleAddNewComponent} componentId="0" />];
        this.state.components.forEach(function(item, i) {
            components.push(<DocumentComponent key={Math.random()} componentId={i} component={item} handleComponentChange={this.handleComponentChange} />);
            components.push(<DocumentAddComponentButton key={Math.random()} handleAddNewComponent={this.handleAddNewComponent} componentId={Number(i)+1} />);
        }, this);
        return(
            <div className="container">
                <h1>DocumentCreator</h1>
                {components}
            </div>
        );
    }
}

export default DocumentCreator;
