import React, { useEffect, useState } from 'react';
import { FormContainer, Input } from '_components';
import mockData from '../data/data.js';

const ExampleForm = (props) => {
  const [schema, setSchema] = useState({});

  useEffect(() => {
    //This is where you'd use axios or websockets to grab the schema from the DB
    setSchema(mockData);
  }, [schema]);

  const widgets = {
    customInput: Input
  };

  const uiSchema = {
    title: {
      "ui:widget": "customInput"
    },
    description: {
      "ui:widget": "textarea"
    },
    isRequired: {
      "ui:widget": "radio"
    }
  };

  function handleSubmit(data) {
    console.log(data.formData);
  }

  return (
    <FormContainer
      schema={schema}
      uiSchema={uiSchema}
      widgets={widgets}
      onSubmit={handleSubmit}
    />
  );
};

export default ExampleForm;