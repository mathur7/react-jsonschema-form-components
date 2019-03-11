export default {
  title: "Category",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "Some Value"},
    description: {type: "string", title: "Description", default: "Some Description"},
    image: {
      type: "string", 
      title: "Select Image", 
      default: "---", 
      "enum": [
        "screen",
        "multiply",
        "overlay"
      ],
      "enumNames": [
        "Screen",
        "Multiply",
        "Overlay"
      ]
    },
    isRequired: {type: "boolean", title: "Is Required", default: false}
  }
};