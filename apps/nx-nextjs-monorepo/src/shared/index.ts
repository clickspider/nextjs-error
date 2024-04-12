//NOTE: Use this shared module only for things that don't fit to be in the shared lib,
// E.g: translations in this case have a dependency on the app's public folder
export * from './translations';
