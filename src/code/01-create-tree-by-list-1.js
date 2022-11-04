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
  // 数据结构转化过程
  /*
  [
    {id: 1, name: '根元素', pid: null},
    {id: 2, name: '子元素2', pid: 1},
    {id: 3, name: '子元素3', pid: 2},
  ]

   temp1 = [
    {id: 1, name: '根元素', children: [{id: 1}]},
    {id: 2, name: '子元素2', children: [{id: 3}]},
    {id: 3, name: '子元素3'},
   ]

   temp2 = [
    {id: 1, name: '根元素', children: [{id: 1}]},
   ]
   */
  let rootIdList = []
  let temp1 = list.map((item)=>{
    if(item.pid === null){rootIdList.push(item.id)}

    let childrenList = list.filter((item1)=>item1.pid === item.id)
    if(childrenList.length === 0){
      delete item.children
    } else {
      item.children = childrenList
    }

    delete item.pid
    return item
  })
  console.log('temp1', temp1);



  let temp2 = temp1.filter((item)=>{
    return rootIdList.includes(item.id);

  })
  console.log('temp2', temp2);

  return temp2
}

getTree(list)
module.exports = getTree

