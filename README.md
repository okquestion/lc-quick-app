# loncin-quick-app
loncin wuye quick app

[快应用入门](https://doc.quickapp.cn/)

### 创建项目
``` hap init <ProjectName> ```

### 安装依赖
``` npm install ```

### 编译项目
``` npm run build ```

### 自动编译项目
``` npm run watch ```

### 安装rpk包
1  启动HTTP服务器
``` npm run server -- --port 8080 ```

### 打包部署

[快应用部署文档](https://doc.quickapp.cn/tools/compiling-tools.html)

* 编译打包: 在工程的根目录下运行，编译后的工程目录在/build，生成的应用路径为/dist/.rpk

```
npm run build

```

* 增加release签名: 通过openssl命令等工具生成签名文件private.pem、certificate.pem，例如：在工程的sign目录下创建release目录，将私钥文件private.pem和证书文件certificate.pem拷贝进去

```
openssl req -newkey rsa:2048 -nodes -keyout private.pem -x509 -days 3650 -out certificate.pem

```

* 发布程序包: 发布程序包前需要增加release签名，然后在工程的根目录下运行,生成的应用路径为/dist/.signed.rpk

```
npm run release

```

### 项目相关：

1、UI：

https://lanhuapp.com/url/iHsq8-m6HvE

2、API：

https://www.eolinker.com/#/share/index?shareCode=e754iF

3、原型：

https://www.xiaopiu.com/h5/byId?type=project&id=5d27eded41a61c2f674f2218

### 注意：快应用踩坑

一、部署的问题：

1、 第一次正式上线release的时候妥善保存生成的证书文件, 以后更新包的时候直接执行：npm run release

```
第一步 先根目录运行  npm run build
第二步 在sign 文件夹 新建  release 文件夹
第三步 在release文件夹 运行 openssl req -newkey rsa:2048 -nodes -keyout private.pem -x509 -days 3650 -out certificate.pem
第四步 填写 信息
第五步 切换到根目录  运行 npm run release

```

2、关于版本号(versionName、versionCode)

```
应用版本名称、版本号（versionName、versionCode）
应用版本名称、版本号为开发者的应用包维护的版本信息
应用版本名称为主版本.次版本格式
应用版本号为整数，从1开始，每次更新上架请自增1
```


### release文件夹中的两个证书文件：

1、certidicate.pem

```
-----BEGIN CERTIFICATE-----
MIIEcDCCA1gCCQCpVTW7TQzMIjANBgkqhkiG9w0BAQsFADCB+TELMAkGA1UEBhMC
emgxEDAOBgNVBAgMB2JlaWppbmcxEDAOBgNVBAcMB2JlaWppbmcxUTBPBgNVBAoM
SMOpwofCjcOlwrrChsOpwprChsOpwpHCq8OnwonCqcOkwrjCmsOnwq7CocOnwpDC
hsOmwpzCicOpwpnCkMOlwoXCrMOlwo/CuDFRME8GA1UECwxIw6nCh8KNw6XCusKG
w6nCmsKGw6nCkcKrw6fCicKpw6TCuMKaw6fCrsKhw6fCkMKGw6bCnMKJw6nCmcKQ
w6XChcKsw6XCj8K4MSAwHgYDVQQDDBdodHRwOi8vd3d3LmxvbmNpbndnLmNvbTAe
Fw0xOTA5MjMxNDEyNThaFw0yOTA5MjAxNDEyNThaMIH5MQswCQYDVQQGEwJ6aDEQ
MA4GA1UECAwHYmVpamluZzEQMA4GA1UEBwwHYmVpamluZzFRME8GA1UECgxIw6nC
h8KNw6XCusKGw6nCmsKGw6nCkcKrw6fCicKpw6TCuMKaw6fCrsKhw6fCkMKGw6bC
nMKJw6nCmcKQw6XChcKsw6XCj8K4MVEwTwYDVQQLDEjDqcKHwo3DpcK6wobDqcKa
wobDqcKRwqvDp8KJwqnDpMK4wprDp8KuwqHDp8KQwobDpsKcwonDqcKZwpDDpcKF
wqzDpcKPwrgxIDAeBgNVBAMMF2h0dHA6Ly93d3cubG9uY2lud2cuY29tMIIBIjAN
BgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1OkZEIQO764ivoPIudD90J/LRs6j
JWMso0j1CGD1cEfpPO9l4Co+xBSkNWkVl2gqKMJXK0LCF4eO4e/dLHKUFiOpwAq3
ghx7ShKb3BU/UlpTDT8WCXSk8qctIThqjn9lq8nYRZRWFE6JicHhdr6Wjdjwe/ZM
cfQTEvjuixnwQbX/fPb2O1nELKEsUdTIl1+/4cA9n5xu+2hQnrYHu0T8nznuGUVh
QfQS2oB5xKNvpNXkcVxbwPMKCtmkYhrIjxXGqRfsCVj8uTfEedsyC6JJpqyc/Axx
vl0uuJSoUGgAED0qDP33kbLCRLFRWZOLzpMXB2TpTFUAoqJ7L73x6PA0EQIDAQAB
MA0GCSqGSIb3DQEBCwUAA4IBAQBg9yh3SM36fah1wCi42KAEjq5BVs7C81kIYwvl
DAX1TMs9EEYf4BCgqrZ4zNgSF6ryqIhmgWWo8F7E23VUZI21+YMkiqYzJ7Pr5Qy3
GXUmXguXkWDkHkE4Mw05ahAuzvsgbpYzLhiSDy/qqVOttKt7MuXuxTaK3JpsFNkw
ZURt6AVFcO06K5X8KoBH1rpjP2h7TLngOPSwuvV96WyPNHIXcI13hDafS/GWcm9X
NInCxDIZtmu8usNxLIRGJfSkiRs5FIsozAcXPYcMnKfbE2HuUTTK5W2dv4Tidra+
7w5/Sj5DeHYLbFgUzscZpDRT4wW2XuMXUTg2GV6PnMW73/d2
-----END CERTIFICATE-----

```

2、private.pem

```

-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDU6RkQhA7vriK+
g8i50P3Qn8tGzqMlYyyjSPUIYPVwR+k872XgKj7EFKQ1aRWXaCoowlcrQsIXh47h
790scpQWI6nACreCHHtKEpvcFT9SWlMNPxYJdKTypy0hOGqOf2WrydhFlFYUTomJ
weF2vpaN2PB79kxx9BMS+O6LGfBBtf989vY7WcQsoSxR1MiXX7/hwD2fnG77aFCe
tge7RPyfOe4ZRWFB9BLagHnEo2+k1eRxXFvA8woK2aRiGsiPFcapF+wJWPy5N8R5
2zILokmmrJz8DHG+XS64lKhQaAAQPSoM/feRssJEsVFZk4vOkxcHZOlMVQCionsv
vfHo8DQRAgMBAAECggEAAWF1mSbSFfnSHdwq7BGP4891eQMUCcUH4BM0C5bdYJoG
yC9hQL/lYk4j9ni0/CNfyp3gBNbM/WwSoCJ3E7e2gCJBEo6/O+fFYOiX/ChjHbya
N0bGdM891pkA8Os1vbDTzvZjIahhmoYb3DnWpXd88HSMsrEZM8/6Y7Abk+laJoLt
mTrKdNtb1/VRIkGdBx3sFmXYwe2wkfz//ihj+vpeIKlKyMIhMK+gaDuAUgcgqrRI
N8A/DuiyZroxb1V/WXaNwt8pLl5EdB3O9rrZlYiGiEn5dL/75K6XuftLuZXbJpac
J3XqgaeWiX4ivNpVScHo8iJgOsMUlcX0gqHC16czcQKBgQD6BpyXNcEp2677WEsf
hOqM/XQklDjdkupm9oEflNgXHkP36VOvlaIWGrDaZMjJJ3k45PSXmmTvXQfvMi0d
skldvZwSAnr88F4a889l/44CMsC+B9jUfJHVE5j26qrU4ksiLIbi97FTOxpwXEHp
ZWi+elJdWy1LRcEiTFONji6C9QKBgQDZ/3R2H5vLhKbXezIl6+/0qBoCSl3YrgV0
Gmw9dlQi7SGqQqs/8H8bjd7zYpiTUNGS1QKvk7p9z8uWJlTcR3kmZ52NNZSekxU/
L2thzV5UNsdH7em9YgdW451M4ETbZrXzWrNV6g/GVHpt8m8Qljj7KONYDnvUK8Op
QAO00f8TLQKBgQDxv0jTL8eIeIA1SIbCgBrlnf8ZizN8khwQ2BG7foh9uebQIwum
f1DMfJw5Xi+Bx6f/KemRWFh11IbicaqLxyIHAFmSVFGklaj3+Hu1TKZ7W6VfWGj/
8z5yPtOtEvOAiRlKfrEhbYtIRaJnt9yHFmVznwRafdlKqbR3PEOhYDN6rQKBgQCD
Gcr7QvUZxvPjgPZese6D7xh9KiYYKkejVESmDeR5gKyPTTrZ4BNBCef77N6fMapn
qGzOFITCJtZjvTeppd4pB4VLp95yIzhS4Hyuu6gv8yWTj3PTbgHF8mrmEbW3UKS5
7mENmQ7VknZyaqr6ia1I9oUKruMvbQZlYdcYxnWlHQKBgQDYrlQWdKtLEzMmpjXO
KQ+eNpFjyKE45uULKOHPvbQB3FUEE0sDEvVFSIrJEkZW5I+LS9tteCyB5DnGVBWQ
L2WPbWqVjBDC3dSPdO81F+YCKa7W4NkBcrOoLWwO0+flIRP/lO+tysz09XIyEioK
IEZ9/TzBjZvwDTtLM9vZv0tNBg==
-----END PRIVATE KEY-----

```


### 上传文件流程

图片上传的流程

1、选择本地图片，得到uri
https://doc.quickapp.cn/features/system/media.html?h=pickImage

2、上传图片，通过给后端接口传files，获取你返回的数据
https://doc.quickapp.cn/features/system/request.html?h=request.upload

