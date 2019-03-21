import React, { useEffect, useState } from 'react';
import { Checkbox, Dropdown, FormContainer, Input, Textarea } from '_components';
import mockData from '../data.js';

const getUiSchema = (data) => {
  let newObject = {};
  Object.keys(data.properties).map(key => {
    const { properties } = data;
    if (properties[key].ui) {
      Object.assign(newObject, {
        [key]: { "ui:widget": properties[key].ui }
      });
    }
  });
  return newObject;
}

const ExampleForm = (props) => {
  const [schema, setSchema] = useState({});

  useEffect(() => {
    // api request goes here
    setSchema(mockData);
  }, [schema]);

  const onSubmit = ({formData}, e) => {
    // api request goes here
    // updating the global state goes here
    console.log("Data submitted: ",  formData);
  };

  const widgets = {
    customInput: Input,
    customDropdown: Dropdown,
    customCheckBox: Checkbox,
    customTextarea: Textarea
  };

  if (Object.keys(schema).length > 0) {
    return (
      <div className="example-form-container">
        <FormContainer
          schema={schema}
          uiSchema={getUiSchema(schema)}
          widgets={widgets}
          onSubmit={onSubmit}
        />
      </div>
    );
  }

  return 'No schema available';
  
};

export default ExampleForm;