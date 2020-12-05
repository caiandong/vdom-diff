// 引入snabbdom 库
const snabbdom = window.snabbdom

// 将 vnode (虚拟节点) 塞入空的容器中
const patch = snabbdom.init([
  snabbdom_class,
  snabbdom_props,
  snabbdom_style,
  snabbdom_eventlisteners
])

// 创建 vnode (虚拟节点)
const h = snabbdom.h

// 获取按钮节点
const btn = document.getElementById('btn')

// 空的容器
const container = document.getElementById('container')

// 创建 vnode
const vnode = h('ul#list', {}, [
  h('li.item', {}, '第一项'),
  h('li.item', {}, '第二项'),
])

// vnode -> 空容器
patch(container, vnode);
// 按钮点击事件
btn.addEventListener('click', () => {
  const newNode = h('ul#list', {}, [
    h('li.item', {}, '第一项'),
    h('li.item', {}, '第二项1111'),
    h('li.item', {}, '第三项'),
  ])

  // 用新的 vnode 更新 老的 vnode
  patch(vnode, newNode);
  vnode = newNode;
})