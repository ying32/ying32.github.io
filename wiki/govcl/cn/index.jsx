// 语言设置
// moment.locale('zh-cn');

// 导入

const Layout = antd.Layout;
const Menu = antd.Menu;
const Icon = antd.Icon;
const SubMenu = antd.Menu.SubMenu;
// const Tooltip = antd.Tooltip;
 
const { Header, Sider, Content, Footer } = Layout;

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

        this.previewContent = (key, node) => {
            $.get("/wiki/govcl/cn/mds/"+key, function(result){
                $(node).html(marked(result, {gfm: true, breaks: true, tables:true}))
            });
         }

        this.onclick = (e) => {
            console.log( e.key)
            this.setState({
                selectedKey: e.key
            });
            const mountNode = document.getElementById('context')
            switch (e.key) {
                default:
                   this.previewContent(e.key, mountNode)
                    break;
            }
        }   
    }

    render() {
        // const TabPane = Tabs.TabPane;

        return (
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
                                    defaultOpenKeys={['home']}
                                    mode="inline"
                                    theme="dark"
                                    inlineCollapsed={this.state.collapsed}
                                    onClick={this.onclick}
                                    selectedKeys={[this.state.selectedKey]}
                                    >
                                    
                                    <SubMenu key="home" title={<span><Icon type="home" /><span>主页</span></span>}>
                                        <Menu.Item key="入门必读.md">入门必读</Menu.Item>
                                        <Menu.Item key="关于govcl更新进度.md">关于govcl更新进度</Menu.Item>
                                        <Menu.Item key="UI的布局.markdown">UI的布局</Menu.Item>
                                        <Menu.Item key="支持的事件.markdown">支持的事件</Menu.Item>
                                        <Menu.Item key="支持的组件列表.markdown">支持的组件列表</Menu.Item>
                                        <Menu.Item key="对象指针问题说明（重要）.md">对象指针问题说明（重要）</Menu.Item>
                                        <Menu.Item key="协程中操作UI组件（重要）.md">协程中操作UI组件（重要）</Menu.Item>
                                        <Menu.Item key="自动关联事件.md">自动关联事件</Menu.Item>
                                        <Menu.Item key="res2go工具说明.md">res2go工具说明</Menu.Item>
                                        <Menu.Item key="Govcl开发APP规范.md">Govcl开发APP规范</Menu.Item>
                                        <Menu.Item key="Go源码、libvcl、liblcl中命名规则.markdown">Go源码、libvcl、liblcl中命名规则</Menu.Item>
                                    </SubMenu>

                                    <SubMenu key="components" title={<span><Icon type="desktop" /><span>组件</span></span>}>
                                        <Menu.Item key="基本组件/Delphi-VCL组件WIKI.markdown">Delphi-VCL组件WIKI</Menu.Item>
                                        <Menu.Item key="基本组件/Lazarus-LCL组件WIKI.markdown">Lazarus-LCL组件WIKI</Menu.Item>
                                        <Menu.Item key="基本组件/常见属性.markdown">常见属性</Menu.Item>
                                        <Menu.Item key="基本组件/常见事件.markdown">常见事件</Menu.Item>
                                        <Menu.Item key="基本组件/常见方法.markdown">常见方法</Menu.Item>
                                        <Menu.Item key="基本组件/对象默认方法.markdown">对象默认方法</Menu.Item>
                                        <SubMenu key="basecomponents" title={<span><Icon type="desktop" /><span>基础组件</span></span>}>
                                           <Menu.Item key="基本组件/组件/TForm.markdown">TForm</Menu.Item>
                                        </SubMenu>
                                    </SubMenu>
                                 
                                 
                            </Menu>
                        </Sider>
                  

                        {/* 主体层 */}
                        <Layout>
                                
                            <Content style={{ margin: '0px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                                <div id="context">
                                  <span>GoVCL WIKI</span>
                                  
                                </div>
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


ReactDOM.render(<Home />, document.getElementById('app'));