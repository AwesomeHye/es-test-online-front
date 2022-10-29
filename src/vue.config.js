module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        // Preload vuestic-ui variables and mixins for every component
        data: '@import "~vuestic-ui/src/components/vuestic-sass/resources/resources.scss";'
      }
    }
  }
}
