import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Editor } from '@tinymce/tinymce-react';

class DocumentComponent extends Component {
  constructor(props) {
    super(props);
  }

  // getAttributes(attributesList) {
  //     const attributes = {};
  //     Object.keys(attributesList).forEach(function(key) {
  //       if(attributesList.key != '') {
  //         attributes.key = attributesList.key;
  //       }
  //     });
  //     return attributes;
  // }
  //
  // renderHeader(componentDetails) {
  //
  // }
  //
  // renderList(componentDetails) {
  //
  // }
  //
  // renderParagraph(componentDetails) {
  //
  // }
  //
  // renderComponent(componentDetails) {
  //   const attributes = this.getAttributes(componentDetails.attributes);
  //   const component = React.createElement(
  //     componentDetails.type,
  //     attributes,
  //     componentDetails.text
  //   );
  //   return component;
  // }

  render() {
    return(
       <Editor
         initialValue={this.props.component.content}
         id = {this.props.componentId + '-' + this.props.component.uuid}
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
     );
  }
}

export default DocumentComponent;
