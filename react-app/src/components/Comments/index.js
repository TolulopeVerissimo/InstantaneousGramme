import React from "react";

const Comments = () => {
  return (
    <>
      <div className='COMMENTS'>
        <div style={{ marginLeft: "1rem" }}>
          <div>
            <div>
              {/* change anchor to NavLink */}
              {/* add Hover Profile Modal */}
              <span>Account's Poster</span>
              <span className='spacer'></span>
              <span>Test Caption goes here</span>
              {/* <a>{username}</a> */}
              <span></span>
              <span></span>
            </div>
          </div>
          <div>
            <div>
              {/* viewAllComment is a Modal of the post with the picture and comments on the side. */}
              <span className='viewAllComments'></span>

              <span>Follower's Name 1</span>
              <span className='spacer'></span>
              <span className='postComment1'>
                {" "}
                Follower Comment 1<span className='spacerHEARTS'></span>
                <button>
                  <svg
                    aria-label='Like'
                    class='_8-yf5 '
                    fill='#262626'
                    height='12'
                    viewBox='0 0 48 48'
                    width='12'
                  >
                    <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                  </svg>
                </button>
              </span>
              <br />
              <span>Follower's Name 2</span>
              <span className='spacer'></span>
              <span className='postComment2'>
                Follower Comment 2<span className='spacerHEARTS'></span>
                <button>
                  <svg
                    aria-label='Like'
                    class='_8-yf5 '
                    fill='#262626'
                    height='12'
                    viewBox='0 0 48 48'
                    width='12'
                  >
                    <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='timestamp' style={{ height: "2.8rem", width: "610px" }}>
        <div>
          <br />
          <span style={{ marginLeft: "0.8rem" }}>3 days remaining</span>
          {/* <span style={{ marginLeft: '0.8rem', marginTop: '16px' }}>{timestamp}</span> */}
        </div>
      </div>
      <div className='enterComment' style={{ border: "solid 1px grey" }}>
        <span>
          <form
            style={{ height: "50px", width: "609px", border: "solid 1px grey" }}
          >
            <svg
              style={{
                marginLeft: "0.8rem",
                marginRight: "1rem",
                marginTop: "0.8rem",
              }}
              aria-label='Emoji'
              class='_8-yf5 '
              fill='#262626'
              height='24'
              viewBox='0 0 48 48'
              width='24'
            >
              <path d='M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z'></path>
              <path d='M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z'></path>
            </svg>
            <input
              style={{
                background: "none",
                border: "none",
                marginBottom: ".8rem",
              }}
              size='68'
              placeholder='Add a comment...'
            />
            <button
              class='postComment'
              type='submit'
              disabled=''
              style={{
                background: "none",
                border: "none",
                marginLeft: "0.8rem",
              }}
            >
              Post
            </button>
          </form>
        </span>
      </div>
    </>
  );
};

export default Comments;
