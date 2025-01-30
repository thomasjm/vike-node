import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import vikeNode from 'vike-node/plugin'

export default {
  plugins: [
    react(),
    vike(),
    vikeNode({
      entry: 'server/index.js',
      standalone: true,
      standaloneEsbuildOptions: {
        minify: true,
        // minifyWhitespace: true,
      },
    })
  ],

  // build: {
  //   minify: "esbuild",
  // },
}
