//插件安装完成
window.onload = () => {
	const codes = document.querySelectorAll('code')
	codes.forEach((v) => {
		v.style.cssText = 'color: red'
		v.setAttribute('contenteditable', 'contenteditable')
	})

	window.onblur = null
	window.onblur = function () {
		console.debug(1)
	}

	//解除快捷键操作屏蔽
	window.onkeyup =
		window.onkeydown =
		window.onKeyPress =
		document.onkeyup =
		document.onkeydown =
		document.onKeyPress =
		document.body.onkeyup =
		document.body.onkeydown =
		document.body.onKeyPress =
		onkeyup =
		onkeydown =
		onKeyPress =
			null

	//解除复制粘贴限制
	window.oncopy =
		window.onpaste =
		document.oncopy =
		document.onpaste =
		document.body.oncopy =
		document.body.onpaste =
		oncopy =
		onpaste =
			null

	console.log('禁止切屏幕已经关闭.')

	// 这里是获取background 中的变量
	// chrome.storage.sync.get('color', ({ color }) => {
	//   document.body.style.backgroundColor = color
	// })

	// 启动复制粘贴功能
	// const els = document.getElementsByClassName('article-holder')
	// els.forEach((item, index) => {
	//   els[index].style.userSelect = "auto"
	//   els[index].addEventListener('copy', (e) => {
	//       e.clipboardData.setData('text', window.getSelection().toString())
	//   })
	// })
}
