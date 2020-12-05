{
  tag: 'div',
  props: {
    id: 'app',
    className: 'container',
  },
  children: [
    {
      tag: 'h1',
      children: '虚拟DOM'
    },
    {
      tag: 'ul',
      props: { style: 'color: organize' },
      children: [
        {
          tag: 'li',
          children: '第一项'
        },
        {
          tag: 'li',
          children: '第二项'
        },
        {
          tag: 'li',
          children: '第三项'
        }
      ]
    }
  ]
}