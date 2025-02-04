
// // import React, { useEffect, useState } from "react";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import appwriteService from "../appwrite/config";
// // import { Button, Container } from "../components";
// // import parse from "html-react-parser";
// // import { useSelector } from "react-redux";

// // export default function Post() {
// //     const [post, setPost] = useState(null);
// //     const { slug } = useParams();
// //     const navigate = useNavigate();

// //     const userData = useSelector((state) => state.auth.userData);

// //     const isAuthor = post && userData ? post.userId === userData.$id : false;

// //     useEffect(() => {
// //         if (slug) {
// //             appwriteService.getPost(slug).then((post) => {
// //                 if (post) setPost(post);
// //                 else navigate("/");
// //             });
// //         } else navigate("/");
// //     }, [slug, navigate]);

// //     const deletePost = () => {
// //         appwriteService.deletePost(post.$id).then((status) => {
// //             if (status) {
// //                 appwriteService.deleteFile(post.featuredImage);
// //                 navigate("/");
// //             }
// //         });
// //     };

// //     return post ? (
// //         <div className="py-8">
// //             <Container>
// //                 <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
// //                     <img
// //                         src={appwriteService.getFilePreview(post.featuredImage)}
// //                         alt={post.title}
// //                         className="rounded-xl"
// //                     />

// //                     {isAuthor && (
// //                         <div className="absolute right-6 top-6">
// //                             <Link to={`/edit-post/${post.$id}`}>
// //                                 <Button bgColor="bg-green-500" className="mr-3">
// //                                     Edit
// //                                 </Button>
// //                             </Link>
// //                             <Button bgColor="bg-red-500" onClick={deletePost}>
// //                                 Delete
// //                             </Button>
// //                         </div>
// //                     )}
// //                 </div>
// //                 <div className="w-full mb-6">
// //                     <h1 className="text-2xl font-bold">{post.title}</h1>
// //                 </div>
// //                 <div className="browser-css">
// //                     {parse(post.content)}
// //                     </div>
// //             </Container>
// //         </div>
// //     ) : null;
// // }


// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import appwriteService from "../appwrite/config";
// import { Button, Container } from "../components";
// import parse from "html-react-parser";
// import { useSelector } from "react-redux";

// export default function Post() {
//     const [post, setPost] = useState(null);
//     const { slug } = useParams();
//     const navigate = useNavigate();

//     const userData = useSelector((state) => state.auth.userData);

//     const isAuthor = post && userData ? post.userId === userData.$id : false;

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if (post) setPost(post);
//                 else navigate("/");
//             });
//         } else navigate("/");
//     }, [slug, navigate]);

//     const deletePost = () => {
//         appwriteService.deletePost(post.$id).then((status) => {
//             if (status) {
//                 appwriteService.deleteFile(post.featuredImage);
//                 navigate("/");
//             }
//         });
//     };

//     return post ? (
//         <div className="py-8">
//             <Container>
//                 <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
//                     <img
//                         src={appwriteService.getFilePreview(post.featuredImage)}
//                         alt={post.title}
//                         className="rounded-xl w-full h-auto max-w-full"
//                     />

//                     {isAuthor && (
//                         <div className="absolute right-2 top-2 sm:right-6 sm:top-6 flex flex-col sm:flex-row">
//                             <Link to={`/edit-post/${post.$id}`} className="mb-2 sm:mb-0 sm:mr-3">
//                                 <Button bgColor="bg-green-500" className="w-full sm:w-auto">
//                                     Edit
//                                 </Button>
//                             </Link>
//                             <Button bgColor="bg-red-500" onClick={deletePost} className="w-full sm:w-auto">
//                                 Delete
//                             </Button>
//                         </div>
//                     )}
//                 </div>
//                 <div className="w-full mb-6">
//                     <h1 className="text-xl sm:text-2xl font-bold">{post.title}</h1>
//                 </div>
//                 <div className="browser-css text-sm sm:text-base">
//                     {parse(post.content)}
//                 </div>
//             </Container>
//         </div>
//     ) : null;
// }


import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <Container>
                <article className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                        {isAuthor && (
                            <div className="absolute top-4 right-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="w-full sm:w-auto px-4 py-2 text-sm">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost} className="w-full sm:w-auto px-4 py-2 text-sm">
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="px-6 py-8">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>
                        <div className="prose prose-lg max-w-none text-start text-gray-700">
                            {parse(post.content)}
                        </div>
                    </div>
                </article>
            </Container>
        </div>
    ) : null;
}