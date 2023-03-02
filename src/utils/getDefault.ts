export const getDefault = <T>(promise: Promise<{ default: T }>) =>
  promise.then((mod) => mod.default)
