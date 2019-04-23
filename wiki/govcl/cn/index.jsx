// 语言设置
// moment.locale('zh-cn');

// 导入

const Layout = antd.Layout;
const Menu = antd.Menu;
const Icon = antd.Icon;
const SubMenu = antd.Menu.SubMenu;
const Tooltip = antd.Tooltip;
 
const { Header, Sider, Content, Footer } = Layout;

const FormItem = antd.Form.Item;
const Form = antd.Form;
const Input = antd.Input;
const Button = antd.Button;
const Checkbox = antd.Checkbox;

const notification = antd.notification;

const Pagination = antd.Pagination;

const Table = antd.Table;
const Divider = antd.Divider;
const Tag = antd.Tag;

const Popconfirm = antd.Popconfirm;
const message = antd.message;

const Timeline = antd.Timeline;

const Tabs = antd.Tabs;

// const Row = antd.Row;
// const Col = antd.CRow

// const LocaleProvider = antd.LocaleProvider;

// // import zhCN from 'antd/lib/locale-provider/zh_CN';
// const zhCN = antd.zh_CN;

// 主页
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            selectedKey:"",
        };

        this.toggle = () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        }

        this.onclick = (e) => {
            console.log( e.key)
            this.setState({
                selectedKey: e.key
            });
            const mountNode = document.getElementById('context')
            switch (e.key) {
                case "home1":
                    break;
                case "form":
                    const WrappedNormalLoginForm = Form.create()(LoginForm);
                    ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
                    break;

                case "notification":
                
                    ReactDOM.render(<NotificationMsg />, mountNode);
                    break;

                case "pagination":

                    ReactDOM.render(<PaginationTest />, mountNode);
                    break;

                case "table1":
                    ReactDOM.render(<Table1 />, mountNode);
                    break;

                case "timeline":
                    ReactDOM.render(<TimeLineTest />, mountNode)
                    break;
            
                default:
                    break;
            }

           
        }
        
    }

    render() {
        const TabPane = Tabs.TabPane;

        return (
            // <LocaleProvider locale={zhCN}>
                <Layout  style={{ minHeight: '100vh' }}>
  
                    <Header id={'header'}>
                        <span>GoVCL WIKI</span>
                        <Icon
                            className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle} 
                                >
                        </Icon>
                    </Header>

                    <Layout>

                        <Sider trigger={null}  collapsible  collapsed={this.state.collapsed}  width={280}>
                            <div className="logo"><img width={32} height={32} src="icon.svg" />
 
                            </div> 
                            <Menu
                                    defaultSelectedKeys={['']}
                                    defaultOpenKeys={['tables']}
                                    mode="inline"
                                    theme="dark"
                                    inlineCollapsed={this.state.collapsed}
                                    onClick={this.onclick}
                                    selectedKeys={[this.state.selectedKey]}
                                    >
                                    
                                    <SubMenu key="home" title={<span><Icon type="home" /><span>主页</span></span>}>
                                        <Menu.Item key="home_1">入门必读</Menu.Item>
                                        <Menu.Item key="home_2">关于govcl更新进度</Menu.Item>
                                        <Menu.Item key="home_3">UI的布局</Menu.Item>
                                        <Menu.Item key="home_4">支持的事件</Menu.Item>
                                        <Menu.Item key="home_5">支持的组件列表</Menu.Item>
                                        <Menu.Item key="home_6">对象指针问题说明（重要）</Menu.Item>
                                        <Menu.Item key="home_7">协程中操作UI组件（重要）</Menu.Item>
                                        <Menu.Item key="home_8">自动关联事件</Menu.Item>
                                        <Menu.Item key="home_9">res2go工具说明</Menu.Item>
                                        <Menu.Item key="home_10">Govcl开发APP规范</Menu.Item>
                                        <Menu.Item key="home_11">Go源码、libvcl、liblcl中命名规则</Menu.Item>
                                    </SubMenu>

                                    <SubMenu key="components" title={<span><Icon type="desktop" /><span>组件</span></span>}>
                                        <Menu.Item key="components_1">Delphi-VCL组件WIKI</Menu.Item>
                                        <Menu.Item key="components_2">Lazarus-LCL组件WIKI</Menu.Item>
                                        <Menu.Item key="components_3">常见属性</Menu.Item>
                                        <Menu.Item key="components_4">常见事件</Menu.Item>
                                        <Menu.Item key="components_5">常见方法</Menu.Item>
                                        <Menu.Item key="components_6">对象默认方法</Menu.Item>
                                        <SubMenu key="basecomponents" title={<span><Icon type="home" /><span>基础组件</span></span>}>
                                           <Menu.Item key="basecomponents_1">TForm</Menu.Item>
                                        </SubMenu>
                                    </SubMenu>
                                 
                                    <Menu.Item key="notification">
                                        <Icon type="desktop" />
                                        <span>通知</span>
                                    </Menu.Item>
                                    <Menu.Item key="pagination">
                                        <Icon type="inbox" />
                                        <span>分页控件</span>
                                    </Menu.Item>
                                    <SubMenu key="tables" title={<span><Icon type="mail" /><span>表格</span></span>}>
                                        <Menu.Item key="table1">表格1</Menu.Item>
                                    </SubMenu>
                                    <Menu.Item key="timeline">
                                        <Icon type="desktop" />
                                        <span>时间轴</span>
                                    </Menu.Item>

                                    
                                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                                        <Menu.Item key="9">Option 9</Menu.Item>
                                        <Menu.Item key="10">Option 10</Menu.Item>
                                        <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                        </SubMenu>
                                    </SubMenu>
                            </Menu>
                        </Sider>
                  

                        {/* 主体层 */}
                        <Layout>
                            
                           <Tabs defaultActiveKey="2" style={{ padding: 15}} >
                                                <TabPane tab={<span><Icon type="apple" />第一页</span>} key="1">
                                                Tab 1
                                                </TabPane>
                                                <TabPane tab={<span><Icon type="android" />第二页</span>} key="2">
                                                Tab 2
                                                </TabPane>
                            </Tabs>
                                
                            <Content style={{ margin: '0px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                                <div id="context" />
                            </Content>
    
                        </Layout>

                    </Layout>

                     <Footer style={{ textAlign: 'center' }}>
                            <a href={'https://github.com/ying32/govcl'}>govcl WIKI</a> ying32
                    </Footer>
                </Layout>
            // </LocaleProvider>
        );
      }
}



// 登录表单
class LoginForm extends React.Component {
    constructor() {
       super()
       this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名！' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入你的密码！' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>记住我</Checkbox>
                )}
                <a className="login-form-forgot" href="">忘记密码</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
                或者 <a href="">注册！</a>
                </FormItem>
            </Form>
                   
        );
    }
}

// 通知
class NotificationMsg extends React.Component {
    
    render() {
        const openNotificationWithIcon = (type) => {
            notification[type]({
                 message: '通知标题',
                 description: '这是通知的内容。 这是通知的内容。 这是通知的内容。',
            });
        };

        return (
            <div>
                <Button onClick={() => openNotificationWithIcon('success')}>成功</Button>
                <Button onClick={() => openNotificationWithIcon('info')}>信息</Button>
                <Button onClick={() => openNotificationWithIcon('warning')}>警告</Button>
                <Button onClick={() => openNotificationWithIcon('error')}>错误</Button>
            </div>
        );
    }
} 

 // 分页
 class PaginationTest extends React.Component {

    constructor() {
        super()
        this.onChange = (pageNumber) => {
            console.log('Page: ', pageNumber);
        } 

        this.onShowSizeChange = (current, pageSize) => {
            console.log(current, pageSize);
        }
    }

    render() {
         return (
            <div>
                <Pagination defaultCurrent={1} total={50} />
                <br /> 
                <Pagination defaultCurrent={6} total={500} />
                <br />
                <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
                <br />
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
            </div>
         );
     }
 }


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
const tablecolumns = [{
        title: '名子',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: '标记',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                 {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
            </span>
    ),
    }, {
        title: '动作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="javascript:;">提示</a>
                <Divider type="vertical" />
                <Popconfirm title="你确定要删除吗？" onConfirm={confirm} onCancel={cancel} okText="确定" cancelText="才不呢" icon={<Icon type="question-circle-o" style={{ color: 'red' }}  />}>
                    <a href="javascript:;">删除</a>
                </Popconfirm>
            </span>
        ),
    }];

    const tabledata = [{
        key: '1',
        name: '李二',
        age: 32,
        address: '北京',
        tags: ['大傻', '二货'],
    }, {
        key: '2',
        name: '张三',
        age: 42,
        address: '上海',
        tags: ['失败者'],
    }, {
        key: '3',
        name: '吴四',
        age: 32,
        address: '广州',
        tags: ['非常酷', '大侠'],
    }, {
        key: '3',
        name: '王五',
        age: 32,
        address: '长沙',
        tags: ['不错哦', '有点傻'],
    }];


// 表格1
class Table1 extends React.Component {

    render() {
        return (
            <Table columns={tablecolumns} dataSource={tabledata} />
        );
    }
}


// 时间轴
class TimeLineTest extends React.Component {

    render() {
        return (
            <Timeline mode="alternate">
                <Timeline.Item>创建一个服务 2018-10-27</Timeline.Item>
                <Timeline.Item color="green">第二次 2018-10-27</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>谁知道呢，就这样子吧。</Timeline.Item>
                <Timeline.Item color="red">乱七八糟的 2018-10-27</Timeline.Item>
                <Timeline.Item>好吧站点创建了 2018-10-27</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>我还能说啥呢？ 2018-10-27</Timeline.Item>
            </Timeline>
        );
    }
}


ReactDOM.render(<Home />, document.getElementById('app'));