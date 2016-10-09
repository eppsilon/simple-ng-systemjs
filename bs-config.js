module.exports = {
  serveStatic: ['./dist', './', './node_modules'],
  ghostMode: false,
  server: {
    baseDir: './dist'
  }
};