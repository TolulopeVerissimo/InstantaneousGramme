<div className="ExploreRow">
    {isLoaded &&
        posts.map((post) => (

            <div className='ExploreColumn'>
                <img src={post.imagePath} style={{ width: '100%' }} alt='user_post' />
            </div>

        ))}
</div>