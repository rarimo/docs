// https://stackoverflow.com/a/63906923
module.exports = function (context, options) {
  return {
      name: 'plugin-dynamic-redirects',

      async contentLoaded({ content, actions }) {
          const { routes } = options
          const { addRoute } = actions

          routes.map(route => addRoute(route))
      }
  }
}