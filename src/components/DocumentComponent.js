import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import DocumentChangeComponentOrderButtons from './DocumentChangeComponentOrderButtons';

class DocumentComponent extends Component {
    render() {
        console.log('this.props.component.content', this.props.component)
        return(
            <div className="row">
                <div className="col-sm-11 document-component">
                    <Editor
                        initialValue="Write what you have in your soul!"
                        value={this.props.component.content}
                        id = {this.props.component.uid}
                        inline={true}
                        init={{
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link charmap anchor',
                                'searchreplace visualblocks',
                                'insertdatetime table paste wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | link | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | table'
                        }}
                        onFocusOut={this.props.handleComponentChange}
                    />
                </div>
                <div className="col-sm-1">
                    <DocumentChangeComponentOrderButtons handleChangeComponentOrder={this.props.handleChangeComponentOrder} componentId={this.props.component.id}/>
                </div>
            </div>
         );
    }
}

export default DocumentComponent;
