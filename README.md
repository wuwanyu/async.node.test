### 在express中使用流程控制工具Async

####  安装
	npm install async --save -d
	
####  项目包含实例

- 1.async.waterfall实例（多个函数依次执行，且前一个的输出为后一个的输入）

- 2.async.parallel 实例（多个函数并行执行）

- 3.async.auto实例（多个函数有依赖关系，有的并行执行，有的依次执行）

####  项目入口地址
    http://localhost:3000/list

##### 博客参考地址：http://www.cnblogs.com/wuwanyu/p/wuwanyu20160407.html