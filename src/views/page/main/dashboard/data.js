import config from 'common/config'
/**
 * 应用中心
 */
export const appCenterData = [
    {
        id: 1,
        label: '工程经营',
        style: 'background: linear-gradient(196deg,rgba(126,183,252,1) 0%,rgba(72,128,247,1) 100%);',
        icon: 'logo-white',
        url: config.api.LZY + '/',
        needValidVersion: false,
        outChain: false
    },
    {
        id: 1,
        label: '劳务云',
        style: 'background:linear-gradient(195deg,rgba(246,159,158,1) 0%,rgba(237,110,108,1) 100%);',
        icon: 'find-labor',
        url: config.api.LWY + '/',
        needValidVersion: false,
        outChain: false
    },
    {
        id: 1,
        label: '找合作',
        style: 'background:linear-gradient(203deg,rgba(245,217,142,1) 0%,rgba(239,185,48,1) 100%);',
        icon: 'find-cooperation',
        url: [`${config.api.LZY}/cooperation/league/apply-cooperation`, `${config.api.LZY}/cooperation/league/company-management`],
        needValidVersion: true,
        outChain: false
    },
    {
        id: 3,
        label: '维保检测',
        style: 'background:linear-gradient(197deg,rgba(114,211,241,1) 0%,rgba(62,167,223,1) 100%);',
        icon: 'maintenance',
        url: 'http://weibao.lingzhuyun.com',
        needValidVersion: false,
        outChain: true
    },
    {
        id: 5,
        label: '找材料',
        style: 'background:linear-gradient(197deg,rgba(244,180,155,1) 0%,rgba(236,118,73,1) 100%);',
        icon: 'find-materials',
        url: 'http://www.lingzhubuy.com/',
        needValidVersion: false,
        outChain: true
    },
    {
        id: 2,
        label: '施工队',
        style: 'background:linear-gradient(197deg,rgba(255,190,87,1) 0%,rgba(254,137,44,1) 100%);',
        icon: 'construction',
        url: '',
        needValidVersion: false,
        outChain: false
    }
    // {
    //     id: 4,
    //     label: '找资金',
    //     style: 'background:linear-gradient(197deg,rgba(127,212,190,1) 0%,rgba(97,197,168,1) 100%);',
    //     icon: 'find-funds',
    //     url: 'http://www.lingzhufin.com/bill',
    //     needValidVersion: false,
    //     outChain: true
    // },
    // {
    //     id: 1,
    //     label: '复工管理',
    //     style: 'background:linear-gradient(194deg,rgba(181,209,251,1) 0%,rgba(99,141,231,1) 100%);',
    //     icon: 'return-to-work',
    //     url: '',
    //     needValidVersion: false,
    //     outChain: false
    // }
]

/**
 * 轮播图
 */
export const carouselData = [
    {
        id: 1,
        bgImg: '/static/dashboard-bg-1.png',
        bgTextImg: '/static/dashboard-bg-1-text.png',
        cornerImg: '/static/qrcode.png',
        btnText: '扫码使用'
    },
    {
        id: 2,
        bgImg: '/static/dashboard-bg-1.png',
        bgTextImg: '/static/dashboard-bg-2-text.png',
        cornerImg: '/static/lingzhu-logo.png',
        btnText: '点击下载',
        link: 'http://app.lingzhuyun.com/index.html#/index'
    }
]

/**
 * 经营看板
 */
export const boardData = [
    {
        id: 1,
        label: '项目报备数',
        count: null,
        prop: 'report',
        iconName: 'icon-lz-proj-rpt-no',
        style: 'width: 25%;'
    },
    {
        id: 2,
        label: '可用余额',
        pattern: '万',
        count: null,
        prop: 'balanceAmount',
        iconName: 'icon-lz-safety-education',
        style: 'width: 25%;'
    },
    {
        id: 3,
        label: '待付材料',
        pattern: '万',
        count: null,
        prop: 'materialPaymentAmount',
        iconName: 'icon-lz-safety-education',
        style: 'width: 25%;'
    },
    {
        id: 4,
        label: '施工人员',
        pattern: '人',
        count: null,
        prop: 'constructionNum',
        iconName: 'icon-lz-construction-personnel',
        style: 'width: 25%;'
    },
    {
        id: 5,
        label: '在建项目',
        count: null,
        prop: 'buliding',
        iconName: 'icon-lz-proj-rpt-no',
        style: 'width: 25%;'
    },
    {
        id: 6,
        label: '回款总额',
        pattern: '万',
        count: null,
        prop: 'recvAmount',
        iconName: 'icon-lz-safety-education',
        style: 'width: 25%;'
    },
    {
        id: 7,
        label: '待付劳务',
        pattern: '万',
        count: null,
        prop: 'laborPaymentAmount',
        iconName: 'icon-lz-safety-education',
        style: 'width: 25%;'
    },
    {
        id: 8,
        label: '三级安全教育',
        pattern: '人',
        count: null,
        prop: 'threeSafetyEducationNum',
        iconName: 'icon-lz-safety-education',
        style: 'width: 25%;'
    },
    {
        id: 9,
        label: '已竣工项目',
        count: null,
        prop: 'completed',
        iconName: 'icon-lz-proj-rpt-no',
        style: 'width: 25%;'
    },
    {
        id: 10,
        label: '合同总额',
        pattern: '万',
        count: null,
        prop: 'contractAmount',
        iconName: 'icon-lz-safety-education',
        style: 'width: 25%;'
    },
    {
        id: 11,
        label: '待还经营借款',
        pattern: '万',
        count: null,
        prop: 'borrowAmount',
        iconName: 'icon-lz-safety-education',
        style: 'width: 25%;'
    },
    {
        id: 12,
        label: '已购保险',
        pattern: '人',
        count: null,
        prop: 'insureNum',
        iconName: 'icon-lz-insurance-purchased',
        style: 'width: 25%;'
    }
]

export const workbenchData = [
    {
        // 项目报备
        code: '06000102',
        type: 101,
        iconName: 'icon-lz-operation',
        path: '/operation/project-preparation/project'
    },
    {
        // 工程合同
        code: '06000203',
        type: 102,
        iconName: 'icon-lz-operation',
        path: '/operation/project-flowup/engineer-contract'
    },
    {
        // 立项费用申请
        code: '06000201',
        type: 103,
        iconName: 'icon-lz-operation',
        path: '/operation/project-flowup/upfront-cost'
    },
    {
        // 项目预算申请
        code: '06000205',
        type: 104,
        iconName: 'icon-lz-operation',
        path: '/operation/project-flowup/project-budget'
    },
    {
        // 收款登记
        code: '06010101',
        type: 201,
        iconName: 'icon-lz-finance',
        path: '/financial/credit-management/credit-registration'
    },
    {
        // 收款维护
        code: '06010102',
        type: 202,
        iconName: 'icon-lz-finance',
        path: '/financial/credit-management/maintain-company'
    },
    {
        // 优选项目收款
        code: '06010104',
        type: 601,
        iconName: 'icon-lz-finance',
        path: '/financial/credit-management/project-payment'
    },
    {
        // 付款申请
        code: '06010201',
        type: 203,
        iconName: 'icon-lz-finance',
        path: '/financial/payment-management/payment-apply'
    },
    {
        // 项目报销
        code: '06010203',
        type: 204,
        iconName: 'icon-lz-finance',
        path: '/financial/payment-management/project-reimbur'
    },
    {
        // 完税报销
        code: '06010204',
        type: 205,
        iconName: 'icon-lz-finance',
        path: '/financial/payment-management/taxpaid-reimbur'
    },
    {
        // 开票申办
        code: '06010301',
        type: 206,
        iconName: 'icon-lz-finance',
        path: '/financial/bill-management/bill-apply'
    },
    {
        // 发票提交
        code: '06010302',
        type: 207,
        iconName: 'icon-lz-finance',
        path: '/financial/bill-management/invoice-registration'
    },
    {
        // 收据申请
        code: '06010303',
        type: 208,
        iconName: 'icon-lz-finance',
        path: '/financial/bill-management/receipt-management'
    },
    {
        // 预缴凭证
        code: '06010305',
        type: 209,
        iconName: 'icon-lz-finance',
        path: '/financial/bill-management/prepaid-management'
    },
    {
        // 税跨报
        code: '06010306',
        type: 210,
        iconName: 'icon-lz-finance',
        path: '/financial/bill-management/cross-tax'
    },
    {
        // 保证金提取
        code: '06010402',
        type: 211,
        iconName: 'icon-lz-finance',
        path: '/financial/security-management/security-extract'
    },
    {
        // 保证金扣除
        code: '06010403',
        type: 212,
        iconName: 'icon-lz-finance',
        path: '/financial/security-management/security-deduction'
    },
    {
        // 押金提取
        code: '06010502',
        type: 213,
        iconName: 'icon-lz-finance',
        path: '/financial/deposit-management/deposit-extract'
    },
    {
        // 押金扣除
        code: '06010503',
        type: 214,
        iconName: 'icon-lz-finance',
        path: '/financial/deposit-management/deposit-deduction'
    },
    {
        // 项目借款
        code: '06010601',
        type: 215,
        iconName: 'icon-lz-finance',
        path: '/financial/borrowing-management/project-loan'
    },
    {
        // 项目经营借款
        code: '06010602',
        type: 216,
        iconName: 'icon-lz-finance',
        path: '/financial/borrowing-management/operation-loan'
    },
    {
        // 项目经营还款
        code: '06010603',
        type: 217,
        iconName: 'icon-lz-finance',
        path: '/financial/borrowing-management/project-repayment'
    },
    {
        // 项目经营还款提取
        code: '06010604',
        type: 223,
        iconName: 'icon-lz-finance',
        path: '/financial/borrowing-management/repayment-extract'
    },
    {
        // 劳务预缴凭证
        code: '06010801',
        type: 218,
        iconName: 'icon-lz-finance',
        path: '/labor-management/prepayment-voucher'
    },
    {
        // 劳务开票
        code: '06010802',
        type: 219,
        iconName: 'icon-lz-finance',
        path: '/labor-management/billing-list'
    },
    {
        // 劳务税跨报
        code: '06010803',
        type: 220,
        iconName: 'icon-lz-finance',
        path: '/labor-management/tax-cross-list'
    },
    {
        // 红冲发票
        code: '06010307',
        type: 221,
        iconName: 'icon-lz-finance',
        path: '/financial/bill-management/red-hedge'
    },
    {
        // 材料合同
        code: '06020101',
        type: 301,
        iconName: 'icon-lz-purchase',
        path: '/purchase/material-contract'
    },
    {
        // 劳务合同
        code: '06020301',
        type: 302,
        iconName: 'icon-lz-purchase',
        path: '/purchase/service-contract'
    },
    {
        // 咨询服务合同工程公司
        code: '06020501',
        type: 303,
        iconName: 'icon-lz-purchase',
        path: '/purchase/consult-contract'
    },
    {
        // 施工合同
        code: '06020601',
        type: 304,
        iconName: 'icon-lz-purchase',
        path: '/purchase/construction-contract'
    },
    {
        // 劳务公司备案
        code: '06050401',
        type: 401,
        iconName: 'icon-lz-crm',
        path: '/crm/labour-record'
    },
    {
        // 服务中心订单
        code: '060804',
        type: 402,
        iconName: 'icon-lz-service-center',
        path: '/service-center/order-management'
    },
    {
        // 服务中心退款
        code: '060805',
        type: 403,
        iconName: 'icon-lz-service-center',
        path: '/service-center/refund-management'
    },
    {
        // 财务票据管理
        code: '060305',
        type: 405,
        iconName: 'icon-lz-resource',
        path: '/resource/financial-instrument-management'
    },
    {
        // 合同移交文件管理
        code: '06030401',
        type: 404,
        iconName: 'icon-lz-resource',
        path: '/resource/contract-file-management'
    },
    {
        // 优选合作管理申请
        code: '0607010201',
        type: 406,
        iconName: 'icon-lz-cooperation',
        path: '/cooperation/league/apply-management'
    }, {
        // 合同变更
        code: '06000207',
        type: 105,
        iconName: 'icon-lz-operation',
        path: '/operation/project-flowup/contract-change'
    }, {
        // 发票作废
        code: '06010308',
        type: 222,
        iconName: 'icon-lz-finance',
        path: '/financial/bill-management/invalid-invoice'
    }, {
        // 服务与支持确认
        code: '06010206',
        type: 602,
        iconName: 'icon-lz-finance',
        path: '/financial/payment-management/service-and-support'
    }, {
        // 服务与支持
        code: '06010206',
        type: 224,
        iconName: 'icon-lz-finance',
        path: '/financial/payment-management/service-and-support'
    }, {
        // 结算管理
        code: '06010207',
        type: 225,
        iconName: 'icon-lz-finance',
        path: '/financial/payment-management/settlement-management'
    },
    {
        // 采购合同变更
        code: '06020701',
        type: 305,
        iconName: 'icon-lz-purchase',
        path: '/purchase/purchase-change-list'
    },
    {
        // 保函申请管理
        code: '0601100101',
        type: 227,
        iconName: 'icon-lz-finance',
        path: '/financial/guarantee/guarantee-list'
    },
    {
        // 保函注销
        code: '0601100101',
        type: 228,
        iconName: 'icon-lz-finance',
        path: '/financial/guarantee/cancellation-list'
    },
    {
        // 用章申请管理
        code: '06030601',
        type: 408,
        iconName: 'icon-lz-resource',
        path: '/resource/seal/seal-management'
    }, {
        // 保理合同管理
        code: '0600020901',
        type: 106,
        iconName: 'icon-lz-operation',
        path: '/operation/factoring-management/factoring-contract'
    }, {
        // 对账申请管理
        code: '06010901',
        type: 226,
        iconName: 'icon-lz-finance',
        path: '/financial/reconciliation-management/reconciliation-apply'
    }, {
        // 部门及项目迁移
        code: '06070106',
        type: 407,
        iconName: 'icon-lz-cooperation',
        path: '/cooperation/league/department-or-project-migration'
    }, {
        // 商务经理提现
        code: '06010208',
        type: 229,
        iconName: 'icon-lz-finance',
        path: '/financial/payment-management/withdraw-deposit'
    }, {
        // 已签合同项目
        code: '06000105',
        type: -101,
        iconName: 'icon-lz-operation',
        path: '/operation/project-preparation/contract-signed'
    }, {
        // 收据异常预警
        code: '06010303',
        type: -102,
        iconName: 'icon-lz-finance',
        path: '/financial/bill-management/receipt-management'
    }, {
        // 资金调拨
        code: '060111',
        type: 230,
        iconName: 'icon-lz-finance',
        path: '/financial/fund-management/fund-transfer'
    }, {
        // 优选管理
        code: '060701',
        type: -103,
        iconName: 'icon-lz-cooperation',
        path: '/cooperation/league/company-management'
    }, {
        // 部门汇总
        code: '06090301',
        type: 411,
        iconName: 'icon-lz-social-security',
        path: '/social-security/department-summary/department-summary-list'
    }, {
        // 服务费待缴
        code: '06070107',
        type: -104,
        iconName: 'icon-lz-cooperation',
        path: '/cooperation/league/service-charge-management'
    }, {
        // 工资发放
        code: '06090201',
        type: 410,
        iconName: 'icon-lz-social-security',
        path: '/social-security/salary-management/salary-grant'
    },
    {
        // 员工登记
        code: '06090101',
        type: 409,
        iconName: 'icon-lz-social-security',
        path: '/social-security/staff-management'
    }, {
        // 存款账户申请
        code: '06000210',
        type: 107,
        iconName: 'icon-lz-social-security',
        path: '/operation/bank-account/bank-account-list'
    }, {
        // 刻章申请
        code: '06030801',
        type: 412,
        iconName: 'icon-lz-resource',
        path: '/resource/engrave/engrave-management'
    }
]

/**
 * 添加icon规则
 *  经营管理 icon-lz-operation 
    财务管理 icon-lz-finance 
    服务中心 icon-lz-service-center 
    采购管理 icon-lz-purchase 
    资源管理 icon-lz-resource 
    报表管理 icon-lz-report 
    CRM icon-lz-crm 
    工资社保    icon-lz-social-security 
    系统设置 icon-lz-setting 
    合作管理 icon-lz-cooperation
 */

/**
 * 项目动态
 */
export const projectDynamicData = [
    {
        projectType: '工程',
        projectName: '金马花园项目15#、18#、19#楼及地下室消防安装工程承包合同',
        contractAmount: 16826000000,
        balanceAmount: 16826000000,
        refundAmount: 19212356201,
        receivedAmount: 19212356201,
        paidLaborAmount: 19212356201,
        paidMaterialAmount: 19212356201,
        percent: 86
    },
    {
        projectType: '工程',
        projectName: '金马花园项目15#、18#、19#楼及地下室消防安装工程承包合同',
        contractAmount: 16826000000,
        balanceAmount: 16826000000,
        refundAmount: 19212356201,
        receivedAmount: 19212356201,
        paidLaborAmount: 19212356201,
        paidMaterialAmount: 19212356201,
        percent: 82,
        warning: true,
        delayDay: 34,
        remainDay: 55
    },
    {
        projectType: '工程',
        projectName: '金马花园项目15#、18#、19#楼及地下室消防安装工程承包合同',
        contractAmount: 16826000000,
        balanceAmount: 16826000000,
        refundAmount: 19212356201,
        receivedAmount: 19212356201,
        paidLaborAmount: 19212356201,
        paidMaterialAmount: 19212356201,
        percent: 35
    },
    {
        projectType: '工程',
        projectName: '金马花园项目15#、18#、19#楼及地下室消防安装工程承包合同东风公司的股份未全额豆腐干豆腐干热锅热个人',
        contractAmount: 16826000000,
        balanceAmount: 16826000000,
        refundAmount: 19212356201,
        receivedAmount: 19212356201,
        paidLaborAmount: 19212356201,
        paidMaterialAmount: 19212356201,
        percent: 98
    }
]
