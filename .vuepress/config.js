module.exports = {
  "title": "love dairy 恋爱日记",
  "description": "记录想念倩倩的每一天",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "mode": 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    "modePicker": false, // 默认 true，false 不显示模式调节按钮，true 则显示
    "nav": [
      {
        "text": "时光机",
        "link": "/timeline/",
        "icon": "reco-date"
      },
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "蔡蔡",
        "desc": "我的女孩她在未来等我",
        "email": "876057433@qq.com",
        "link": "https://www.calebcai.github.io"
      },
      {
        "title": "蔡蔡的日记本",
        "desc": "唯愿我们的爱，能够成为一段佳美的见证",
        "avatar": "/logo.jpg",
        "link": "https://www.calebcai.github.io"
      }
    ],
    "logo": "/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "calebcai",
    "navbar": true,
    "authorAvatar": "/avatar.jpg",
    "record": "记录想倩倩的每一天",
    "startYear": "2021.6.29"
  },
  "markdown": {
    "lineNumbers": true
  },
}