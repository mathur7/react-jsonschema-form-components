export default {
    title: "Value",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title", default: "Some title", ui: 'customInput'},
      subtitle: {type: "string", title: "Subtitle", default: "Some subtitle", ui: 'customInput'},
      description: {type: "string", title: "Description", default: "Some Description", ui: 'customTextarea'},
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