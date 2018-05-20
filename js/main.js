


var result = `/*大家好，我是刘快*/
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
    border: 1px solid red;
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
    transform: rotate(360deg);
}


/*好了，来介绍一下我自己吧*/
/*我需要一张白纸*/
    `

var n = 0
var id = setInterval(() => {
    n += 1
    code.innerHTML = result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css,);
    styleTag.innerHTML = result.substring(0, n)
    if (n >= result.length) {
        window.clearInterval(id)
        fn2()
        fn3(result)
    }
}, 10)

function fn2(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function fn3(preResult){
var result = `
#paper{
    background: red;
    width: 100px;
    height: 100px;
}
    `
    var n = 0
    var id = setInterval( () => {
        n += 1
        code.innerHTML = preResult + result.substring(0,n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css,);
        styleTag.innerHTML = preResult + result.substring(0, n)
        if(n >= result.length){
            window.clearInterval(id)
        }
    }, 10)
}