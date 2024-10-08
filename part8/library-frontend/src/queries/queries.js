import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
      id
    }
  }
`;
export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      published
      author
      id
      genres
    }
  }
`;
export const ADD_BOOKS = gql`
  mutation createBook(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      author
      published
      genres
      id
    }
  }
`
export const EDIT_AUTHOR = gql`
  mutation editAuthor($name: String!, $born: String!) {
    editAuthor(name: $name, born: $born) {
      name
      born
      bookCount
      id
    }
  }
`;
