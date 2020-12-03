/**
 * 业务配置项
 */

const opts = [
    // 付款申请
    {
        name: 'create-payment',
        version2: {
            model: 1
        }
    },
    // 开票申办
    {
        name: 'create-bill',
        version2: {
            model: 1
        }
    },
    // 预缴凭证
    {
        name: 'create-prepaid',
        version2: {
            model: 1
        }
    },
    // 稅跨报
    {
        name: 'cross-tax-apply',
        version2: {
            model: 1
        }
    },
    // 项目报销
    {
        name: 'reimbur-apply',
        version2: {
            model: 1
        }
    },
    // 完税报销
    {
        name: 'taxpaid-apply',
        version2: {
            model: 1
        }
    },
    // 收据管理
    {
        name: 'create-receipt',
        version2: {
            model: 1
        }
    },
    // 预缴凭证
    {
        name: 'create-prepayment-voucher',
        version2: {
            model: 1
        }
    },
    // 劳务开票
    {
        name: 'create-billing',
        version2: {
            model: 1
        }
    },
    // 提取申请
    {
        name: 'extract-apply',
        version1: {
            model: 2
        }
    },
    // 发票作废申请
    {
        name: 'create-invalid-invoice',
        version2: {
            model: 1
        }
    }
]

export default opts
