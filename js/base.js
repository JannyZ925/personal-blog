// 当前页面的所有资源已经加载完毕 才会执行函数体内的代码
function loadNavigation() {
    const navigationContainer = document.getElementById('navigation-container')
    // 配置导航列表
    const navigations = [
        {
            name: '首页',
            link: '../home/home.html'
        },
        {
            name: '个人档案',
            link: '../profiles/profiles.html'
        },
        {
            name: '技术文章',
            link: '../articles/articles.html'
        },

        {
            name: '友情链接',
            link: '../links/links.html'
        },
        {
            name: '心情日志',
            link: '../moodLog/moodLog.html'
        },
        {
            name: '温馨相册',
            link: '../album/album.html'
        }
    ]
    // 声明要填入父盒子的html字符串 let声明变量 const声明常量
    let navigationHtml = ``
    for (let index = 0; index < navigations.length; index++) {
        const element = navigations[index];
        navigationHtml = navigationHtml + `
        <a href="${element.link}">${element.name}</a>`
    }
    navigationContainer.innerHTML = navigationHtml;
}