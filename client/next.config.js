module.exports = {
    webpack: (config) => {
      config.watchOptions.poll = 300;
      return config;
    },
    images:{

        domains:['listcoins.dev']
    }
  };