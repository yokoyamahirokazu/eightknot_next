module.exports = {
  svgoConfig: {
    plugins: {
      removeViewBox: false, // to enable overwriteing width/height by CSS
      moveElemsAttrsToGroup: false, // to prevent attribute destruction for overwriting color
    },
  },
};
