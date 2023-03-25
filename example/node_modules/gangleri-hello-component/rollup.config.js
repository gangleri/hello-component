import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'hello-world.js',
  output: {
    file: 'dist/hello-world-component.js',
    format: 'umd',
    name: 'MyHelloWorldComponent',
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel({
      presets: ['@babel/preset-env']
    })
  ]
};
