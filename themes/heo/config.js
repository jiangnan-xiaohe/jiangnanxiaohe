const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-06-01', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 [] 
  HEO_NOTICE_BAR: [
    { title: '《2025独立站冷启动避坑指南》', url: 'https://jiangnanxiaohe.com/article/should-i-start-standalone-site-2025' },
    { title: 'FB广告的8个实战问答', url: 'https://jiangnanxiaohe.com/article/facebook-ads-8-beginner-mistakes' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '坦诚相见',
  HEO_HERO_TITLE_2: '见字亦如面',
  HEO_HERO_TITLE_3: '高山流水遇知音~灵魂共鸣',
  HEO_HERO_TITLE_4: '我愿景建立一个由顶尖的品牌人、投手、设计师、内容创作者组成的社群生态',   //'忘掉你听说的那些，这才是独立站的正确玩法'
  HEO_HERO_TITLE_5: '江南小和的跨境圈',
  HEO_HERO_TITLE_LINK: '',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '创客空间',  //'不做平台|只做品牌'

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: 'https://jiangnanxiaohe.com/article/should-i-start-standalone-site-2025' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: 'https://jiangnanxiaohe.com/article/cross-border-ecommerce-hard-truth' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: 'https://jiangnanxiaohe.com/article/facebook-ads-8-beginner-mistakes' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🚀 DTC品牌出海实战派',
    '🛒 资深独立站优化师',
    '💡 擅长用A/B测试打磨每一个转化细节',
    '🌍 深耕跨境电商五年+',
    '👇 从一篇“必看精选”开始了解我',
    '📊 Facebook广告优化师 & 数据分析师',
    '🚀 致力于产品的价值增长',
    '📈 精通Google Analytics 4，让数据说话',
    '📚 用碎片化时间丈量世界',
    '✍️ 一个热爱研究用户购买心理的营销人',
    '💡 曾是一名高级电子攻城狮',
    '🛠️ 2021年四位合伙人深圳创业',
    '🤔 始终相信，最好的营销是“产品本身”',
    '💰 致力于提升广告ROAS',
    '🤝 很高兴能与你在此相遇',
    '❤️ 对创造能解决实际问题的品牌充满热情',
    '✨ 真正研发制造批发电商外贸全流程',
    '💻 搞定独立站从0到1全链路',
    '🏃 保持好奇，永远在路上',
    '🎯 精研Facebook广告精准投放',
    '✍️ 热衷打磨高转化广告素材',
    '💡 分享一线投手踩坑经验',
    '🤝 期待与优秀的你思维碰撞',
    '💬 期待与你探讨流量玩法',
    '🧠 广告策略与用户心理研究者',
    '🛠️ 打造可复制的增长模型',
    '✨ 分享让品牌发光的营销思考',
    '💬 欢迎随时给我留言，有问必答',
    '🙏 寻求志同道合的品牌伙伴',
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: '/images/gongzhonghao.JPG',
  HEO_INFO_CARD_ICON2: 'fab fa-weixin text-white',
  HEO_INFO_CARD_URL3: 'https://jiangnanxiaohe.com/article/should-i-start-standalone-site-2025',
  HEO_INFO_CARD_TEXT3: '利他之心',

  // 用户技能图标
  HEO_GROUP_ICONS: [

    {
      title_1: 'github',
      img_1: '/images/heo/github.png',
      color_1: '#ffffff',
      title_2: 'linkedin',
      img_2: '/images/heo/linkedin.png',
      color_2: '#ffffff'
    },

    {
      title_1: 'google',
      img_1: '/images/heo/google.png',
      color_1: '#ffffff',
      title_2: 'pinterest',
      img_2: '/images/heo/pinterest.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'facebook',
      img_1: '/images/heo/facebook.png',
      color_1: '#ffffff',
      title_2: 'whatsapp',
      img_2: '/images/heo/whatsapp.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'reddit',
      img_1: '/images/heo/reddit.png',
      color_1: '#ffffff',
      title_2: 'shopify',
      img_2: '/images/heo/shopify.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'amazon',
      img_1: '/images/heo/amazon.png',
      color_1: '#ffffff',
      title_2: 'messenger',
      img_2: '/images/heo/messenger.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'producthunt',
      img_1: '/images/heo/producthunt.png',
      color_1: '#ffffff',
      title_2: 'twitter',
      img_2: '/images/heo/twitter.png',
      color_2: '#ffffff'
    },
    // {
    //   title_1: 'youtube',
    //   img_1: '/images/heo/youtube.png',
    //   color_1: '#ffffff',
    //   title_2: 'wordpress',
    //   img_2: '/images/heo/wordpress.png',
    //   color_2: '#ffffff'
    // }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '人脉的本质',
  HEO_SOCIAL_CARD_TITLE_2: '弱连接的力量|点击信任的桥梁',
  HEO_SOCIAL_CARD_TITLE_3: '加入我的出海公众号',
  HEO_SOCIAL_CARD_URL: '/images/gongzhonghao.JPG',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
