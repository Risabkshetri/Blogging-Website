import {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import {Button} from '../components/index';
import heroImg from '../assets/heroImg.png'
import { Link } from 'react-router-dom';
import emoji from '../assets/waiting-emoji.jpeg'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    const [start, setStart] = useState(false);
    const getSrart =() =>{
        setStart(true)
    }
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                {start ? (
                   <div className='bg-white h-96 w-auto flex flex-col items-center justify-center px-5'>
                   <div className='bg-white w-auto flex flex-col items-center gap-5'>
                   <h1 className='text-2xl text-red-600'>please signin to read and write posts. 
                   </h1>
                   <img src={emoji} alt="" className='max-w-full h-auto'/>
                   <Button className='bg-red-600 mr-10'>
                        <Link to = '/signup'>signup</Link>
                    </Button>
                   </div>
                   </div>
                ) :(
                <Container>
                    <div className="flex flex-wrap">
                       <div className='flex flex-col gap-4 w-full md:w-1/2 items-start justify-start mb-8 md:mb-0'>
                       <h1 className='text-3xl md:text-4xl font-bold'>Blog with best.</h1>
                       <p className='text-start'>Discover why <a className='text-blue-700 hover:underline' href="https://kshetriai.com/">KshetriAIBlog</a> is the preferred platform for bloggers and independent creators. Leverage user-friendly and versatile tools designed to empower writers, bloggers, and creators to bring their visions to life.</p>
                       <Button 
                       className='bg-pink-500 text-black hover:bg-purple-900'
                       onClick={getSrart}
                       >Start a Blog</Button>
                       </div>
                       <div className='w-full md:w-1/2'>
                        <img src={heroImg} alt="" className='max-w-full h-auto'/>
                       </div>
                    </div>
                </Container>
                )}
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home