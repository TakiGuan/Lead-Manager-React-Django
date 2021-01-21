/*
 * @Description:
 * @Version: 1
 * @Author: Taki Guan
 * @Date: 2021-01-21 23:54:30
 * @LastEditors: Taki Guan
 * @LastEditTime: 2021-01-21 23:56:18
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
