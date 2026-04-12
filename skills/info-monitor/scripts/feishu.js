/**
 * 资讯监控系统 - 飞书通知模块（简化版用于示例）
 * 
 * 功能：
 * 1. 更新飞书文档
 * 2. 推送消息到飞书群组
 */

const fetch = require('node-fetch');

/**
 * 获取飞书访问令牌
 * @param {string} appID - 应用 ID
 * @param {string} appSecret - 应用密钥
 * @returns {Promise<string>} - 访问令牌
 */
async function getAccessToken(appID, appSecret) {
    const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            app_id: appID,
            app_secret: appSecret
        })
    });
    
    const data = await response.json();
    return data.app_access_token;
}

/**
 * 更新飞书文档
 * @param {string} docToken - 文档 Token
 * @param {Array} items - 要添加的内容
 * @param {object} config - 飞书配置
 * @returns {Promise<object>} - 响应数据
 */
async function pushToFeishuDoc(docToken, items, config) {
    const accessToken = await getAccessToken(config.FEISHU_APP_ID, config.FEISHU_APP_SECRET);
    
    // 构建文档内容
    let content = `# 📰 ${new Date().toLocaleString()} 资讯速报\n\n`;
    
    items.forEach((item, index) => {
        content += `${index + 1}. **[${item.site}]** [${item.title}](${item.url})\n`;
    });
    
    // 添加到文档（简化实现）
    // 实际使用时需要根据飞书文档 API 进行调整
    const response = await fetch(`https://open.feishu.cn/open-apis/bitable/v1/apps/${docToken}/records`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            fields: {
                '标题': items[0]?.title || '无内容',
                '来源': items[0]?.site || '未知',
                '链接': items[0]?.url || ''
            }
        })
    });
    
    return await response.json();
}

/**
 * 推送消息到飞书群组
 * @param {Array} items - 要推送的内容
 * @param {string} webhookUrl - 飞书机器人 webhook URL
 * @returns {Promise<object>} - 响应数据
 */
async function pushToFeishuWebhook(items, webhookUrl) {
    // 构建消息内容
    let message = `# 📰 ${new Date().toLocaleString()} 资讯速报\n\n`;
    
    items.forEach((item, index) => {
        message += `${index + 1}. **[${item.site}]** [${item.title}](${item.url})\n`;
    });
    
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            msg_type: 'text',
            content: {
                text: message
            }
        })
    });
    
    return await response.json();
}

module.exports = {
    pushToFeishuDoc,
    pushToFeishuWebhook
};
