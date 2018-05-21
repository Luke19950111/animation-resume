function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, ); //code的前n个字符以css的形式高亮然后放到domCode.innerHTML中
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight //满屏自动滚动
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

function writeMarkdown(markdown, fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight //满屏自动滚动
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}


var css1 = `/*大家好，我是刘快*/
/*我将以动画的形式介绍我自己*/
/*只用文字介绍太单调了*/
/*我用代码的形式来介绍吧*/
/*首先准备一些样式*/
*{
    transition: all 1s;
}
html{
    background: rgb(222,222,222);
    font-size: 16px;
    font-family: font-family: Helvetica;
}
#code{
    border: 1px solid #aaa;
    padding: 16px;
}

/*我需要给代码加高亮*/
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.comment{
    color: slategray;
}
.token.punctuation{
    color: #999;
}
.token.function{
    color: #DD4A68;
}

/*加点3D效果*/
#code{
    animation: breath 0.5s infinite alternate-reverse;
}


/*好了，来介绍一下我自己吧*/
/*我需要一张白纸*/

#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: yellow;
}
#paper> .content{

}
    `

var md = `
# 我的简历

我叫xxx
生于2111年1月
毕业于xxxx
学习前端半年

# 项目经历

1. xxxx轮播
2. xxxx简历
3. xxxx画板

# 技能

1. javascript
2. html5&css3
3. HTTP
`
var css2 = `
/*接下来使用一个优秀的库 marked.js */
/*将 markdown 变为 HTML */
`

// 异步和同步都可以用回调
writeCode('', css1, () => {
    createPaper(() => {
        writeMarkdown(md, () => {
            writeCode(css1, css2, () => {
                markdownToHTML()
            })
        })
    })
}) 

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

function markdownToHTML(fn){
    var div = document.createElement('div')
    div.className = 'htmlFromMarkdown'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn.call()
}