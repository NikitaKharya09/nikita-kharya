const path = require("path");
const express = require("express");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const expressStaticGzip = require("express-static-gzip");
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CompressionPlugin = require("compression-webpack-plugin");

// // Path to build directory
// const clientDirPath = path.resolve(__dirname, "dist");
const app = express();
// // For each request for .js file
// // return the compressed version .gz
// app.get("*.js", function (req, res, next) {
//   const pathToGzipFile = req.url + ".gz";
//   try {
//     // Check if .gz file exists
//     if (fs.existsSync(path.join(clientDirPath, pathToGzipFile))) {
//       // Change the requested .js to return
//       // the compressed version - filename.js.gz
//       req.url = req.url + ".gz";
//       // Tell the browser the file is compressed and it should decompress it.
//       // You will get a blank screen without this header because it will try to parse
//       // the compressed file.
//       res.set("Content-Encoding", "gzip");
//       res.set("Content-Type", "text/javascript");
//     }
//   } catch (err) {
//     console.error(err);
//   }

//   next();
// });
// app.use(express.static(clientDirPath));

// app.use(
//   expressStaticGzip(path.join(__dirname, 'build'), {
//   }),
// );

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(8080);

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
      threshold: 0,
      minRatio: 1,
      test: /\.(js|jsx|jpg)$/,
      // deleteOriginalAssets: true,
      // filename(pathData) {
      //   // The `pathData` argument contains all placeholders - `path`/`name`/`ext`/etc
      //   // Available properties described above, for the `String` notation
      //   if (/\.jpg$/.test(pathData.filename)) {
      //     return "[path][base].gz";
      //   }

      //   return "[path][base].gz";
      // },
    }),
    new HtmlWebpackPlugin({
      template: "index.html", // to import index.html file inside index.js
    }),
    
    // new ImageminPlugin()
  ],
  devServer: {
    port: 8080, // you can change the port
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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

// app.use(
//   expressStaticGzip(path.join(__dirname, 'dist'), {
//   }),
// );

// app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// app.listen(8080);

// app.get('*.js', (req, res, next) => {
//   if (req.header('Accept-Encoding').includes('gzip')) {
//     req.url = req.url + '.gzip';
//     console.log(req.header('Accept-Encoding'));
//     res.set('Content-Encoding', 'gzip');
//     res.set('Content-Type', 'application/javascript; charset=UTF-8');
//   }
//   next();
// });

// app.use(express.static(path.join(__dirname, 'dist')));

// var app = express();

app.use("/", expressStaticGzip(path.join(__dirname, 'dist')));