# NextAuth.js Cloudinary Provider

**This is experimental and not officially supported by Cloudinary**

## Getting Started

* Install as a dependency

```
yarn add nextauth-cloudinary-provider
# or
npm install nextauth-cloudinary-provider
```

* Add as a provider in `/pages/api/auth/[...nextauth].js` with your configured credentials

```
providers: [
  Cloudinary({
    clientId: process.env.CLOUDINARY_CLIENT_ID,
    clientSecret: process.env.CLOUDINARY_CLIENT_SECRET,
  }),
]
```

Read more about how you can use NextAuth.js over at [next-auth.js.org](https://next-auth.js.org/getting-started/introduction).
