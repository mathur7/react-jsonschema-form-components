import Proptypes from 'prop-types';
import React from 'react';
import Form from 'react-jsonschema-form';

const FormContainer = ({ schema, uiSchema, formData, onSubmit, widgets }) => {
  return (
    <Form 
      schema={schema}
      uiSchema={uiSchema}
      formData={formData} 
      onSubmit={onSubmit}
      widgets={widgets} />
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