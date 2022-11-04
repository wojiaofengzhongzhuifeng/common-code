const getTree = require('../code/01-create-tree-by-list-1');


// 01-create-tree-by-list.js
test('列表数据 => 树数据正常', () => {


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
  var tree = [{
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
  }]

  expect(getTree(list)).toEqual(tree)
});
