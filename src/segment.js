const noop = () => {};

const { track: sTrack = noop /* identify: sIdentify = noop */, alias: sAlias = noop } =
  window.analytics || {};
const { reachGoal: yaTrack = noop } = window.yaCounter || {};

export const track = (...args) => {
  sTrack(...args);
  yaTrack(...args);
};

export const alias = (...args) => sAlias(...args);
