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
函数| 参数 | 说明 | 类型 | 默认值 |
|---| --- | --- | --- | --- |
|deftime| deftime(0) | 返回当前月份往前推的时间区间 | string | 0 |
|cuFile| cuFile(文件对象,5,true) | 文件分切处理，布尔值用于绝对是否使用MD5作为hash值 | File,number,boolean | (null,5,false) |
|encrypt| encrypt(内容,key,true) | 加密默认采用MD5作为key，第三个参入为真的话是把您传入的key转为MD5，函数返回对象 | any,string,boolean | (null,null,false) |
|decrypt| decrypt(密文,key) |  | string,string |  |
|MaxNum| MaxNum(数字1,数字2) | 返回两数之和 | string,string |  |
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
#### 内容加密
```js
import  {encrypt,decrypt} from "pu-utilsjs"

encrypt(value,'123456'){
    return {key:string,value:string}
}  //加密
decrypt(value,'123456'):string  //解密
```
