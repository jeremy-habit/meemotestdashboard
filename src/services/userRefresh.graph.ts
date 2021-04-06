export const userRefreshToken = `mutation userRefreshToken($refreshToken: String!) {
    userRefreshToken(data: {refreshToken: $refreshToken}) {
      __typename
      ... on AccessTokenResult {
        ...AccessToken
      }
    }
  }
  fragment AccessToken on AccessTokenResult {
    accessToken
    expiresIn
    refreshToken
  }
`;
