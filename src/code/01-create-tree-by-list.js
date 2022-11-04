// 注：list 是乱序的，不一定是按 id 有序排列
// 1、一维数组转树结构，根据id和pid的关系，将一维数组转换成树结构
var list = [
  {id: 1, name: '根元素', pid: null},
  {id: 2, name: '子元素2', pid: 1},
  {id: 3, name: '子元素3', pid: 2},
  {id: 4, name: '子元素4', pid: 2},
  {id: 5, name: '子元素5', pid: 1},
  {id: 6, name: '子元素6', pid: 3},
  {id: 7, name: '子元素7', pid: 2},
  {id: 8, name: '子元素8', pid: 6},

]
// 期待返回结果
var tree = {
  id: 1,
  name: '根元素',
  children: [
    {
      id: 2,
      name: '子元素2',
      children: [
        {
          id: 3,
          name: '子元素3',
          children: [
            {
              id: 6,
              name: '子元素6',
              children: [
                {
                  id: 8,
                  name: '子元素8',
                }
              ]
            }
          ]
        },
        {
          id: 4,
          name: '子元素4',
        },
        {
          id: 7,
          name: '子元素7',
        },
      ]
    },

    {
      id: 5,
      name: '子元素5',
    },
  ]
}



function getTree(list) {
  // 1. 转化为含有children 的数组
  /*
  [
    {id: 1, name: '根元素', children: [2, 5]},
    {id: 2, name: '子元素2', children: [3, 4, 7, ]},
    {id: 3, name: '子元素3', children: [6]},

    {id: 4, name: '子元素4', children: []},
    {id: 5, name: '子元素5', children: []},
    {id: 6, name: '子元素6', children: [8]},
    {id: 7, name: '子元素7', children: []},
    {id: 8, name: '子元素8', children: []},

  ]
  */
  let temp1 = list.map((item)=>{
    const {id } = item
    let idList = list.filter((item1)=>item1.pid === id).map((item2)=>{
      return item2.id
    })
    let result = {...item, children: idList}
    delete result.pid
    return result
  })

  // 2. 寻找根节点：pid = null
  let rootId = []
  list.map((item)=>{
    if(item.pid === null){
      rootId.push(item.id)
    }
  })

  /*
  3. 不使用递归，通过引用类型的特点，代替递归的作用
    [
    {id: 1, name: '根元素', children: [{id: 2}, {id:5}]},
    {id: 2, name: '子元素2', children: [{id: 3}, {id: 4}, {id: 7}]},
    {id: 3, name: '子元素3', children: [{id:6 }]},

    {id: 4, name: '子元素4', children: []},
    {id: 5, name: '子元素5', children: []},
    {id: 6, name: '子元素6', children: [{id: 8}]},
    {id: 7, name: '子元素7', children: []},
    {id: 8, name: '子元素8', children: []},

  ]
  其中根元素的 children {id: 2} 实际表示 {id:2 , name : '子元素2', children : [{id: 3}, {id: 4}, {id: 7}]}
  */
  temp1.map((item)=>{
    jfdksjfkldas(item, temp1)
  })

  console.log('temp1', temp1);

  // 处理数据
  let result = temp1.map((item)=>{
    let id = item.id
    if(rootId.includes(id)){
      return item
    }
  }).filter(Boolean)

  console.log(result);
  return result
}

// 把 obj.children: [2] => obj.children: [{id: 2}]
function jfdksjfkldas(obj, initial){
  let childrenIdList = obj.children
  if(childrenIdList.length !== 0){
    obj.children = childrenIdList.map((id) => {
      let match = initial.filter((item) => {
        return item.id === id
      })
      if(match.length === 0){
        return undefined
      }
      if(match.length === 1){
        match = match[0]
      }
      return match
    }).filter(Boolean)

  }
}
getTree(list)

module.exports = getTree
