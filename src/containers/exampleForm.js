import React from 'react';
import { Checkbox, Dropdown, FormContainer, Input } from '_components';

const ExampleForm = (props) => {
  const schema = {
    title: "Value",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title", default: "Some title", ui: 'customInput'},
      subtitle: {type: "string", title: "Subtitle", default: "Some subtitle", ui: 'customInput'},
      description: {type: "string", title: "Description", default: "Some Description", ui: 'textarea'},
      image: {
        type: "string", 
        title: "Select Image", 
        ui: 'customDropdown',
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
      isRequired: {type: "boolean", title: "Is Required", default: false, ui: "radio"},
      test: {
        "type": "array",
        "title": "A multiple choices list",
        "ui": 'checkboxes',
        "items": {
          "type": "string",
          "enum": [
            "foo",
            "bar",
            "fuzz",
            "qux"
          ]
        },
        "uniqueItems": true
      }
    }
  };

  const widgets = {
    customInput: Input,
    customDropdown: Dropdown,
    customCheckBox: Checkbox
  };

  const getUiSchema = () => {
    let newObject = {};
    Object.keys(schema.properties).map(key => {
      const { properties } = schema;
      if (properties[key].ui) {
        Object.assign(newObject, {
          [key]: { "ui:widget": properties[key].ui }
        });
      }
    });
    return newObject;
  }

  const uiSchema = getUiSchema();

  return (
    <FormContainer
      schema={schema}
      uiSchema={uiSchema}
      widgets={widgets}
    />
  );
};

export default ExampleForm;