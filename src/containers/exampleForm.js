import React from 'react';
import { Dropdown, FormContainer, Input } from '_components';

const ExampleForm = (props) => {
  const schema = {
    title: "Category",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title", default: "Some Value"},
      description: {type: "string", title: "Description", default: "Some Description"},
      image: {
        type: "string", 
        title: "Select Image", 
        default: "Screen", 
        "enum": [
          "screen",
          "multiply",
          "overlay"
        ],
        "enumNames": [
          "Screen",
          "Multiply",
          "Overlay"
        ],
        options: [
          "Screen",
          "Multiply",
          "Overlay"
        ]
      },
      isRequired: {type: "boolean", title: "Is Required", default: false}
    }
  };

  const widgets = {
    customInput: Input,
    customDropdown: Dropdown
  };

  const uiSchema = {
    title: {
      "ui:widget": "customInput"
    },
    description: {
      "ui:widget": "textarea"
    },
    image: {
      "ui:widget": "customDropdown"
    },
    isRequired: {
      "ui:widget": "radio"
    }
  };

  return (
    <FormContainer
      schema={schema}
      uiSchema={uiSchema}
      widgets={widgets}
    />
  );
};

export default ExampleForm;