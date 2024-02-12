import { gql } from "@apollo/client";

export const CREATE_CALLBACK = gql(`
mutation createCallback($input: CallBackInput!) {
  createCallback(input: $input) {
    status
    callback {
      id
      name
      phone
    }
  }
}
`);
