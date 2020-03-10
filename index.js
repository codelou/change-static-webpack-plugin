const path = require('path')
const fs = require('fs')

class ChangeStaticWebpackPlugin {
    constructor(options) {
        this.options = options;
        this.externalModules = {}
    }
    apply(compiler) {
        compiler.hooks.done.tap('changeStatic',function(compilation){
            let context = compiler.options.context;    //当前项目的绝对路径
            let publicPath = path.resolve(context,'dist');
            //获取打包后的文件结构信息
            compilation.toJson().assets.forEach((ast)=>{
               const filePath = path.resolve(publicPath,ast.name);
               fs.readFile(filePath,function(err,file){
                  //buffer
                  var newcontext = file.toString().replace('./static','www.xxx.com');
                  fs.writeFile(filePath,newcontext,function(){}); 
              })
            })
          })
    }
}
module.exports = ChangeStaticWebpackPlugin