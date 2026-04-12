/**
 * 资讯监控系统 - 网站配置
 * 
 * 此文件包含监控网站的配置
 * 你可以在 .env 中覆盖这些配置
 */

const MONITORED_SITES = [
    // ========== 财经类 ==========
    {
        name: '财联社',
        url: 'https://www.cls.cn/',
        type: 'news',
        keywords: ['科技', 'AI', '大模型', '互联网', '半导体', '芯片', '新能源', '金融', '股市', '基金']
    },
    {
        name: '第一财经',
        url: 'https://www.yicai.com/',
        type: 'news',
        keywords: ['财经', '金融', '股市', '经济', '商业', '企业', '投资']
    },
    {
        name: '证券时报网',
        url: 'http://www.stcn.com/',
        type: 'news',
        keywords: ['股市', '金融', '证券', '投资', '基金', '银行', '保险']
    },
    {
        name: '上海证券报',
        url: 'http://www.cnstock.com/',
        type: 'news',
        keywords: ['股市', '金融', '证券', '政策', '经济', '企业']
    },
    {
        name: '财新网',
        url: 'https://www.caixin.com/',
        type: 'news',
        keywords: ['财经', '金融', '经济', '商业', '政经', '深度报道']
    },
    
    // ========== 科技类 ==========
    {
        name: '36氪',
        url: 'https://36kr.com/',
        type: 'news',
        keywords: ['创业', '融资', '投资', '科技', 'AI', '大模型', '互联网', '产品经理']
    },
    {
        name: '虎嗅网',
        url: 'https://www.huxiu.com/',
        type: 'news',
        keywords: ['互联网', '商业', '科技', 'AI', '大模型', '创业']
    },
    {
        name: '极客公园',
        url: 'https://www.geekpark.net/',
        type: 'news',
        keywords: ['科技', 'AI', '大模型', '互联网', '创业', '产品', '硬件']
    },
    {
        name: '界面新闻',
        url: 'https://www.jiemian.com/',
        type: 'news',
        keywords: ['财经', '科技', '商业', '地产', '汽车', '金融']
    },
    {
        name: '知乎',
        url: 'https://www.zhihu.com/',
        type: 'news',
        keywords: ['科技', '互联网', '商业', '人工智能', '自动驾驶', '机器人']
    },
    
    // ========== 半导体/硬科技 ==========
    {
        name: '半导体行业观察',
        url: 'https://www.icbc.com.cn/',
        type: 'news',
        keywords: ['半导体', '芯片', '科技', '新能源', 'AI', '光伏', '锂电池']
    },
    {
        name: '集微网',
        url: 'https://www.laoyaoba.com/',
        type: 'news',
        keywords: ['半导体', '芯片', '科技', ' manufacture', '设备', '材料']
    },
    {
        name: '芯智闻',
        url: 'https://www.xipu.cn/',
        type: 'news',
        keywords: ['半导体', '芯片', '科技', '人工智能', '物联网']
    },
    
    // ========== AI/大模型 ==========
    {
        name: 'AI科技评论',
        url: 'https://www.ai8080.com/',
        type: 'news',
        keywords: ['AI', '人工智能', '机器学习', '大模型', '深度学习', 'NLP', '计算机视觉']
    },
    {
        name: '量子位',
        url: 'https://www.qbitai.com/',
        type: 'news',
        keywords: ['AI', '人工智能', '机器学习', '大模型', '自动驾驶', '机器人']
    },
    {
        name: '新智元',
        url: 'https://www.ai8080.com/',
        type: 'news',
        keywords: ['AI', '人工智能', '大模型', '机器人', '自动驾驶', '智能制造']
    },
    
    // ========== 创业/投资 ==========
    {
        name: '投资界',
        url: 'https://www.pedaily.cn/',
        type: 'news',
        keywords: ['创业', '融资', '投资', 'VC', 'PE', '并购', ' IPO']
    },
    {
        name: '猎云网',
        url: 'https://www.lieyunwang.com/',
        type: 'news',
        keywords: ['创业', '融资', '互联网', '科技', 'SaaS', '电商']
    },
    {
        name: '创客汇',
        url: 'https://www.chuangke.net/',
        type: 'news',
        keywords: ['创业', '融资', '科技', '互联网', 'SaaS', '人工智能']
    },
    
    // ========== 国际资讯 ==========
    {
        name: '财联社国际',
        url: 'https://www.cls.cn/column/1052',
        type: 'news',
        keywords: ['国际', '海外', '美股', '港股', '外汇', '大宗商品']
    },
    {
        name: '华尔街见闻',
        url: 'https://wallstreetcn.com/',
        type: 'news',
        keywords: ['财经', '金融', '美股', '港股', '外汇', '黄金', '原油']
    },
    {
        name: '彭博',
        url: 'https://www.bloomberg.com/',
        type: 'news',
        keywords: ['国际', '财经', '金融', '美股', '经济', '企业']
    },
    
    // ========== 行业深度 ==========
    {
        name: '36氪 Pro',
        url: 'https://36kr.com/pro',
        type: 'news',
        keywords: ['深度', '分析', '行研', '商业', '战略']
    },
    {
        name: '虎嗅 Pro',
        url: 'https://www.huxiu.com/pro',
        type: 'news',
        keywords: ['深度', '分析', '商业', '战略', '行业']
    },
    
    // ========== 社交媒体/社区 ==========
    {
        name: '雪球',
        url: 'https://xueqiu.com/',
        type: 'news',
        keywords: ['投资', '股市', '基金', '理财', '股票', '证券']
    },
    {
        name: '微博热门',
        url: 'https://weibo.com/hot',
        type: 'news',
        keywords: ['热点', '社会', '娱乐', '科技', '财经', '体育']
    },
    
    // ========== 视频资讯 ==========
    {
        name: 'B站科技区',
        url: 'https://space.bilibili.com/12394676/channel/seriesdetail?sid=349455',
        type: 'video',
        keywords: ['科技', 'AI', '数码', '测评', '科普']
    },
    {
        name: '抖音科技',
        url: 'https://www.douyin.com/category/tech',
        type: 'video',
        keywords: ['科技', 'AI', '数码', ' Tutorial']
    }
];

module.exports = {
    MONITORED_SITES
};
