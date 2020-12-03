import * as customRules from './customRules'

/**
 * 通用表单校验
 * 使用方式
 * <el-form-item label="用户名：" prop="username" :rules="rules.string">
 */
const commonRules = {
    string: [
        { required: true, message: '请输入', trigger: 'change' }
    ],
    select: [
        { required: true, message: '请选择', trigger: 'change' }
    ],
    number: [
        { required: true, message: '请输入', trigger: 'change', type: 'number' }
    ],
    amount: [
        { required: true, validator: customRules.validateAmount, trigger: 'change' }
    ],
    noRuiredAmount: [
        { validator: customRules.validateAmountNoRquired, trigger: 'change' }
    ],
    mobile: [
        { required: true, validator: customRules.validateMobile, trigger: 'change' }
    ]
}

export default commonRules
