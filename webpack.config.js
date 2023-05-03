const path = require("path");
const express = require("express");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CompressionPlugin = require("compression-webpack-plugin");

// Path to build directory
const clientDirPath = path.resolve(__dirname, "dist");
const app = express();
// For each request for .js file
// return the compressed version .gz
app.get("*.js", function (req, res, next) {
  const pathToGzipFile = req.url + ".gz";
  try {
    // Check if .gz file exists
    if (fs.existsSync(path.join(clientDirPath, pathToGzipFile))) {
      // Change the requested .js to return
      // the compressed version - filename.js.gz
      req.url = req.url + ".gz";
      // Tell the browser the file is compressed and it should decompress it.
      // You will get a blank screen without this header because it will try to parse
      // the compressed file.
      res.set("Content-Encoding", "gzip");
      res.set("Content-Type", "text/javascript");
    }
  } catch (err) {
    console.error(err);
  }

  next();
});
app.use(express.static(clientDirPath));

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.[chunkhash].js", // the name of the bundle
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
      test: /.js$|.css$/,
    }),
    new HtmlWebpackPlugin({
      template: "index.html", // to import index.html file inside index.js
    }),
    
    new ImageminPlugin()
  ],
  devServer: {
    port: 8080, // you can change the port
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|gif)$/i, 
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      
       
    }
    ],
  },
};