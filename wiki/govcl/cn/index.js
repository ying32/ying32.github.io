(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.unknown = mod.exports;
    }
})(this, function () {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    // 语言设置
    // moment.locale('zh-cn');

    // 导入

    var Layout = antd.Layout;
    var Menu = antd.Menu;
    var Icon = antd.Icon;
    var SubMenu = antd.Menu.SubMenu;
    var Tooltip = antd.Tooltip;

    var Header = Layout.Header,
        Sider = Layout.Sider,
        Content = Layout.Content,
        Footer = Layout.Footer;


    var FormItem = antd.Form.Item;
    var Form = antd.Form;
    var Input = antd.Input;
    var Button = antd.Button;
    var Checkbox = antd.Checkbox;

    var notification = antd.notification;

    var Pagination = antd.Pagination;

    var Table = antd.Table;
    var Divider = antd.Divider;
    var Tag = antd.Tag;

    var Popconfirm = antd.Popconfirm;
    var message = antd.message;

    var Timeline = antd.Timeline;

    var Tabs = antd.Tabs;

    // const Row = antd.Row;
    // const Col = antd.CRow

    // const LocaleProvider = antd.LocaleProvider;

    // // import zhCN from 'antd/lib/locale-provider/zh_CN';
    // const zhCN = antd.zh_CN;

    // 主页

    var Home = function (_React$Component) {
        _inherits(Home, _React$Component);

        function Home(props) {
            _classCallCheck(this, Home);

            var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

            _this.state = {
                collapsed: false,
                selectedKey: ""
            };

            _this.toggle = function () {
                _this.setState({
                    collapsed: !_this.state.collapsed
                });
            };

            _this.onclick = function (e) {
                console.log(e.key);
                _this.setState({
                    selectedKey: e.key
                });
                var mountNode = document.getElementById('context');
                switch (e.key) {
                    case "form":
                        var WrappedNormalLoginForm = Form.create()(LoginForm);
                        ReactDOM.render(React.createElement(WrappedNormalLoginForm, null), mountNode);
                        break;

                    case "notification":

                        ReactDOM.render(React.createElement(NotificationMsg, null), mountNode);
                        break;

                    case "pagination":

                        ReactDOM.render(React.createElement(PaginationTest, null), mountNode);
                        break;

                    case "table1":
                        ReactDOM.render(React.createElement(Table1, null), mountNode);
                        break;

                    case "timeline":
                        ReactDOM.render(React.createElement(TimeLineTest, null), mountNode);
                        break;

                    default:
                        break;
                }
            };

            return _this;
        }

        _createClass(Home, [{
            key: "render",
            value: function render() {
                var TabPane = Tabs.TabPane;

                return (
                    // <LocaleProvider locale={zhCN}>
                    React.createElement(
                        Layout,
                        { style: { minHeight: '100vh' } },
                        React.createElement(
                            Header,
                            { id: 'header' },
                            React.createElement(
                                "span",
                                null,
                                "GoVCL WIKI"
                            ),
                            React.createElement(Icon, {
                                className: "trigger",
                                type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
                                onClick: this.toggle
                            })
                        ),
                        React.createElement(
                            Layout,
                            null,
                            React.createElement(
                                Sider,
                                { trigger: null, collapsible: true, collapsed: this.state.collapsed },
                                React.createElement(
                                    "div",
                                    { className: "logo" },
                                    React.createElement("img", { width: 32, height: 32, src: "icon.svg" })
                                ),
                                React.createElement(
                                    Menu,
                                    {
                                        defaultSelectedKeys: [''],
                                        defaultOpenKeys: ['tables'],
                                        mode: "inline",
                                        theme: "dark",
                                        inlineCollapsed: this.state.collapsed,
                                        onClick: this.onclick,
                                        selectedKeys: [this.state.selectedKey]
                                    },
                                    React.createElement(
                                        Menu.Item,
                                        { key: "form" },
                                        React.createElement(antd.Icon, { type: "pie-chart" }),
                                        React.createElement(
                                            "span",
                                            null,
                                            "\u8868\u5355"
                                        )
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "notification" },
                                        React.createElement(Icon, { type: "desktop" }),
                                        React.createElement(
                                            "span",
                                            null,
                                            "\u901A\u77E5"
                                        )
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "pagination" },
                                        React.createElement(Icon, { type: "inbox" }),
                                        React.createElement(
                                            "span",
                                            null,
                                            "\u5206\u9875\u63A7\u4EF6"
                                        )
                                    ),
                                    React.createElement(
                                        SubMenu,
                                        { key: "tables", title: React.createElement(
                                                "span",
                                                null,
                                                React.createElement(Icon, { type: "mail" }),
                                                React.createElement(
                                                    "span",
                                                    null,
                                                    "\u8868\u683C"
                                                )
                                            ) },
                                        React.createElement(
                                            Menu.Item,
                                            { key: "table1" },
                                            "\u8868\u683C1"
                                        )
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "timeline" },
                                        React.createElement(Icon, { type: "desktop" }),
                                        React.createElement(
                                            "span",
                                            null,
                                            "\u65F6\u95F4\u8F74"
                                        )
                                    ),
                                    React.createElement(
                                        SubMenu,
                                        { key: "sub2", title: React.createElement(
                                                "span",
                                                null,
                                                React.createElement(Icon, { type: "appstore" }),
                                                React.createElement(
                                                    "span",
                                                    null,
                                                    "Navigation Two"
                                                )
                                            ) },
                                        React.createElement(
                                            Menu.Item,
                                            { key: "9" },
                                            "Option 9"
                                        ),
                                        React.createElement(
                                            Menu.Item,
                                            { key: "10" },
                                            "Option 10"
                                        ),
                                        React.createElement(
                                            SubMenu,
                                            { key: "sub3", title: "Submenu" },
                                            React.createElement(
                                                Menu.Item,
                                                { key: "11" },
                                                "Option 11"
                                            ),
                                            React.createElement(
                                                Menu.Item,
                                                { key: "12" },
                                                "Option 12"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                Layout,
                                null,
                                React.createElement(
                                    Tabs,
                                    { defaultActiveKey: "2", style: { padding: 15 } },
                                    React.createElement(
                                        TabPane,
                                        { tab: React.createElement(
                                                "span",
                                                null,
                                                React.createElement(Icon, { type: "apple" }),
                                                "\u7B2C\u4E00\u9875"
                                            ), key: "1" },
                                        "Tab 1"
                                    ),
                                    React.createElement(
                                        TabPane,
                                        { tab: React.createElement(
                                                "span",
                                                null,
                                                React.createElement(Icon, { type: "android" }),
                                                "\u7B2C\u4E8C\u9875"
                                            ), key: "2" },
                                        "Tab 2"
                                    )
                                ),
                                React.createElement(
                                    Content,
                                    { style: { margin: '0px 16px', padding: 24, background: '#fff', minHeight: 280 } },
                                    React.createElement("div", { id: "context" })
                                )
                            )
                        ),
                        React.createElement(
                            Footer,
                            { style: { textAlign: 'center' } },
                            React.createElement(
                                "a",
                                { href: 'https://github.com/ying32/govcl' },
                                "govcl"
                            ),
                            " ying32 \u5B66\u4E60\u4F8B\u7A0B"
                        )
                    )
                    // </LocaleProvider>

                );
            }
        }]);

        return Home;
    }(React.Component);

    var LoginForm = function (_React$Component2) {
        _inherits(LoginForm, _React$Component2);

        function LoginForm() {
            _classCallCheck(this, LoginForm);

            var _this2 = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));

            _this2.handleSubmit = function (e) {
                e.preventDefault();
                _this2.props.form.validateFields(function (err, values) {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            };
            return _this2;
        }

        _createClass(LoginForm, [{
            key: "render",
            value: function render() {
                var getFieldDecorator = this.props.form.getFieldDecorator;

                return React.createElement(
                    Form,
                    { onSubmit: this.handleSubmit, className: "login-form" },
                    React.createElement(
                        FormItem,
                        null,
                        getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名！' }]
                        })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "user", style: { color: 'rgba(0,0,0,.25)' } }), placeholder: "\u7528\u6237\u540D" }))
                    ),
                    React.createElement(
                        FormItem,
                        null,
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入你的密码！' }]
                        })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "lock", style: { color: 'rgba(0,0,0,.25)' } }), type: "password", placeholder: "\u5BC6\u7801" }))
                    ),
                    React.createElement(
                        FormItem,
                        null,
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(React.createElement(
                            Checkbox,
                            null,
                            "\u8BB0\u4F4F\u6211"
                        )),
                        React.createElement(
                            "a",
                            { className: "login-form-forgot", href: "" },
                            "\u5FD8\u8BB0\u5BC6\u7801"
                        ),
                        React.createElement(
                            Button,
                            { type: "primary", htmlType: "submit", className: "login-form-button" },
                            "\u767B\u5F55"
                        ),
                        "\u6216\u8005 ",
                        React.createElement(
                            "a",
                            { href: "" },
                            "\u6CE8\u518C\uFF01"
                        )
                    )
                );
            }
        }]);

        return LoginForm;
    }(React.Component);

    var NotificationMsg = function (_React$Component3) {
        _inherits(NotificationMsg, _React$Component3);

        function NotificationMsg() {
            _classCallCheck(this, NotificationMsg);

            return _possibleConstructorReturn(this, (NotificationMsg.__proto__ || Object.getPrototypeOf(NotificationMsg)).apply(this, arguments));
        }

        _createClass(NotificationMsg, [{
            key: "render",
            value: function render() {
                var openNotificationWithIcon = function openNotificationWithIcon(type) {
                    notification[type]({
                        message: '通知标题',
                        description: '这是通知的内容。 这是通知的内容。 这是通知的内容。'
                    });
                };

                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        Button,
                        { onClick: function onClick() {
                                return openNotificationWithIcon('success');
                            } },
                        "\u6210\u529F"
                    ),
                    React.createElement(
                        Button,
                        { onClick: function onClick() {
                                return openNotificationWithIcon('info');
                            } },
                        "\u4FE1\u606F"
                    ),
                    React.createElement(
                        Button,
                        { onClick: function onClick() {
                                return openNotificationWithIcon('warning');
                            } },
                        "\u8B66\u544A"
                    ),
                    React.createElement(
                        Button,
                        { onClick: function onClick() {
                                return openNotificationWithIcon('error');
                            } },
                        "\u9519\u8BEF"
                    )
                );
            }
        }]);

        return NotificationMsg;
    }(React.Component);

    var PaginationTest = function (_React$Component4) {
        _inherits(PaginationTest, _React$Component4);

        function PaginationTest() {
            _classCallCheck(this, PaginationTest);

            var _this4 = _possibleConstructorReturn(this, (PaginationTest.__proto__ || Object.getPrototypeOf(PaginationTest)).call(this));

            _this4.onChange = function (pageNumber) {
                console.log('Page: ', pageNumber);
            };

            _this4.onShowSizeChange = function (current, pageSize) {
                console.log(current, pageSize);
            };
            return _this4;
        }

        _createClass(PaginationTest, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Pagination, { defaultCurrent: 1, total: 50 }),
                    React.createElement("br", null),
                    React.createElement(Pagination, { defaultCurrent: 6, total: 500 }),
                    React.createElement("br", null),
                    React.createElement(Pagination, { showSizeChanger: true, onShowSizeChange: this.onShowSizeChange, defaultCurrent: 3, total: 500 }),
                    React.createElement("br", null),
                    React.createElement(Pagination, { showQuickJumper: true, defaultCurrent: 2, total: 500, onChange: this.onChange })
                );
            }
        }]);

        return PaginationTest;
    }(React.Component);

    /// 表格


    function confirm(e) {
        console.log(e);
        message.success('确定了哦');
    }

    function cancel(e) {
        console.log(e);
        message.error('我不删除了');
    }

    function messageTip(e) {
        console.log(e);
        message.success('啊啊啊啊啊');
    }

    // 表格共享数据
    var tablecolumns = [{
        title: '名子',
        dataIndex: 'name',
        key: 'name',
        render: function render(text) {
            return React.createElement(
                "a",
                { href: "javascript:;" },
                text
            );
        }
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    }, {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
    }, {
        title: '标记',
        key: 'tags',
        dataIndex: 'tags',
        render: function render(tags) {
            return React.createElement(
                "span",
                null,
                tags.map(function (tag) {
                    return React.createElement(
                        Tag,
                        { color: "blue", key: tag },
                        tag
                    );
                })
            );
        }
    }, {
        title: '动作',
        key: 'action',
        render: function render(text, record) {
            return React.createElement(
                "span",
                null,
                React.createElement(
                    "a",
                    { href: "javascript:;" },
                    "\u63D0\u793A"
                ),
                React.createElement(Divider, { type: "vertical" }),
                React.createElement(
                    Popconfirm,
                    { title: "\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F", onConfirm: confirm, onCancel: cancel, okText: "\u786E\u5B9A", cancelText: "\u624D\u4E0D\u5462", icon: React.createElement(Icon, { type: "question-circle-o", style: { color: 'red' } }) },
                    React.createElement(
                        "a",
                        { href: "javascript:;" },
                        "\u5220\u9664"
                    )
                )
            );
        }
    }];

    var tabledata = [{
        key: '1',
        name: '李二',
        age: 32,
        address: '北京',
        tags: ['大傻', '二货']
    }, {
        key: '2',
        name: '张三',
        age: 42,
        address: '上海',
        tags: ['失败者']
    }, {
        key: '3',
        name: '吴四',
        age: 32,
        address: '广州',
        tags: ['非常酷', '大侠']
    }, {
        key: '3',
        name: '王五',
        age: 32,
        address: '长沙',
        tags: ['不错哦', '有点傻']
    }];

    // 表格1

    var Table1 = function (_React$Component5) {
        _inherits(Table1, _React$Component5);

        function Table1() {
            _classCallCheck(this, Table1);

            return _possibleConstructorReturn(this, (Table1.__proto__ || Object.getPrototypeOf(Table1)).apply(this, arguments));
        }

        _createClass(Table1, [{
            key: "render",
            value: function render() {
                return React.createElement(Table, { columns: tablecolumns, dataSource: tabledata });
            }
        }]);

        return Table1;
    }(React.Component);

    var TimeLineTest = function (_React$Component6) {
        _inherits(TimeLineTest, _React$Component6);

        function TimeLineTest() {
            _classCallCheck(this, TimeLineTest);

            return _possibleConstructorReturn(this, (TimeLineTest.__proto__ || Object.getPrototypeOf(TimeLineTest)).apply(this, arguments));
        }

        _createClass(TimeLineTest, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    Timeline,
                    { mode: "alternate" },
                    React.createElement(
                        Timeline.Item,
                        null,
                        "\u521B\u5EFA\u4E00\u4E2A\u670D\u52A1 2018-10-27"
                    ),
                    React.createElement(
                        Timeline.Item,
                        { color: "green" },
                        "\u7B2C\u4E8C\u6B21 2018-10-27"
                    ),
                    React.createElement(
                        Timeline.Item,
                        { dot: React.createElement(Icon, { type: "clock-circle-o", style: { fontSize: '16px' } }) },
                        "\u8C01\u77E5\u9053\u5462\uFF0C\u5C31\u8FD9\u6837\u5B50\u5427\u3002"
                    ),
                    React.createElement(
                        Timeline.Item,
                        { color: "red" },
                        "\u4E71\u4E03\u516B\u7CDF\u7684 2018-10-27"
                    ),
                    React.createElement(
                        Timeline.Item,
                        null,
                        "\u597D\u5427\u7AD9\u70B9\u521B\u5EFA\u4E86 2018-10-27"
                    ),
                    React.createElement(
                        Timeline.Item,
                        { dot: React.createElement(Icon, { type: "clock-circle-o", style: { fontSize: '16px' } }) },
                        "\u6211\u8FD8\u80FD\u8BF4\u5565\u5462\uFF1F 2018-10-27"
                    )
                );
            }
        }]);

        return TimeLineTest;
    }(React.Component);

    ReactDOM.render(React.createElement(Home, null), document.getElementById('app'));
});