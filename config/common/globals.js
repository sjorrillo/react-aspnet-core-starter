module.exports = {
  Date: global.Date,
  process: global.process,
  document: global.document,
  location: (global.window || {}).location,
  window: global.window,
  setTimeout: global.setTimeout,
  localStorage: global.localStorage,
  sessionStorage: global.sessionStorage,
};
