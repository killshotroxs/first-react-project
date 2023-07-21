import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Postings from './Components/Postings/Postings';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/postings' />}></Route>
        <Route path='/postings' element={<Postings />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}
  
export default App;

// const _renderJumbotron = () => (
//   <div class="Jumbotron">
//       <h1 class="display-4">Postings</h1>
//   </div>
// );

// const _renderCardHeader = (post) => {
//   const {id,title} = post;
  
//   return (
//       <div className="card-header">
//           #{id}{title}
//       </div>
//   )
// };

// const _renderCardBody = (post) => {
//   const {body} = post;

//   return (
//       <div className="card-body">
//           <p className="card-text">{body}</p>
//       </div>
//   )
// };

// const _renderCard = (posts) => (
//   <div className="container">
//       {posts.slice(0, 15).map((post) => (
//           <div className="card" key={post.id}>
//               {_renderCardHeader(post)}
//               {_renderCardBody(post)}
//           </div>
//       ))}
//   </div>
// )

// const usePostList = (setPosts) => {

// useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30")
//     .then(response => response.json())
//     .then(result => setPosts(result));
// }, []);
// }

// const Postings = () => {

//   const [posts, setPosts] = useState([]);
//   usePostList(setPosts);
// return (
//   <div className="container">
//       {_renderJumbotron()}
//       {_renderCard(posts)}
//   </div>
//   )
// }

// export default function App() {

//   const [active, setActive] = useState("");
 
//   const handleClick = (event) => {
//     setActive(event.target.id);
    
//   }

//   const navigate = useNavigate();

//   const navigateToProfile = () => {
//     navigate('/profile');
//   };

//   const navigatePostings = () => {
//     navigate('/');
//   };

//   const [btnClass, setBtnClass] = useState('blue-color');

//   function toggleColor() {
//     if (btnClass === 'blue-color') {
//         setBtnClass('orange-color');
//     } else {
//         setBtnClass('blue-color');
//     }
// }

//   return (
//     <div>
//       <nav className="nav">
//       <button 
//   onClick={() => {
//     navigatePostings();
//     toggleColor();
//   }}
//   className={`${btnClass} po-btn`}
//   >Postings</button>
// <button active color='red'
//   onClick={() => {
//     navigateToProfile();
//     toggleColor();
//   }}
//   className={`${btnClass} pr-btn`}>Profile</button>

//         <Routes>
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/" element={<Postings />} />
//         </Routes>
//       </nav>
//     </div>
//   );
// }