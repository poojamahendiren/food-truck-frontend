const webpack = require('webpack'); 
module.exports = function override(config,env) {
// 		//const fallback = config.resolve.fallback || {}; 
// 		//Object.assign(fallback, { 
  configure.resolve.fallback={
    url: require.resolve("url"),
    assert: require.resolve("assert"),
    crypto: require.resolve("crypto-browserify"),
    http: require.resolve("stream-http"), 
    https: require.resolve("https-browserify"), 
    os: require.resolve("os-browserify/browser"),
    buffer:require.resolve("stream-browserify")
  };
//     	"crypto": require.resolve("crypto-browserify"), 
//       "stream": require.resolve("stream-browserify"), 
//       "assert": require.resolve("assert"), 
//       "http": require.resolve("stream-http"), 
//       "https": require.resolve("https-browserify"), 
//       "os": require.resolve("os-browserify"), 
//       "url": require.resolve("url") 
//       }) 
//   config.resolve.fallback = fallback; 
    config.plugins.push( 
    	new webpack.ProvidePlugin({ 
    	process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
     }),
      );
//    
    return config; 
  }

// module.exports= function (webpackEnv){
// {
//   return {
//     resolve: {
//       fallback:{"crypto": require.resolve("crypto-browserify")},
//     }
//   }
//   }
// }

// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

// module.exports = {
// 	// Other rules...
// 	plugins: [
// 		new NodePolyfillPlugin()
// 	]
// };