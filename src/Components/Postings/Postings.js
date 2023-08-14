import React from 'react';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

const _renderJumbotron = () => (
  <div class="Jumbotron">
    <h1 class="display-4">Postings</h1>
  </div>
);
  
const _renderCardHeader = (post) => {
  const {id,title} = post;
    
  return (
    <div className="card-header">
      #{id}{title}
    </div>
  )
};
  
const _renderCardBody = (post) => {
  const {body} = post;
  
  return (
    <div className="card-body">
      <p className="card-text">{body}</p>
    </div>
  )
};

const handleClick = (setModalDisplay, setSelectedPost, post) => {
  setModalDisplay(true)
  setSelectedPost(post)
};

const _renderCard = (posts, setModalDisplay, setSelectedPost) => (
  
  <div className="container">
    {posts.slice(0, 15).map((post) => (
      <div className="card" key={post.id}>
        {_renderCardHeader(post)}
        {_renderCardBody(post)}
        <button className='open-m' onClick = {() => handleClick(setModalDisplay, setSelectedPost, post)}>
          View More
        </button>
      </div>
    ))}
  </div>
)

const _renderModal = (isModalDisplayed, setModalDisplay, selectedPost) => (

  <div>
    <ReactModal 
    isOpen={isModalDisplayed}
    contentLabel='Post Modal'
    className="mdl"
    >
      <button className='close-btn' onClick={() => setModalDisplay(false)}>✕</button>
      <h1 className='title-m'>{selectedPost.title}</h1>
      <h3 className='body-m'>{selectedPost.body}</h3>
    </ReactModal>
  </div>
)


const usePostList = (setPosts) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30")
    .then(response => response.json())
    .then(result => setPosts(result));
  }, []);
};

const Postings = () => {
  const [posts, setPosts] = useState([]);
  const [isModalDisplayed, setModalDisplay] = useState(false);
  const [selectedPost, setSelectedPost] = useState('0');
  
  usePostList(setPosts);

  return (
    <div className="container">
      {_renderJumbotron()}
      {_renderCard(posts, setModalDisplay, setSelectedPost)}
      {_renderModal(isModalDisplayed, setModalDisplay, selectedPost)}
    </div>
  );
};
    
export default Postings;