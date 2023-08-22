# Starter kit for expo router with typescript and tailwindcss

## reference

[https://www.notjust.dev/blog/expo-router-2](https://www.notjust.dev/blog/expo-router-2)

## installation

```
cd [starter directory]
npx create-expo-app@latest -e with-router .
touch tsconfig.json
npx expo start
```

then will see below message:

> Starting Metro Bundler
> ✔ It looks like you're trying to use TypeScript but don't have the required dependencies installed. Would you like to install typescript@^5.1.3, @types/react@~18.2.14? … yes

> › Installing 2 SDK 49.0.0 compatible native modules using npm
> npm install

follow instruction of [NativeWind](https://www.nativewind.dev/quick-starts/expo)

```
npm i nativewind
npm i -D tailwindcss@3.3.2
npx tailwindcss init
npm install -D postcss autoprefixer
```

**note**: tailwindcss@3.3.3 will not work

## sitemap

http://localhost:8081/\_sitemap

## when nativewind seems not taking effect

clear the cache

```
npx expo start -c
```

## "app" directory can be moved inside "src"

note that in order to use tailwind, need to update tailwind.config.js to include the src folder

```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
```

## Aliased Imports

Docs: [https://docs.expo.dev/guides/typescript/#path-aliases](https://docs.expo.dev/guides/typescript/#path-aliases)

Alliased imports are introduced in SDK 49 and help us get rid of spaghetti imports.

```
import Button from '../../../src/components/Button'; // relative import
import Button from '@/components/Button; // aliased import
```

To enable them add this to app.json

```
{
  "expo": {
             ...
     "experiments": {
        "tsconfigPaths": true
     }
   }
}
```

Now, add the list of aliases to tsconfig.json

```
"compilerOptions": {
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  }
},
```

And then, update the imports to match the new alias. For example:

```
import FullScreenImage from '@/components/FullScreenImage';
```

## Async Routes

It's still experimental feature, once activated, it will only load in memory the code for the screen that is opened, when we navigate to a new route, it will load the new code in mamory and cache it for later.

It will sped up the development time and improve the time to launch the app for the first time.

in app.json

```
{
  "expo": {
    "plugins": [
      [
        "expo-router",
        {
          "origin": "https://acme.com",
          "asyncRoutes": "development"
        }
      ]
    ]
  }
}

```

Then, when you are about to start your project, you can use the --clear flag to clear the Metro cache. This will ensure that the routes are loaded asynchronously:

```
npx expo start --clear
# or when exporting
npx expo export -c
```

## tobe discovered

### static site generation
