import { gql } from "graphql-request";

export const DATA_FRAGMENT = gql`
  fragment data on DataV1 {
    name
    description
  }
`;
export const HEAD_FRAGMENT = gql`
  fragment head on HeadV1 {
    name
    href
    description
    image {
      src
      alt
    }
  }
`;
export const CHILDREN_FRAGMENT = gql`
  fragment children on ChildrenV1 {
    slug
    head {
      ...head
    }
  }
  ${HEAD_FRAGMENT}
`;
// export const DATA_FRAGMENT = gql`
//   fragment data on ChildrenV1 {
//     slug
//     head {
//       name
//       href
//       description
//       image {
//         src
//         alt
//       }
//     }
//   }
// `;

// export const CHILDREN_FRAGMENT = gql`
//   fragment childrenData on Children {
//     uid
//     slug
//     head {
//       name
//       href
//       description
//       image {
//         src
//         alt
//       }
//     }
//     body {
//       title
//       href
//       image {
//         src
//         alt
//       }
//     }
//     type
//   }
// `;

export const SITES = gql`
  query Sites {
    sites {
      _id
      data {
        name
        numberPhone
        address
        description
        domain {
          name
          dlt
        }
      }
      children {
        uid
        slug
        blogs {
          title
          slug
          content
          thumbnail {
            src
            alt
          }
          timestamps {
            created
            updated
          }
        }
        head {
          name
          href
          description
          image {
            src
            alt
          }
        }
        body {
          title
          href
          image {
            src
            alt
          }
        }
        type
        children {
          uid
          slug
          head {
            name
            href
            description
            image {
              src
              alt
            }
          }
          body {
            title
            href
            image {
              src
              alt
            }
          }
          type
          children {
            uid
            slug
            blogs {
              title
              slug
              content
              thumbnail {
                src
                alt
              }
              timestamps {
                created
                updated
              }
            }
            head {
              name
              href
              description
              image {
                src
                alt
              }
            }
            body {
              title
              href
              image {
                src
                alt
              }
            }
            type
          }
        }
      }
    }
  }
`;
export const SITE = gql`
  query Site($_id: ID!) {
    site(_id: $_id) {
      data {
        ...data
      }
      children {
        ...children
        children {
          ...children
        }
      }
    }
  }
  ${DATA_FRAGMENT}
  ${CHILDREN_FRAGMENT}
`;
