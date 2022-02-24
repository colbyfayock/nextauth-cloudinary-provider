// https://next-auth.js.org/v3/configuration/providers#using-a-custom-provider

function Cloudinary(options) {
  return {
      id: 'cloudinary',
      name: 'Cloudinary',
      type: 'oauth',
      wellKnown: 'https://oauth.cloudinary.com/.well-known/openid-configuration',
      authorization: { params: { scope: 'upload asset_management' } },
      idToken: false,
      checks: ['pkce', 'state'],
      profile(profile) {
        return {
          id: profile.sid,
          email: profile.sub
        }
      },
      client: {
        // Cloudinary oAuth uses `client_secret_post` where Open ID by default uses client_secret_basic
        // https://github.com/panva/node-openid-client/blob/main/docs/README.md#new-clientmetadata-jwks-options
        token_endpoint_auth_method: 'client_secret_post'
      },
      options
    }
}

exports.Cloudinary = Cloudinary;