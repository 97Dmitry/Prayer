module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    sourceExts: ["js", "json", "ts", "tsx"],
    CI: true,
    watchFolders: ["src"],
  },
};
