/**
 * 资讯监控系统 - 主程序（简化版用于示例）
 * 
 * 功能：
 * 1. 定时检查配置的网站
 * 2. 根据关键词过滤内容
 * 3. 保存到飞书文档
 * 4. 推送新内容到飞书
 */

const fs = require('fs');
const path = require('path');

// 使用内置的 https/http 模块代替 node-fetch
const https = require('https');
const http = require('http');
const cheerio = require('cheerio');

/**
 * 获取网站内容
 * @param {string} url - 要抓取的 URL
 * @returns {Promise<string>} - 网页 HTML 内容
 */
function fetchWebsite(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        
        let request;
        if (url.startsWith('https')) {
            const httpsAgent = new https.Agent({
                rejectUnauthorized: false
            });
            request = client.request(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                },
                timeout: 10000,
                agent: httpsAgent
            }, (res) => {
                let data = '';
                
                res.on('data', (chunk) => {
                    data += chunk;
                });
                
                res.on('end', () => {
                    resolve(data);
                });
            });
        } else {
            request = client.request(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                },
                timeout: 10000
            }, (res) => {
                let data = '';
                
                res.on('data', (chunk) => {
                    data += chunk;
                });
                
                res.on('end', () => {
                    resolve(data);
                });
            });
        }
        
        request.on('error', (e) => {
            reject(e);
        });
        
        request.on('timeout', () => {
            request.destroy();
            reject(new Error('Request timeout'));
        });
        
        request.end();
    });
}

/**
 * 解析网页内容
 * @param {string} html - HTML 内容
 * @param {object} siteConfig - 网站配置
 * @returns {Array} - 解析出的内容数组
 */
function parseWebsite(html, siteConfig) {
    const $ = cheerio.load(html);
    const items = [];
    
    // 根据不同的网站结构解析
    // 这里以通用的新闻列表为例
    $('h2, h3, article').each((i, elem) => {
        const title = $(elem).text().trim();
        if (title && title.length > 10) {
            items.push({
                title: title,
                site: siteConfig.name,
                url: siteConfig.url,
                timestamp: new Date().toISOString(),
                keywords: siteConfig.keywords || []
            });
        }
    });
    
    return items;
}

/**
 * 检查关键词匹配
 * @param {string} title - 标题
 * @param {Array} keywords - 关键词列表
 * @returns {boolean} - 是否匹配
 */
function checkKeywords(title, keywords) {
    if (!keywords || keywords.length === 0) return true;
    return keywords.some(keyword => title.includes(keyword));
}

module.exports = {
    fetchWebsite,
    parseWebsite,
    checkKeywords
};
