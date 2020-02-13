import React, {Component} from 'react';

class DocumentChangeComponentOrderButtons extends Component {
    render() {
        return(
            <div>
                <button className="button-move-component" type="button" data-id={this.props.componentId} data-move="up" onClick={this.props.handleChangeComponentOrder}>U</button>
                <button className="button-move-component" type="button" data-id={this.props.componentId} data-move="down" onClick={this.props.handleChangeComponentOrder}>D</button>
            </div>
        );
    }
}

export default DocumentChangeComponentOrderButtons;
