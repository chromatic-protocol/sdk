module.exports = {
  entryPoints: ["./src/index.ts"],
  tsconfig: "./tsconfig.json",
  out: "./docs",
  // plugin: ["typedoc-plugin-markdown"],
  exclude: ["**/*+(test|spec).ts"],

  externalPattern: ["**/@**/**/*.ts"],
  excludeExternals: true,

  excludePrivate: true,
  excludeInternal: true,
  excludeProtected: false,
  excludeReferences: true,

  excludeNotDocumented: true,
  excludeNotDocumentedKinds: [
    "Module",
    "Namespace",
    // "Enum",
    // // "EnumMember", // Not enabled by default
    // "Variable",
    // "Function",
    // "Class",
    // "Interface",
    // "Constructor",
    "Property",
    // "Method",
    // "CallSignature",
    // "IndexSignature",
    // "ConstructorSignature",
    // "Accessor",
    // "GetSignature",
    // "SetSignature",
    // "TypeAlias",
    // "Reference",
  ],
};
