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
const { Router, Route, hashHistory, Link  } = ReactRouter


class UsersMenu extends React.Component {
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

        // this.onclick = (e) => {
        //     console.log( e.key)
        //     this.setState({
        //         selectedKey: e.key
        //     });  
    }

    render() {
        const TabPane = Tabs.TabPane;
        const {children} = this.props;
        return (
            <Layout>
                <Sider
                    trigger={null}  collapsible  collapsed={this.state.collapsed} mode="inline" theme="dark"
                    style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0,}}
                    
                >
                    <div className="logo"><img width={32} height={32} src="icon.svg" /></div>
                    <Menu
                        defaultSelectedKeys={['']}
                        defaultOpenKeys={['other1','homepage']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                        // style={{ width: 256 }}
                        // onClick={this.onclick}
                        // selectedKeys={[this.state.selectedKey]}
                        >

                        <SubMenu key="homepage" title={<span><Icon type="home" /><span> 主页</span></span>}>
                            <Menu.Item key="home">
                                <Link to={'/'}> 首页</Link>
                            </Menu.Item>

                        </SubMenu>
                        
                        <SubMenu key="usrmgr" title={<span><Icon type="user" /><span> 用户管理</span></span>}>
                            <Menu.Item key="usrlist">
                                <Link to={'/usrlist'}> 用户列表</Link>
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="other1" title={<span><Icon type="appstore" /><span> 其他</span></span>}>
                        
                            <Menu.Item key="notification">
                                <Link to="/notification"> 通知</Link>
                            </Menu.Item>
                            <Menu.Item key="pagination">
                                <Link to="/pagination"> 分页控件</Link>
                            </Menu.Item>
                            <SubMenu key="tables" title={<span><Icon type="mail" /><span> 表格</span></span>}>
                                <Menu.Item key="table1">
                                    <Link to="/table1">表格1</Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="timeline">
                                <Link to="/timeline">时间轴</Link>
                            </Menu.Item>
                        </SubMenu>
                        
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
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{  position: 'fixed', zIndex: 1, width: '100%', background: '#fff', padding: 0 }}>
                        {/* <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        /> */}
                    </Header>
                    <Content style={{
                          background: '#fff', minHeight: 280,  margin: '24px 16px 0', overflow: 'initial' 
                    }}>
                        {/* <Link to="/">Ant Design 学习</Link> */}
                        <div id="context">
                            {children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                      <a href={'https://ant.design/docs/react/getting-started-cn'}>Ant Design</a> ying32 学习例程
                    </Footer>
                </Layout>
 
            </Layout>
    


        );
      }
}

// 主页
class Home extends React.Component {
    render() {
      console.log(this.props)
       return (
           <div>Hello!</div>
       )
    }
}

// post
function post(url, params) {
    return fetch(url, params, 'POST', 'application/x-www-form-urlencoded')
}

// get
function get(url) {
    return fetch(url, "", 'GET', '')
}

// 登录表单
class LoginForm extends React.Component {
    constructor(props) {
       super(props)
       
       this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    post('/login', values)
                    // 成功的回调
                    .then((res) => {
                        console.log(res)
                        if(res){
                            message.info('登录成功');
                            // 页面跳转
                            this.context.router.push('/');
                        }else{
                            message.info('登录失败,账号或密码错误');
                        }
                    });
                }
            });
        }

         
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-wrapper">
                <div className="login-body">
                    <header className="login-header">
                        登录
                    </header>
            
                    <section className="login-form">
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
                            
                            </FormItem>
                        </Form>
                    </section>
                </div>
            </div>        
        );
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
};
    
const Login = Form.create()(LoginForm);

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

// 路由
class Routers extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route component={UsersMenu}>
                    <Route path="/" component={Home} exact />
                    <Route path="/notification" component={NotificationMsg}/> 
                    <Route path="/pagination" component={PaginationTest}/> 
                    <Route path="/table1" component={Table1}/> 
                    <Route path="/timeline" component={TimeLineTest}/>    
                </Route> 
                <Route path="/login" component={Login}/>
            </Router >                     
        )
    }
}

 
ReactDOM.render(<Routers />, document.getElementById('app'));

// ReactDOM.render(<Home />, document.getElementById('app'));