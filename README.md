# Starter kit for expo router with typescript and tailwindcss

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
