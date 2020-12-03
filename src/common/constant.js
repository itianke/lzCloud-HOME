/**
 * 过滤状态显示
 * @param {*} arr
 * @param {*} val
 * @param {*} key
 */
export const filterOpts = (arr, val, key = 'value') => {
    let obj = {}
    arr.forEach((item) => {
        if (item[key] + '' === val + '') {
            obj = { ...item }
            return false
        }
    })
    return obj
}

/**
 * 用户状态
 */
export const USER_STATUS = [
    { label: '未激活', value: 0 },
    { label: '正常', value: 1 },
    { label: '已冻结', value: 2 },
    { label: '已注销', value: 3 }
]

/**
 * 用户类型
 */
export const USER_TYPE = [
    { label: '个人用户', value: 0 },
    { label: '企业用户', value: 1 }
]

/**
 * 认证类型
 */
export const USER_AUTH_TYPE = [
    { label: '实名认证', value: 0 },
    { label: '其它认证', value: 1 }
]

/**
 * 认证状态
 */
export const USER_AUTH_STATUS = [
    { label: '认证中', value: 0 },
    { label: '认证成功', value: 1 },
    { label: '认证失败', value: 2 },
    { label: '未认证', value: 3 }
]

/**
 * 绑定状态
 */
export const USER_BIND_STATUS = [
    { label: '未绑定', value: 0 },
    { label: '已绑定', value: 1 }
]

/**
 * 企业状态
 */
export const COMPANY_STATUS = [
    { label: '正常', value: 1 },
    { label: '已冻结', value: 2 },
    { label: '已注销', value: 3 }
]

/**
 * 企业认证类型
 */
export const COMPANY_AUTH_TYPE = [
    { label: '企业认证', value: 0 },
    { label: '工程公司认证', value: 1 },
    { label: '材料供应商认证', value: 2 }
]

/**
 * 用户被授权状态
 */
export const USER_AUTHED_STATUS = [
    { label: '正常', value: 1 },
    { label: '已冻结', value: 2 },
    { label: '已解除', value: 3 }
]

/**
 * 用户授权状态
 */
export const USER_AUTH_APPLY_STATUS = [
    { label: '邀请中', value: 0 },
    { label: '已通过', value: 1 },
    { label: '已拒绝', value: 2 },
    { label: '已作废', value: 3 }
]

/**
 * 是否
 */
export const WHETHER = [
    { label: '否', value: 0, type: 'info' },
    { label: '是', value: 1, type: 'success' }
]

/**
 * 合作中心状态
 */
export const COOPERATION_CENTER_STATUS = [
    { label: '未加入', value: 0 },
    { label: '申请中', value: 1 },
    { label: '已加入', value: 2 },
    { label: '审核未通过', value: 3 },
    { label: '已过期', value: 4 },
    { label: '未实名认证', value: 5 },
    { label: '已终止', value: 6 }
]


/**
 * 甲方管理-甲方类型
 */
export const OWNER_STATUS = [
    { label: '总包方', value: 1 },
    { label: '分包方', value: 2 },
    { label: '业主', value: 3 },
    { label: '开发商', value: 4 },
    { label: '其他', value: 5 }
]


/**
 * 工程类型 1消防工程;2机电工程;3装修工程;4智能化工程;5电力承接工程;6其他工程
 */
export const PROJECT_TYPE = [
    { label: '消防工程', value: 1 },
    { label: '机电工程', value: 2 },
    { label: '装修工程', value: 3 },
    { label: '智能化工程', value: 4 },
    { label: '电力承接工程', value: 5 },
    { label: '其他工程', value: 6 }
]


/**
 * 项目状态 0草稿1报备中2已报备3投标中4已中标5未中标6建设中7已竣工8已过期9已关闭10已删除
 */
export const PROJECT_STATUS = [
    { label: '草稿', value: 0 },
    { label: '报备中', value: 1 },
    { label: '已报备', value: 2 },
    { label: '投标中', value: 3 },
    { label: '待签约', value: 4 },
    { label: '未中标', value: 5 },
    { label: '建设中', value: 6 },
    { label: '已竣工', value: 7 },
    { label: '已过期', value: 8 },
    { label: '已关闭', value: 9 },
    { label: '已删除', value: 10 }
]

/**
 * 预算表类型
 */
export const BUGET_PROJECT_TYPE = [
    { label: '标准', value: 1 },
    { label: '优选', value: 2 }
]

/**
 * 项目审批状态 0 未审核(草稿) 1 评审中 2 已通过审核 3 审核不通
 *  0草稿;1审核中;2审核通过、已报备;3审核未通过;6已删除
 */
export const PROJECT_AUDIT_STATUS = [
    { label: '草稿', value: 0 },
    { label: '待审核', value: 1 },
    { label: '审核通过', value: 2 },
    { label: '审核未通过', value: 3 }
]


/**
 * 工程合同 '合同状态 0草稿 1审核中 2审核通过 3审核不通过  4已撤回 5已作废 6已删除 7已盖章'
 */
export const CONTRACT_AUDIT_STATUS = [
    { label: '草稿', value: 0 },
    { label: '待审核', value: 1 },
    { label: '审核通过', value: 2 },
    { label: '审核未通过', value: 3 },
    { label: '已撤回', value: 4 },
    { label: '已作废', value: 5 },
    { label: '已作废', value: 6 }, // 没有已删除的状态了，5和6都是已作废
    { label: '已盖章', value: 7 },
    { label: '已作废', value: 10 }
]

/**
 * 前期费用审批状态
 * 0草稿 1审核中 2审核通过 3审核不通过 4已撤回 5已作废 6已删除 7 审核通过后再次编辑后的提交状态,
 */
export const FEE_AUDIT_STATUS = [
    { label: '草稿', value: 0 },
    { label: '待审核', value: 1 },
    { label: '审核通过', value: 2 },
    { label: '审核未通过', value: 3 },
    { label: '已撤回', value: 4 },
    { label: '已作废', value: 5 },
    { label: '已作废', value: 6 },
    { label: '待审核', value: 7 }
]

/**
 * 项目预算审批状态
 * 0草稿 1审核中 2审核通过 3审核不通过 4已撤回 5已作废 6已删除 10 审核通过后再次编辑后的提交状态,,
 */
export const BUGET_AUDIT_STATUS = [
    { label: '草稿', value: 0, type: '' },
    { label: '待审核', value: 1, type: 'warning' },
    { label: '审核通过', value: 2, type: 'success' },
    { label: '审核未通过', value: 3, type: 'danger' },
    { label: '已撤回', value: 4, type: '' },
    { label: '已作废', value: 5, type: 'info' },
    { label: '已作废', value: 6, type: 'warning' },
    { label: '待审核', value: 10, type: 'warning' }
]

/**
 * 借还款表单状态状态
 * 0草稿 1审批中 2审批通过 3审批不通过 4已撤回 5已作废 6已删除
 */
export const LOAN_AUDIT_STATUS = [
    { label: '草稿', value: 0, type: '' },
    { label: '审批中', value: 1, type: 'warning' },
    { label: '审批通过', value: 2, type: 'success' },
    { label: '审批未通过', value: 3, pe: 'danger' },
    { label: '已撤回', value: 4, type: '' },
    { label: '已作废', value: 5, type: 'info' },
    { label: '已作废', value: 6, type: 'warning' },
    { label: '审批中', value: 7, type: 'warning' }, // 项目借款审核通过后编辑提交的状态
    { label: '审批中', value: 10, type: 'warning' } // 项目还款审核通过后编辑提交的状态
]

/**
 * 证书管理 - 证件类型
 */
export const CERTIFICATE_TYPE = [
    { label: '公司证件', value: 1 },
    { label: '员工证件', value: 2 },
    { label: '职业证书', value: 3 },
    { label: '其他', value: 4 }
]
/**
 * 财务设置----------------
 */

/**
 * 财务定义--款项分类
 */
export const FINANCAL_FUND_STATUS = [
    { label: '项目回款', value: 1 },
    { label: '项目保证金', value: 2 },
    { label: '项目押金', value: 3 },
    { label: '项目还款', value: 4 },
    { label: '其他', value: 5 }
]

/**
 * 财务定义--预算类型
 */
export const FINANCAL_BUGET_STATUS = [
    { label: '全部', value: '' },
    { label: 'XXX预算', value: 1 }
]

/**
 * 财务定义--报销类型
 */
export const FINANCAL_REIMBURSE_STATUS = [
    { label: '全部', value: '' },
    { label: '项目报销', value: 1 },
    { label: '完税报销', value: 2 }
]

/**
 * 启用状态
 */
export const FINANCAL_HASENABLED_STATUS = [
    { label: '已启用', value: 1 },
    { label: '未启用', value: 0 }
]

/**
 * 计入余额
 */
export const FINANCAL_TOBALANCE_STATUS = [
    { label: '是', value: 1 },
    { label: '否', value: 0 }
]

/**
 * 维护类型
 */
export const FINANCAL_MAINTAIN_STATUS = [
    { label: '维护到项目', value: 1 },
    { label: '维护到商务经理', value: 2 }
]

/**
 * 账户启用状态
 */
export const FINANCAL_ACCOUNT_STATUS = [
    { label: '已启用', value: 1 },
    { label: '未启用', value: 2 }
]

/**
 * 工程建设类型 3 是其他
 */
export const PROJECT_BUILD_STATUS = [
    { label: '新建', value: 1 },
    { label: '改建', value: 2 },
    { label: '扩建', value: 4 },
    { label: '其他', value: 3 }
]


/**
 * 收款方式
 */
export const COLLECT_STATUS = [
    { label: '现金', value: 1 },
    { label: '转账', value: 2 },
    { label: 'POS', value: 3 },
    { label: '支票', value: 4 },
    { label: '银行承兑汇票', value: 5 },
    { label: '商业承兑汇票', value: 6 }
]


/**
 * 文件类型
 */
export const TENDER_FILE_STATUS = [
    { label: '全部', value: 1 },
    { label: '招标文件', value: 2 },
    { label: '技术标', value: 3 },
    { label: '商务标', value: 4 },
    { label: '图纸', value: 5 },
    { label: '投标文件', value: 6 },
    { label: '答疑文件', value: 7 },
    { label: '中标通知书', value: 8 },
    { label: '成本计划', value: 9 }
]

/**
 * 合同类型 1新签2签证3补充协议4其他，列表及详情为了兼容老数据，保留其他
 */
export const CONTRACT_TYPE = [
    { label: '新签', value: 1 },
    { label: '签证', value: 2 },
    { label: '补充协议', value: 3 },
    { label: '其他', value: 4 },
    { label: '子合同', value: 5 }
]

/**
 * 合同类型 1新签2签证3补充协议--新建合同去掉其他
 */
export const CONTRACT_TYPE_NEW = [
    { label: '新签', value: 1 },
    { label: '签证', value: 2 },
    { label: '补充协议', value: 3 }
]


/**
 * 验收类型 0政府1业主2其他
 */
export const ACCEPT_TYPE = [
    { label: '政府', value: 0 },
    { label: '业主', value: 1 }
]

/**
 * 税跨报要求 0不需要1需要
 */
export const WJZ_TYPE = [
    { label: '开具税跨报', value: 0 },
    { label: '无需税跨报', value: 1 }
]

/**
 * 保函要求 保函要求 0无需保函1预付款保函2履约保函3人工费保函4其他
 */
export const BHYQ_TYPE = [
    { label: '无需保函', value: 0 },
    { label: '预付款保函', value: 1 },
    { label: '履约保函', value: 2 },
    { label: '人工费保函', value: 3 },
    { label: '其他', value: 4 }
]

/**
 * 付款节点类型
 */
export const PAYMENT_TYPE = [
    { label: '预付款', value: 1 },
    { label: '进度款', value: 2 },
    { label: '验收款', value: 3 },
    { label: '结算后', value: 4 },
    { label: '质保金', value: 5 },
    { label: '月付', value: 6 },
    { label: '季付', value: 7 },
    { label: '一次性付款', value: 8 },
    { label: '其他', value: 9 }
]

/**
 *  //结算方式 0总价包干1按实结算
 */
export const SETTLEMENT_TYPE = [
    { label: '总价包干', value: 0 },
    { label: '按实结算', value: 1 }
]

/**
 *  //保证金状态
 */
export const BOND_TYPE = [
    { label: '全部', value: null },
    { label: '已缴纳', value: 1 },
    { label: '付甲方', value: 2 },
    { label: '已返还', value: 3 },
    { label: '已提取', value: 4 }
]

/**
 *  //押金状态
 */
export const DEPOSIT_TYPE = [
    { label: '全部', value: null },
    { label: '已缴纳', value: 1 },
    { label: '付甲方', value: 2 },
    { label: '已返还', value: 3 },
    { label: '已提取', value: 4 }
]


/**
 * 押金分类
 */
export const FOREGIFT_TYPE = [
    { label: '全部', value: null },
    { label: '项目押金', value: 3 },
    { label: '经营押金', value: 6 },
    { label: '商务经理押金', value: 9 }
]

/*
 * 发票类型
 */
export const INVOICE_TYPE = [
    { label: '增值税专用发票', value: 1 },
    { label: '增值税普通发票', value: 2 },
    { label: '其他', value: 3 }
]

/**
 * 项目类型
 */
export const OPERATION_PROJECT_TYPE = [
    { label: '标准', value: 1 },
    { label: '优选', value: 2 }
]

/**
 * 保证金分类
 */
export const SECURITY_TYPE = [
    { label: '全部', value: null },
    { label: '项目保证金', value: 2 },
    { label: '经营保证金', value: 5 },
    { label: '商务经理保证金', value: 8 }
]

/**
 * 付款来源
 */
export const PAYMENT_SOURCE = [
    { label: '付款申请', value: 1, path: '/financial/payment-management/payment-detail' },
    { label: '项目报销', value: 2, path: '/financial/payment-management/reimbur-detail' },
    { label: '完税报销', value: 3, path: '/financial/payment-management/taxpaid-detail' },
    { label: '保证金提取', value: 4, path: '/financial/security-management/security-extract-detail' },
    { label: '押金提取', value: 5, path: '/financial/deposit-management/deposit-extract-detail' },
    { label: '项目借款', value: 6, path: '/financial/borrowing-management/loan-detail' },
    { label: '项目经营还款提取', value: 7, path: '/financial/borrowing-management/repayment-extract-detail' }
]

/**
 * 支付状态
 */
export const PAYMENT_STATUS = [
    { label: '已支付', value: 0, type: 'success' },
    { label: '待支付', value: -1, type: 'warning' }
]

/**
 * 款项类型
 */
export const FUND_TYPE = [
    { label: '代付', value: 0, type: 'danger' },
    { label: '返还', value: 1, type: 'warning' },
    { label: '缴纳', value: 2, type: 'success' }
]

/**
 * 申办性质(是否收款)
 */
export const MONEY_STATUS = [
    { label: '未收款', value: 0 },
    { label: '已收款 ', value: 1 }
]
/**
 * 申办方式
 */
export const PAYMENT_TYPE_STATUS = [
    { label: '新开', value: 1 },
    { label: '重开 ', value: 2 }
]

/**
 * 报销方式
 */
export const REIMBUR_TYPE = [
    { label: '现金支付', value: 1 },
    { label: '转账支付 ', value: 2 },
    { label: '抵扣项目借款 ', value: 3 }
]

/**
 * 开票类型
 */
export const INVOICE_CREATE_TYPE = [
    { label: '新开', value: 1 },
    { label: '作废重开 ', value: 2 },
    { label: '红字重开 ', value: 3 },
    { label: '遗失重开 ', value: 4 }
]

/**
 * 是否开票
 */
export const INVOICE_HAS_CREATE = [
    { label: '未开', value: 0 },
    { label: '已开 ', value: 1 }
]

/**
 * 登记类型
 */
export const RECORD_TYPE = [
    { label: '收取', value: 1 },
    { label: '开出 ', value: 2 }
]


/**
 * 启用/禁用状态
 */

export const START_TYPE_LABEL = [
    { label: '启用', value: 1 },
    { label: '禁用 ', value: 2 }
]

export const START_TYPE_TYPE = [
    { label: 'success', value: 1 },
    { label: 'info ', value: 2 }
]

/**
 * 收款维护
 */
export const APPROVE_STATUS_MAINTAIN = [
    { label: '全部', value: '全部' },
    { label: '未维护', value: '草稿' },
    { label: '审批中', value: '审核中' },
    { label: '完成办理', value: '审核通过' },
    { label: '审批未通过', value: '审核未通过' },
    { label: '已作废', value: '已作废' },
    { label: '我的待办', value: '我的待办' },
    { label: '我的审批', value: '我的审批' }
]

export const APPROVE_STATUS_LABEL_MAINTAIN = [
    { label: '未维护', value: 0 },
    { label: '审批中', value: 1 },
    { label: '审批通过', value: 2 },
    { label: '审批未通过', value: 3 },
    { label: '已作废', value: 5 }
]

export const APPROVE_STATUS_TYPE_MAINTAIN = [
    { label: '', value: 0 },
    { label: 'warning', value: 1 },
    { label: 'success', value: 2 },
    { label: 'danger', value: 3 },
    { label: 'info', value: 5 }
]

/**
 * 审批状态 - 李游版
 */


export const APPROVE_STATUS_LY = [
    { label: '全部', value: '全部' },
    { label: '草稿', value: '草稿' },
    { label: '审批中', value: '审核中' },
    { label: '完成办理', value: '审核通过' },
    { label: '审批未通过', value: '审核未通过' },
    { label: '已作废', value: '已作废' },
    { label: '我的待办', value: '我的待办' },
    { label: '我的审批', value: '我的审批' }
]

export const APPROVE_STATUS_LABEL_YL = [
    { label: '草稿', value: 0 },
    { label: '审批中', value: 1 },
    { label: '审批通过', value: 2 },
    { label: '审批未通过', value: 3 },
    { label: '已作废', value: 5 }
]

export const APPROVE_STATUS_TYPE_LY = [
    { label: '', value: 0 },
    { label: 'warning', value: 1 },
    { label: 'success', value: 2 },
    { label: 'danger', value: 3 },
    { label: 'info', value: 5 }
]


/**
 * 审批状态 - 周洲版
 */

export const APPROVE_STATUS_ZZ = [
    { label: '全部', value: '全部' },
    { label: '草稿', value: '草稿' },
    { label: '待审核', value: '审核中' },
    { label: '审核通过', value: '审核通过' },
    { label: '审核未通过', value: '审核未通过' },
    { label: '已作废', value: '已作废' },
    { label: '我的待办', value: '我的待办' },
    { label: '我的审批', value: '我的审批' }
]

export const APPROVE_STATUS_LABEL_ZZ = [
    { label: '草稿', value: 0 },
    { label: '待审核', value: 1 },
    { label: '审核通过', value: 2 },
    { label: '审核未通过', value: 3 },
    { label: '已作废', value: 5 }
]


export const APPROVE_STATUS_TYPE_ZZ = [
    { label: '', value: 0 },
    { label: 'warning', value: 1 },
    { label: 'success', value: 2 },
    { label: 'danger', value: 3 },
    { label: 'info', value: 5 }
]


/**
 * 合作状态
 */

export const COOPERATION_STATUS = [
    { label: '全部', value: '全部' },
    { label: '合作中', value: '合作中' },
    { label: '已解除', value: '已解除' }
]

export const COOPERATION_STATUS_LABEL = [
    { label: '草稿', value: 0 },
    { label: '合作中', value: 2 },
    { label: '已解除', value: 7 }
]

export const COOPERATION_STATUS_TYPE = [
    { label: '', value: 0 },
    { label: 'warning', value: 1 },
    { label: 'success', value: 2 },
    { label: 'danger', value: 3 },
    { label: 'info', value: 7 }
]
/**
 * 报表
 */
// 报备排序列表
export const PREPARATION_ORDER = [
    { label: '按项目数降序', value: 1 },
    { label: '按项目造价降序', value: 2 },
    { label: '按项目数升序', value: 3 },
    { label: '按项目造价升序', value: 4 }
]
// 签约排序列表
export const CONTACT_ORDER = [
    { label: '按创建合同数降序', value: 1 },
    { label: '按创建合同数升序', value: 2 },
    { label: '按创建合同金额升序', value: 3 },
    { label: '按创建合同金额降序', value: 4 },
    { label: '按审核通过合同数升序', value: 5 },
    { label: '按审核通过合同数降序', value: 6 },
    { label: '按审核通过合同金额升序', value: 7 },
    { label: '按审核通过合同金额降序', value: 8 }
]
// 项目排行排序列表
export const PROJECT_ORDER = [
    { label: '按项目造价', value: 1 },
    { label: '按项目合同金额', value: 2 },
    { label: '按项目回款金额', value: 3 }
]

// 省份排名查询条件
export const PROVINCE_ORDER = [
    { label: '报备项目数', value: 1, prop: 'countProject', radio: 'ratioProject' },
    { label: '报备项目金额', value: 2, prop: 'countProjectAmount', radio: 'ratioProjectAmount', format: true },
    { label: '报备审核项目数', value: 3, prop: 'countProject', radio: 'ratioProject' },
    { label: '报备审核项目金额', value: 4, prop: 'countProjectAmount', radio: 'ratioProjectAmount', format: true },
    { label: '签约合同数', value: 5, prop: 'countContract', radio: 'ratioContract' },
    { label: '签约合同金额', value: 6, prop: 'countContractAmount', radio: 'ratioContractAmount', format: true },
    { label: '审核通过合同数', value: 7, prop: 'countContract', radio: 'ratioContract' },
    { label: '审核通过合同金额', value: 8, prop: 'countContractAmount', radio: 'ratioContractAmount', format: true }
]
// 报表维度
export const REPORT_ORDER = [
    { label: '新增报备项目数', value: 1 },
    { label: '新增在建项目数', value: 2 },
    { label: '新增报备项目造价', value: 3 },
    { label: '新增工程合同数', value: 4 },
    { label: '新增工程合同金额', value: 5 },
    { label: '平均合同金额', value: 6 },
    { label: '新增回款金额', value: 7 }
]
// 劳务资质
export const LABOR_QUALIFICATION = [
    { label: '分包资质', value: 0 },
    { label: '派遣资质', value: 1 }
]
// 劳务审核状态
export const LABOR_APPLY_AUDIT_STATUS = [
    { label: '草稿', value: 0, type: '' },
    { label: '待审核', value: 1, type: 'warning' },
    { label: '审核通过', value: 2, type: 'success' },
    { label: '审核不通过', value: 3, type: 'danger' },
    { label: '已作废', value: 5, type: 'info' }
]

// 订单状态：1,待确认;2,未付款;3,已付款;4,已退款;5,订购完成;
export const ORDER_STATUS = [
    { label: '待确认', value: 1 },
    { label: '未付款', value: 2 },
    { label: '已付款', value: 3 },
    { label: '已退款', value: 4 },
    { label: '订购完成', value: 5 }
]
export const ORDER_STATUS_TYPE = [
    { label: '', value: 1 },
    { label: 'warning', value: 2 },
    { label: 'success', value: 3 },
    { label: 'danger', value: 4 },
    { label: 'success', value: 5 }
]

/**
 * 退款 退款状态
 */
export const REFUND_STATUS = [
    { label: '未退款', value: 0, type: 'warning' },
    { label: '已退款', value: 1, type: 'success' }
]

/**
 * 退款 审核状态
 */
export const REFUND_AUDIT_STATUS = [
    { label: '退款申请', value: 0, type: 'primary' },
    { label: '审核中', value: 1, type: 'primary' },
    { label: '审核通过', value: 2, type: 'success' },
    { label: '审核不通过', value: 3, type: 'warning' },
    { label: '已完成', value: 4, type: 'success' },
    { label: '已作废', value: 5, type: 'danger' }
]

/**
 * 退款方式
 */
export const REFUND_TYPE = [
    { label: '按订单原路返回', value: 1 },
    { label: '微信退款', value: 2 },
    { label: '支付宝退款', value: 3 },
    { label: '退款到商务经理余额', value: 9 }
]

// 劳务公司工程经营范围等级
export const LABOUR_ENGINEER_RANGE_TYPE = [
    { type: 'success', value: 1 },
    { type: '', value: 2 },
    { type: 'warning', value: 3 }
]

/**
 * 发票分类
 */
export const BILL_TYPE = [
    { label: '材料发票', value: 1 },
    { label: '劳务发票', value: 2 },
    { label: '项目发票', value: 3 },
    { label: '咨询发票', value: 4 },
    { label: '其他发票', value: 0 }
]

/**
 * 发票分类
 */
export const PARTA_ATTR = [
    { label: '政府性质', value: 1 },
    { label: '非政府性质', value: 2 }
]


/**
 * 报备有效期——是否允许延期
 */
export const POST_PONE_TYPE = [
    { label: '不支持延期', value: 0 },
    { label: '仅失效前延期', value: 1 },
    { label: '可延期', value: 2 }
]


/**
 * 收据类型
 */
export const RECEIPT_TYPE = [
    { label: '项目收据', value: 1 },
    { label: '商务经理收据', value: 2 }
]

/**
 * 票据类型
 */
export const FANCIAL_BILL_TYPE = [
    { label: '税跨报反馈表', value: 1 },
    { label: '材料发票', value: 2 },
    { label: '劳务发票', value: 3 },
    { label: '咨询服务发票', value: 4 },
    { label: '预交凭证', value: 5 }
]

/**
 * 账户类型
 */
export const COMPANY_ACCOUNT_TYPE = [
    { label: '总公司', value: 1 },
    { label: '分公司', value: 2 }
]

/**
 * 代收代付状态
 */
export const COLLECTION_PAYMENT_STATUS = [
    { label: '已代收', value: 1 },
    { label: '已代付', value: 2 }
]

/**
 * 移交状态
 */
export const TRANSFER_STATUS = [
    { label: '未移交', value: 0 },
    { label: '移交审核中', value: 1 },
    { label: '已移交', value: 2 },
    { label: '审核不通过', value: 3 }
]

/**
 * 使用方式
 */
export const USE_WAY = [
    { label: '托收', value: 0 },
    { label: '背书', value: 1 },
    { label: '贴现', value: 2 },
    { label: '转让', value: 3 },
    { label: '其他', value: 4 }
]

/**
 * 经营还款提取 -- 付款状态
 */
export const PAY_STATUS = [
    { label: '待支付', value: 0, type: 'info' },
    { label: '已付款', value: 1, type: 'success' }
]
