import * as fs from "fs";
import * as path from "path";
import * as faker from "faker";
import * as EasyGraphQLTester from "easygraphql-tester";

describe("User Queries", () => {
  let tester: any;

  beforeAll(() => {
    const schema: any = fs.readFileSync(
      path.join(__dirname, "../../src", "schema.gql"),
      "utf8"
    );
    tester = new EasyGraphQLTester(schema);
  });

  it("Should pass if the user query is valid", (done) => {
    const query: string = `
      query user($input: String!) {
        user(id: $input) {
          id
          name
          surname
          email
          lang
          invites {
            id
            user_id
            invited_email
            invited_user_id
            status
            updated_at
            created_at            
          }
        }
      }
    `;
    tester.test(true, query, { input: "fake-user-id" });
    done();
  });

  it("Should pass if the users query is valid", (done) => {
    const query: string = `
      query users($page: Int!, $size: Int!) {
        users(page: $page, size: $size) {
          id
          name
          surname
          email
          lang
          invites {
            id
            user_id
            invited_email
            invited_user_id
            status
            updated_at
            created_at            
          }
        }
      }
    `;
    tester.test(true, query, { page: 1, size: 10 });
    done();
  });

  it("Should pass if the invites query is valid", (done) => {
    const query: string = `
      query invites($page: Int!, $size: Int!) {
        invites(page: $page, size: $size) {
          id
          user_id
          invited_email
          invited_user_id
          status
          updated_at
          created_at
        }
      }
    `;
    tester.test(true, query, { page: 1, size: 10 });
    done();
  });
});

describe("User Mutations", () => {
  let tester: any;

  beforeAll(() => {
    const schema: any = fs.readFileSync(
      path.join(__dirname, "../../src", "schema.gql"),
      "utf8"
    );
    tester = new EasyGraphQLTester(schema);
  });

  it("Should pass if the createUser mutation is valid", (done) => {
    const newUser = {
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      email: faker.phone.phoneNumber(),
      password: "1234567890",
      password_confirmation: "1234567890",
      lang: "tr",
    };

    const mutation: string = `
      mutation createUser($input: CreateUserInput!) {
        createUser(newUserData: $input) {
          name
          surname
          email
          lang
        }
      }
    `;
    tester.test(true, mutation, { input: newUser });
    done();
  });

  it("Should pass if the deleteUser mutation is valid", (done) => {
    const mutation: string = `
      mutation deleteUser($id: String!) {
        deleteUser(id: $id)
      }
    `;
    tester.test(true, mutation, { id: "fake-user-id" });
    done();
  });

  it("Should pass if the inviteUser mutation is valid", (done) => {
    const inviteUser = {
      email: faker.phone.phoneNumber(),
    };

    const mutation: string = `
      mutation createInvite($input: CreateInviteInput!) {
        createInvite(newInviteData: $input) {
          id
          user_id
          invited_email
          invited_user_id
          status
          updated_at
          created_at
        }
      }
    `;
    tester.test(true, mutation, { input: inviteUser });
    done();
  });
});
