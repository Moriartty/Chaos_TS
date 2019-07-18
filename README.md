# Chaos_TS开发指南
## 国际化
### 框架选择与使用
由于项目中涉及到多语言切换，本项目采用了react-intl框架，我们要做的就是做好中英文对照翻译<br/>
代码中我们需要引入FormattedMessage
> import { FormattedMessage } from 'react-intl';<br/>

然后配合我们按规则命名的id使用

> &lt;FormattedMessage id={item.name}/>

有时候在配合antd表单组件使用时，我们可能需要实现message或者placeholder的国际化，这时我们要引入injectIntl
> import { FormattedMessage, injectIntl } from 'react-intl';<br/>
> module.exports = injectIntl(LoginComp);

这时我们的LoginComp组件就会有一个intl的props.
> const intl = this.props.intl;<br/>
> &lt;Input size="large"
    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    placeholder={intl.formatMessage({ id: 'login_index_msg3' })} />
    
关于这点的使用可以参考本项目的Login组件

### 命名规范
这里我们以中英两种语言为例，我们要做的就是将大量的文本翻译按一定结构进行组织，
方便后续查找和维护，并且在命名上，我们也要定一个规则以便后续整个项目甚至多项目
保持统一而唯一，并且有一定可读性。

本项目我大致为一个语言划分出：操作，模块，提示文本和通用部分,**？**代表酌情添加
1. 操作：聚合了所有功能模块下的操作文本翻译，命名规则建议：[systemName?]_[leafModuleName]_operation_[operationType]:text。
当然如果只是单个系统，可以不用[systemName]
2. 模块：聚合了该模块下所有子模块模块的名字，模块命名规范：[systemName?]_menuName_[parentMenuName]_[leafMenuName]:text
3. 文本：聚合了系统所有的提示性文本翻译：命名规范：textName_[systemName?]_[parentMenuName]_[leafMenuName]_msg[number]:text
4. 通用部分：主要记录一些不涉及权限的大范围通用的文本翻译，酌情命名

一般我们在功能或者模块开发时，需要按照以下流程进行编码和操作，规范操作，减小出错概率。
1. 大致确定好新的模块或者功能可能存在的字串，在一种语言（最好当前开发者的环境默认语言）下进行列举。
2. 模块开发的话，在config目录下的menu进行新模块添加，并确定可能存在的功能，功能开发的话，同样在config/menu下找到对应模块，先手动添加上operation
3. 进行正常的业务，注意翻译的使用和操作的权限控制，翻译可以进行变动。
4. 完成一种语言下的开发和测试工作后，根据git记录将一种语言下的翻译变动复制到其他语言下，保证翻译的统一。
5. 在大管理平台上添加我们新开发的模块和功能，并在权限管理模块做好新的权限配置。

以上就是一个正常的开发操作流程。
