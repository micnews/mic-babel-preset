import es2015Preset from 'babel-preset-es2015';
import es2015LoosePreset from 'babel-preset-es2015-loose';
import reactPreset from 'babel-preset-react';
import fastAsyncPlugin from 'fast-async';
import reactOptimizePreset from 'babel-preset-react-optimize';

export const buildPreset = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return ({
  presets: [
    isProduction ? es2015LoosePreset : es2015Preset,
    reactPreset,
    isProduction ? reactOptimizePreset : null
  ].filter(Boolean),
  plugins: [
    fastAsyncPlugin
  ]
})};
