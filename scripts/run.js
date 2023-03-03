const {
    getTotalPostCount,
    getPostDetails,
    likePost,
    createPost,
    rewardPost,
} = require("./helpers.js")

async function main() {
    await createPost("title11", "content11")

    postCount = await getTotalPostCount()
    console.log(`Post Count is ${postCount}`)

    for (let postId = 0; postId < postCount; postId++) {
        post = await getPostDetails(postId)
        console.log(`Post ID ${postId}`)
        console.log(`Author ${post.author}`)
        console.log(`Title ${post.postTitle}`)
        console.log(`Content ${post.content}`)
        console.log(`Rewards ${post.rewardEarned}`)
        console.log(`Likes ${post.likes}`)
        console.log()
    }
    const hash = await rewardPost(3, "1")
    console.log(`Transaction hash: ${hash}`)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
