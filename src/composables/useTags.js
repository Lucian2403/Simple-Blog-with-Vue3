// take in an array of posts
// create a new tag set (so no duplicates)
// add the tags of each post to the tag set
// return a single array of tags based on the set

import { ref } from 'vue'

const useTags = (posts) => {

  const tags = ref([])
  //'Set' - an array which doesn't allow duplicates values
  const tagSet = new Set()

  //we fire a function for each tag in a post ('item') which will cycle for every single post(from 'db.json'), and each post will cycle for every single 'tags' and add every tag into the 'tagSet' ONCE. (no tag duplicate)
  posts.forEach(item => {
    item.tags.forEach(tag => tagSet.add(tag))
  })

  // turn the 'tagSet' into an array
  tags.value = [...tagSet]

  return { tags }
}

export default useTags