/**
 * 声明用到的Antd v组件
 */
import Vue from 'vue'
import {
    Button,
    Icon,
    Row,
    Col,
    Layout,
    Affix,
    Breadcrumb,
    Dropdown,
    Menu,
    Pagination,
    Steps,
    AutoComplete,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Rate,
    Select,
    Slider,
    Switch,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    Avatar,
    Badge,
    Calendar,
    Card,
    Carousel,
    Collapse,
    Comment,
    Empty,
    List,
    Popover,
    Statistic,
    Table,
    Tabs,
    Tag,
    Timeline,
    Tooltip,
    Tree,
    Alert,
    Drawer,
    message,
    Modal,
    notification,
    Popconfirm,
    Progress,
    Skeleton,
    Spin,
    Anchor,
    BackTop,
    ConfigProvider,
    Divider,
    LocaleProvider
} from 'ant-design-vue'

Vue.use(Button)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Layout)
Vue.use(Affix)
Vue.use(Breadcrumb)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Pagination)
Vue.use(Steps)
Vue.use(AutoComplete)
Vue.use(Cascader)
Vue.use(Checkbox)
Vue.use(DatePicker)
Vue.use(Form)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(Rate)
Vue.use(Select)
Vue.use(Slider)
Vue.use(Switch)
Vue.use(TimePicker)
Vue.use(Transfer)
Vue.use(TreeSelect)
Vue.use(Upload)
Vue.use(Avatar)
Vue.use(Badge)
Vue.use(Calendar)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(Collapse)
Vue.use(Comment)
Vue.use(Empty)
Vue.use(List)
Vue.use(Popover)
Vue.use(Statistic)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(Timeline)
Vue.use(Tooltip)
Vue.use(Tree)
Vue.use(Alert)
Vue.use(Drawer)
Vue.use(message)
Vue.use(Modal)
Vue.use(notification)
Vue.use(Popconfirm)
Vue.use(Progress)
Vue.use(Skeleton)
Vue.use(Spin)
Vue.use(Anchor)
Vue.use(BackTop)
Vue.use(ConfigProvider)
Vue.use(Divider)
Vue.use(LocaleProvider)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning