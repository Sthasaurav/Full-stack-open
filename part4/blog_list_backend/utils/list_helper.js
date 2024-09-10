const dummy = (blogs) => {
 
    return 1
}

total=0

const totalLikes = (blogs) =>  blogs.reduce((a, i) => a + i.likes, 0)
  /*
      total =0
      1. iterate through blogs, 
      2. add no of likes in each blog to total
      return total
    */
const favoriteBlog=(blogs)=>blogs.reduce((a,i) => a.likes > i.likes ? a : i, {})
 



  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }