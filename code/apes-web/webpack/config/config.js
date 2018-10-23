// ref: https://umijs.org/config/
export default {
    plugins: [
      // ref: https://umijs.org/plugin/umi-plugin-react.html
      ['umi-plugin-react', {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'webpack',
        dll: false,
        pwa: false,
        routes: {
          exclude: [],
        },
        hardSource: false,
      }],
    ],
    exportStatic: true,
    outputPath:'./../dist'
  }
