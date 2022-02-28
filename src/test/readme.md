unit test with jest

npm install --save-dev jest
npm install --save-dev @types/jest

npm install --save-dev ts-jest 

creating config to support ts: npx ts-jest config:init


run: npm run test



Manual Mock Module step：

1. 在被mock的module的统计根目录下创建文件夹__mocks__
2. 在__mocks__下创建与被mock的module同名的ts文件
3. 在__mocks__/example.ts文件里，mock这个module的方法，导出这个module
4. 在xxx.test.ts里面，调用jest.mock(被mock的module相对test文件的路径)

Auto Mock Module step:

1. 在xxx.test.ts里面，调用jest.mock(被mock的module相对test文件的路径)
2. mock fn return value



1. async/await test
2. mock function
3. mock node module
