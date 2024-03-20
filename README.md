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
|defTime| defTime(1,false) | 返回当前月份往前推的时间区间,true为当前的时间前推，false是当前月份往前推 | defTime(number,boolean) | defTime(1,false) |
|cuFile| cuFile(文件,5,true) | 文件分切处理，布尔值用于绝对是否使用MD5作为hash值 | cuFile(File,number,boolean) | cuFile(null,5,false) |
|encrypt| encrypt(内容,key,true) | 加密默认采用MD5作为key，第三个参入为真的话是把您传入的key转为MD5，函数返回对象 | cuFile(any,string,boolean) | encrypt(null,null,false) |
|decrypt| decrypt(密文,key) | 返回解密结果，key必须与加密时的key一样 | cuFile(string,string) |  |
|MaxNum| MaxNum(数字1,数字2) | 返回两数之和 | cuFile(string,string) |  |
|downloadFile| downloadFile(Blob,'pdf') | 文档流下载,第二入参如:pdf,doc,xls,ppt,zip,也可传入其他的类型如:text/plain、application/x-tar,第四个入参是否检验第一入参类型 | downloadFile(Blob,string,string) | downloadFile(null,null,文件,true) |

#### 数字最大之和
```js
import {MaxNum} from 'pu-utilsjs';

MaxNum('12345678987654321','12345678987654321') //24691357975308642
```
#### 获取时间区间
```js
import {defTime} from 'pu-utilsjs';

defTime(1)  //['2024-03-01', '2024-03-31']
defTime(1,true)  //['2024-02-18', '2024-03-18']
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
#### 文档流文件下载
```js
import  {downloadFile} from "pu-utilsjs"

// 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'zip'
downloadFile(Blob,'doc','word文件')
```
