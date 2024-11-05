(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{280:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"gsadmincli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gsadmincli"}},[s._v("#")]),s._v(" gsadminCli")]),s._v(" "),t("p",[s._v("为什么会有这个工具，起因是在使用gsadmin项目开发中,有很多重复的工作，而我们真正关注应该是业务，不应该是这些重复的工作，所以就让这些工作交给gsadminCli 来处理吧。它主要能帮你创建 controller、validator、request、event、listener、model(目前仅支持Mysql)、repository。下面我们一起来看看具体怎么使用吧。")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" github.com/sonhineboy/gsadminCli\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"命令介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令介绍"}},[s._v("#")]),s._v(" 命令介绍")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("命令")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("make:controller")]),s._v(" "),t("td",[s._v("创建控制器")])]),s._v(" "),t("tr",[t("td",[s._v("make:validator")]),s._v(" "),t("td",[s._v("创建自定义验证器")])]),s._v(" "),t("tr",[t("td",[s._v("make:request")]),s._v(" "),t("td",[s._v("创建请求结构体")])]),s._v(" "),t("tr",[t("td",[s._v("make:event")]),s._v(" "),t("td",[s._v("创建事件")])]),s._v(" "),t("tr",[t("td",[s._v("make:listener")]),s._v(" "),t("td",[s._v("创建事件监听者")])]),s._v(" "),t("tr",[t("td",[s._v("make:model")]),s._v(" "),t("td",[s._v("创建表模型")])]),s._v(" "),t("tr",[t("td",[s._v("make:repository")]),s._v(" "),t("td",[s._v("创建仓储业务")])])])]),s._v(" "),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("-v")]),s._v(" "),t("td",[s._v("查看版本")])]),s._v(" "),t("tr",[t("td",[s._v("-h")]),s._v(" "),t("td",[s._v("查看帮助信息")])])])]),s._v(" "),t("h3",{attrs:{id:"子命令参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子命令参数"}},[s._v("#")]),s._v(" 子命令参数")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("--package")]),s._v(" "),t("td",[s._v("如果是在根目录创建;必填")])]),s._v(" "),t("tr",[t("td",[s._v("-h")]),s._v(" "),t("td",[s._v("查看帮助信息")])]),s._v(" "),t("tr",[t("td",[s._v("-t")]),s._v(" "),t("td",[s._v("--table 表名 make:model 可用")])]),s._v(" "),t("tr",[t("td",[s._v("-d")]),s._v(" "),t("td",[s._v("--dns 数据库连接dns make:model 可用")])])])]),s._v(" "),t("h3",{attrs:{id:"部分演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部分演示"}},[s._v("#")]),s._v(" 部分演示")]),s._v(" "),t("h4",{attrs:{id:"创建-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-controller"}},[s._v("#")]),s._v(" 创建 controller")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("gsadminCli make:controller ./app/controllers/demoController --package=controllers\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("代码如下")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" controllers\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/gin-gonic/gin"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" DemoController "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("controller "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("DemoController"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ctx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("controller "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("DemoController"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Save")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ctx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("controller "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("DemoController"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Edit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ctx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("controller "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("DemoController"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Delete")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ctx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("controller "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("DemoController"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ctx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h4",{attrs:{id:"创建validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建validator"}},[s._v("#")]),s._v(" 创建validator")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("gsadminCli make:validator ./app/validators/demoValidator\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("代码如下")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" validators\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/go-playground/validator/v10"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/sonhineboy/gsadminValidator/ginValidator"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" DemoValidator "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tginValidator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BaseValidator\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//自定义验证名称 TagName")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("DemoValidator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TagName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Demo"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//错误提示信息 Messages")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("DemoValidator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Messages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//This is error message")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//验证规则 Validator  true 通过 false 未通过")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("DemoValidator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Validator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fl validator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FieldLevel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//To Do .....")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("h4",{attrs:{id:"创建表模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建表模型"}},[s._v("#")]),s._v(" 创建表模型")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("gsadminCli make:model ./app/models/member.go -d='root:@tcp(127.0.0.1:3306)/demo' -t=members\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("代码如下")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('package models\n\nimport (\n\t"fmt"\n\t"github.com/sonhineboy/gsadmin/service/global"\n)\n\ntype Member struct {\n\tglobal.GsModel\n\tName         string `gorm:"column:name;json:name"`\n\tEmail        string `gorm:"column:email;json:email"`\n\tAge          int8   `gorm:"column:age;json:age"`\n\tBirthday     string `gorm:"column:birthday;json:birthday"`\n\tMemberNumber string `gorm:"column:member_number;json:member_number"`\n\tActivatedAt  string `gorm:"column:activated_at;json:activated_at"`\n}\n\nfunc (m *Member) TableName() string {\n\treturn fmt.Sprint(global.Config.Db.TablePrefix, "members")\n}\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);