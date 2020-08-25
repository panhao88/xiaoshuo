const { default: api } = require("../../http/api")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
    male:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   

  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    goto(e){
      console.log(e ,11)
     let index = e.currentTarget.dataset.index
     //用来判断是从哪儿传过去的
     let type = e.currentTarget.dataset.type 
     let name = e.currentTarget.dataset.item.name
    wx.navigateTo({
      url: `../../pages/detail/detail?index=${index}&type=${type}&name=${name}`,
    })
    },
    
  }
})
