import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import DocumentAddComponentButton from './DocumentAddComponentButton';

class DocumentComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-11 document-component">
                    <Editor
                        initialValue={this.props.component.content}
                        id = {this.props.component.uuid}
                        inline={true}
                        init={{
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link charmap anchor',
                                'searchreplace visualblocks',
                                'insertdatetime table paste wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | table'
                        }}
                        onEditorChange={this.props.handleComponentChange}
                    />
                </div>
                <div className="col-md-1">
                    <button className="button-move-component" type="button">U</button>
                    <button className="button-move-component" type="button">D</button>
                </div>
            </div>
         );
    }
}

export default DocumentComponent;
