// import {Container, Logo, LogoutBtn} from '../index'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true
//     }, 
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//   },
//   {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//   },
//   {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//   },
//   {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//   },
//   ]


//   return (
//     <header className='py-3 shadow-lg  w-full bg-white sticky  top-0 z-10'>
//       <Container>
//         <nav className='flex '>
//           <div className='mr-4'>
//             <Link to='/'>
//               <Logo width='100px' height='50px'   />

//               </Link>
//           </div>
//           <ul className='flex ml-auto'>
//             {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name}>
//                 <button
//                 onClick={() => navigate(item.slug)}
//                 className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//         </Container>
//     </header>
//   )
// }

// export default Header


// import { Container, Logo, LogoutBtn } from '../index';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const navigate = useNavigate();

//   const navItems = [
//     {
//       name: 'Home',
//       slug: '/',
//       active: true,
//     },
//     {
//       name: 'Login',
//       slug: '/login',
//       active: !authStatus,
//     },
//     {
//       name: 'Signup',
//       slug: '/signup',
//       active: !authStatus,
//     },
//     {
//       name: 'All Posts',
//       slug: '/all-posts',
//       active: authStatus,
//     },
//     {
//       name: 'Add Post',
//       slug: '/add-post',
//       active: authStatus,
//     },
//   ];

//   return (
//     <header className="py-3 shadow-lg w-full bg-white sticky top-0 z-10">
//       <Container>
//         <nav className="flex flex-wrap items-center">
//           <div className="mr-4">
//             <Link to="/">
//               <Logo width="100px" height="50px" />
//             </Link>
//           </div>
//           <ul className="flex flex-wrap items-center ml-auto space-x-2">
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className="inline-block px-4 py-2 duration-200 hover:bg-blue-100 rounded-full"
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   );
// }

// export default Header;


import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow-lg w-full bg-white sticky top-0 z-10'>
      <Container>
        <nav className='flex flex-wrap items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='100px' height='50px' />
            </Link>
          </div>
          <button 
            className='lg:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <ul className={`flex flex-col lg:flex-row ml-auto w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name} className='w-full lg:w-auto'>
                  <button
                    onClick={() => {
                      navigate(item.slug)
                      setIsMenuOpen(false)
                    }}
                    className='inline-block w-full lg:w-auto px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='w-full lg:w-auto'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header