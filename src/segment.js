const noop = () => {};

export const { track = noop, identify = noop, alias = noop } = window.analytics || {};
