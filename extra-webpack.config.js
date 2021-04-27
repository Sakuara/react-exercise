module.exports = {
  module: {
    rules: [{
      test: /\.less$/,
      loader: 'less-loader',
      options: {
        modifyVars: { // 修改主题变量
          'primary-color': 'red',
          'link-color': '#333',
          'border-radius-base': '2px',
          'btn-primary-color': 'red',
          'btn-default-bg': 'green',
          'btn-danger-bg': 'yellow'
        },
        javascriptEnabled: true
      }
    }]
  }
};
