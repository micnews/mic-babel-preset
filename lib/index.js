import es2015Preset from 'babel-preset-es2015';
import reactPreset from 'babel-preset-react';
import fastAsyncPlugin from 'fast-async';

export default {
  presets: [
    es2015Preset,
    reactPreset
  ],
  plugins: [
    fastAsyncPlugin
  ]
};
