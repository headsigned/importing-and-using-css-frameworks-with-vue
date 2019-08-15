module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/style/variables.scss";
            @import "~bulma/sass/utilities/_all";
          `
      }
    }
  }
};
