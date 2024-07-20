import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PerformerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
