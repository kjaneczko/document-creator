import React, {Component} from 'react';

class DocumentAddComponentButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-12 button-add-component">
                    <button onClick={this.props.handleAddNewComponent} data-id={this.props.componentId}>[+]</button>
                </div>
            </div>
        );
    }
}

export default DocumentAddComponentButton;
