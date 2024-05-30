package router

import (
	"github.com/sonhineboy/gsadmin/service/app/controllers/system"
	"github.com/sonhineboy/gsadmin/service/app/middleware"
	"github.com/sonhineboy/gsadmin/service/global"
)

func RouteInit() {

	global.GAD_R.Use(middleware.Limiter(), middleware.Event())
	global.GAD_R.GET("sss", system.Demo)
	global.GAD_R.GET("/api/common/captcha/img/:id/:w/:h", ApiControllers.CommonController.CaptchaImage)
	global.GAD_R.GET("/api/common/captcha/info", ApiControllers.CommonController.CaptchaInfo)
	global.GAD_R.GET("/api/common/version", ApiControllers.CommonController.GetVersion)
	global.GAD_R.POST("/api/user/login", ApiControllers.UserController.Login)
	global.GAD_R.Static("/api/system/common/file", ApiControllers.CommonController.GetFileBasePath())
	global.GAD_R.GET("/api/system/dept/list", system.DeptList)
	global.GAD_R.GET("/api/demo/page", system.DemoUser)
	global.GAD_R.POST("/api/demo/order", system.OrderDemo)
	order := global.GAD_R.Group("/api/order")
	{
		orderController := new(system.OrderController)
		order.GET("/:id", orderController.Get)
		order.POST("/edit/:id", orderController.Edit)
		order.POST("/delete", orderController.Delete)
		order.POST("/save", orderController.Save)
		order.GET("/index", orderController.Index)
	}

	r := global.GAD_R.Group("api")
	{
		SystemApiInit(r)
	}

}
