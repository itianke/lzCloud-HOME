const steps = [
    {
        element: '.el-menu--collapse',
        popover: {
            title: '服务中心',
            description: '<p>这里列举了可使用的领筑云服务。</p><p>点击服务图标，即可通过组织分配的职务及权限进入服务进行使用。</p>',
            position: 'right'
        }
    },
    {
        element: '.el-dropdown-company-list',
        popover: {
            title: '组织切换栏',
            description:
                '<p>这里展示了您加入的所有公司及组织，以及所在组织中的部门及职务。</p><p>点击组织名称，即可切换至所选组织，切换后即可使用组织分配的职务进行业务操作。</p>',
            position: 'bottom-center'
        }
    },
    {
        element: '.user-info',
        popover: {
            title: '账号管理中心',
            description:
                '<p>提供账号安全管理，如绑定邮箱、手机，修改密码等。提供账号认证服务，可进行实名、企业、职业认证等。</p><p>提供组织加入服务，管理您加入的组织。提供消息服务，查看组织或系统给您发来的消息。',
            position: 'bottom-right'
        }
    },
    {
        element: '.el-guide',
        popover: {
            title: '引导提示',
            description: '还没记住？点击这里可以再次学习哦~',
            position: 'top'
        }
    }
]

export default steps
