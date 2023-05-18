const request = require('supertest')
const postService = require('../src/services/post')
const Post = require('../src/models/post')
const Group = require('../src/models/group')

//u need this so it starts the server.
const app = require('../src/app')

describe('create post', () => {
  test('returns "post Created" when post is successfully added', async () => {
    //Define dummy test data to use in the test case
    const postData = {
      userId: 'TestUser1',
      groupId: 'TestGroup1',
      contentText: 'test content',
      images: [],
      comments: [],
      userName: 'test',
      photoUrl: 'test',
    }

    // Call the addNewGroup function with test data
    const result = await postService.addNewPost(postData)

    // Assert that the result is 'Group Created'
    expect(result).toEqual('Post Created')
  }, 10000)
})

describe('getUserPosts', () => {
  // Test that the getAllGroups function returns all groups
  test('get all post posted by the TestUser1', async () => {
    const posts = await postService.getUserPosts('TestUser1')
    console.log(posts)
    console.log(posts.length)
    // expect(posts.length).toHaveLength(2)
    expect(posts.length).toBeGreaterThan(0)
  })
})

describe('getGroupPosts', () => {
  // Test that the getAllGroups function returns all groups
  test('get all post posted in the TestGroup1', async () => {
    const posts = await postService.getGroupPosts('TestGroup1')
    // expect(posts.length).toHaveLength(2)
    expect(posts.length).toBeGreaterThan(0)
  })
})

describe('searchPostsByContent', () => {
  afterAll(async () => {
    await Post.deleteMany({ userId: 'TestUser1' })
  }, 10000)
  test('returns list of posts when there is a post with the searched term', async () => {
    //Define dummy test data to use in the test case
    const posts = await postService.searchPostsByContent('test content', { userId: 'TestUser1' })

    expect(posts.length).toBeGreaterThan(0)
  })
})
