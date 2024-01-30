# pu-utilsjs
> 记录平时常用小工具集合

### Initial 
```js
npm install pu-utilsjs
```
###### 使用方法 
```js
import utilsjs from 'pu-utilsjs';

```
#### 数字最大之和
```js
import {MaxNum} from 'pu-utilsjs';

MaxNum('12345678987654321','12345678987654321') //24691357975308642
```
#### 获取时间区间
```js
import {deftime} from 'pu-utilsjs';

deftime(2)  //[ '2023-04-01', '2023-06-30' ]
```
#### 文件切片
```js
import {cuFile} from 'pu-utilsjs';

cuFile(File) 
```
函数| 参数 | 说明 | 类型 | 默认值 |
|---| --- | --- | --- | --- |
|deftime| 一个入参(0) | 返回当前时间往前推的时间区间 | string | 0 |
|cuFile| 三个入参(文件对象,5,true) | 文件分切处理，布尔值用于绝对是否使用MD5作为hash值 | File,number,boolean | ({},5,false) |
