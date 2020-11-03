module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
        '/api/*': {
            target: 'http://localhost:3000' // 개발서버
        }
    }
  },

  //npm run build 하면 지정된 경로로 생성한다.
  outputDir: '../back-end/public' ,
  
}