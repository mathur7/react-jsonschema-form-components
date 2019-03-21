export default {
    title: "Value",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title", default: "Some title", ui: 'customInput'},
      subtitle: {type: "string", title: "Subtitle", default: "Some subtitle", ui: 'customInput'},
      description: {type: "string", title: "Description", default: "Some Description", ui: 'customTextarea'},
      file: {
        type: "string",
        format: "data-url",
        title: "Single file"
      },
      fruit: {
        type: "string",
        title: "Select a fruit",
        ui: 'customDropdown',
        default: "Orange",
        "enum": [
          "orange",
          "apple",
          "banana"
        ],
        "enumNames": [
          "Orange",
          "Apple",
          "Banana"
        ],
        options: [
          "Orange",
          "Apple",
          "Banana"
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