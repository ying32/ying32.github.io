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
    // const Tooltip = antd.Tooltip;

    var Header = Layout.Header,
        Sider = Layout.Sider,
        Content = Layout.Content,
        Footer = Layout.Footer;

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

            _this.previewContent = function (key, node) {
                $.get("/wiki/govcl/cn/mds/" + key, function (result) {
                    $(node).html(marked(result, { gfm: true, breaks: true, tables: true }));
                });
            };

            _this.onclick = function (e) {
                console.log(e.key);
                _this.setState({
                    selectedKey: e.key
                });
                var mountNode = document.getElementById('context');
                switch (e.key) {
                    default:
                        _this.previewContent(e.key, mountNode);
                        break;
                }
            };
            return _this;
        }

        _createClass(Home, [{
            key: "render",
            value: function render() {
                // const TabPane = Tabs.TabPane;

                return React.createElement(
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
                            { trigger: null, collapsible: true, collapsed: this.state.collapsed, width: 280 },
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
                                    SubMenu,
                                    { key: "home", title: React.createElement(
                                            "span",
                                            null,
                                            React.createElement(Icon, { type: "home" }),
                                            React.createElement(
                                                "span",
                                                null,
                                                "\u4E3B\u9875"
                                            )
                                        ) },
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u5165\u95E8\u5FC5\u8BFB.md" },
                                        "\u5165\u95E8\u5FC5\u8BFB"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u5173\u4E8Egovcl\u66F4\u65B0\u8FDB\u5EA6.md" },
                                        "\u5173\u4E8Egovcl\u66F4\u65B0\u8FDB\u5EA6"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "UI\u7684\u5E03\u5C40.markdown" },
                                        "UI\u7684\u5E03\u5C40"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u652F\u6301\u7684\u4E8B\u4EF6.markdown" },
                                        "\u652F\u6301\u7684\u4E8B\u4EF6"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u652F\u6301\u7684\u7EC4\u4EF6\u5217\u8868.markdown" },
                                        "\u652F\u6301\u7684\u7EC4\u4EF6\u5217\u8868"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u5BF9\u8C61\u6307\u9488\u95EE\u9898\u8BF4\u660E\uFF08\u91CD\u8981\uFF09.md" },
                                        "\u5BF9\u8C61\u6307\u9488\u95EE\u9898\u8BF4\u660E\uFF08\u91CD\u8981\uFF09"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u534F\u7A0B\u4E2D\u64CD\u4F5CUI\u7EC4\u4EF6\uFF08\u91CD\u8981\uFF09.md" },
                                        "\u534F\u7A0B\u4E2D\u64CD\u4F5CUI\u7EC4\u4EF6\uFF08\u91CD\u8981\uFF09"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u81EA\u52A8\u5173\u8054\u4E8B\u4EF6.md" },
                                        "\u81EA\u52A8\u5173\u8054\u4E8B\u4EF6"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "res2go\u5DE5\u5177\u8BF4\u660E.md" },
                                        "res2go\u5DE5\u5177\u8BF4\u660E"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "Govcl\u5F00\u53D1APP\u89C4\u8303.md" },
                                        "Govcl\u5F00\u53D1APP\u89C4\u8303"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "Go\u6E90\u7801\u3001libvcl\u3001liblcl\u4E2D\u547D\u540D\u89C4\u5219.markdown" },
                                        "Go\u6E90\u7801\u3001libvcl\u3001liblcl\u4E2D\u547D\u540D\u89C4\u5219"
                                    )
                                ),
                                React.createElement(
                                    SubMenu,
                                    { key: "components", title: React.createElement(
                                            "span",
                                            null,
                                            React.createElement(Icon, { type: "desktop" }),
                                            React.createElement(
                                                "span",
                                                null,
                                                "\u7EC4\u4EF6"
                                            )
                                        ) },
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u57FA\u672C\u7EC4\u4EF6/Delphi-VCL\u7EC4\u4EF6WIKI.markdown" },
                                        "Delphi-VCL\u7EC4\u4EF6WIKI"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u57FA\u672C\u7EC4\u4EF6/Lazarus-LCL\u7EC4\u4EF6WIKI.markdown" },
                                        "Lazarus-LCL\u7EC4\u4EF6WIKI"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u57FA\u672C\u7EC4\u4EF6/\u5E38\u89C1\u5C5E\u6027.markdown" },
                                        "\u5E38\u89C1\u5C5E\u6027"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u57FA\u672C\u7EC4\u4EF6/\u5E38\u89C1\u4E8B\u4EF6.markdown" },
                                        "\u5E38\u89C1\u4E8B\u4EF6"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u57FA\u672C\u7EC4\u4EF6/\u5E38\u89C1\u65B9\u6CD5.markdown" },
                                        "\u5E38\u89C1\u65B9\u6CD5"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        { key: "\u57FA\u672C\u7EC4\u4EF6/\u5BF9\u8C61\u9ED8\u8BA4\u65B9\u6CD5.markdown" },
                                        "\u5BF9\u8C61\u9ED8\u8BA4\u65B9\u6CD5"
                                    ),
                                    React.createElement(
                                        SubMenu,
                                        { key: "basecomponents", title: React.createElement(
                                                "span",
                                                null,
                                                React.createElement(Icon, { type: "home" }),
                                                React.createElement(
                                                    "span",
                                                    null,
                                                    "\u57FA\u7840\u7EC4\u4EF6"
                                                )
                                            ) },
                                        React.createElement(
                                            Menu.Item,
                                            { key: "\u57FA\u672C\u7EC4\u4EF6/\u7EC4\u4EF6/TForm.markdown" },
                                            "TForm"
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            Layout,
                            null,
                            React.createElement(
                                Content,
                                { style: { margin: '0px 16px', padding: 24, background: '#fff', minHeight: 280 } },
                                React.createElement(
                                    "div",
                                    { id: "context" },
                                    React.createElement(
                                        "span",
                                        null,
                                        "GoVCL WIKI"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        Footer,
                        { style: { textAlign: 'center' } },
                        React.createElement(
                            "a",
                            { href: 'https://github.com/ying32/govcl' },
                            "govcl WIKI"
                        ),
                        " ying32"
                    )
                )
                // </LocaleProvider>
                ;
            }
        }]);

        return Home;
    }(React.Component);

    ReactDOM.render(React.createElement(Home, null), document.getElementById('app'));
});