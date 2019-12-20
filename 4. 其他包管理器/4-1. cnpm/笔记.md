# cnpm

> 官网地址：https://npm.taobao.org/

为解决国内用户连接npm registry缓慢的问题，淘宝搭建了自己的registry，即淘宝npm镜像源

过去，npm没有提供修改registry的功能，因此，淘宝提供了一个CLI工具即cnpm，它支持除了```npm publish```以外的所有命令，只不过连接的是淘宝镜像源

如今，npm已经支持修改registry了，可能cnpm唯一的作用就是和npm共存，即如果要使用官方源，则使用npm，如果使用淘宝源，则使用cnpm