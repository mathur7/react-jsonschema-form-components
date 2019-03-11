import Proptypes from 'prop-types';
import React from 'react';
import Form from 'react-jsonschema-form';

const FormContainer = (props) => {
  return (
    <Form 
      schema={props.schema}
      uiSchema={props.uiSchema}
      formData={props.formData} 
      widgets={props.widgets} />
  );
};

FormContainer.defaultProps = {
  schema: {},
  uiSchema: {},
  formData: {}
};

FormContainer.propTypes = {
  schema: Proptypes.object,
  uiSchema: Proptypes.object,
  formData: Proptypes.object
};

export default FormContainer;