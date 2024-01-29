module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "nativewind/babel",
    [
      "module-resolver",
      {
        root: "./",
        extensions: [
          ".ios.js",
          ".android.js",
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          "/index.ts",
          "/index.tsx",
          "/index.js",
          "/index.jsx",
          ".json",
          ""
        ],
        alias: {
          "@Assets": "./src/assets",
          "@Components": "./src/components",
          "@Context": "./src/context",
          "@Hooks": "./src/hooks",
          "@Navigators": "./src/navigators",
          "@Redux": "./src/redux",
          "@Screens": "./src/screens",
          "@Theme": "./src/theme"
        }
      }
    ]
  ],
};
