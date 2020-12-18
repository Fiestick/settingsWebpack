// npm i -D postcss-loader autoprefixer css-mqpacker cssnano

module.exports = {
  plugins: [require("autoprefixer"), require("css-mqpacker")],
};
