import React from 'react';
import Form from "react-jsonschema-form"
import validator from "@rjsf/validator-ajv8";

function MyForm() {
    const [uiSchema, setUiSchema] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const uiSchema = await getUiSchema();
        setUiSchema(uiSchema);
      }
      fetchData();
    }, []);
  
    function handleSubmit(formData) {
      // Your submission logic goes here
    }
  
    return (
      <Form
      validator={validator}
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={handleSubmit}
      />
    );
  }

export default MyForm
