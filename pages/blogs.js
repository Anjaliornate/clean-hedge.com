 import Link from "next/link";
 import Header from "../components/header";
 import '../styles/Home.module.css'

 export default function blog({data}){
     console.log(data)
     return (

 <div>
 <Header />
 <div id="loader-area">
                     <div className="container">
                         <div className="project-load"></div>
                     </div>
                 </div>
                 <section id="section-blog" className="text-light" data-bgcolor="gray" style={{paddingTop:"15%"}}>
                     <div className="container">
                         <div className="row">
                             <div className="col-lg-6 offset-lg-3">
                                 <div className="text-center">
                                     <h2>Our Blog</h2>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                     <div className="spacer-30"></div>
                                 </div>
                             </div>
                         </div>
                         <div className="row">
                         {data.map((post, index)=>{
                                 return <Link key={index} href={`/blogs/${post['slug']}`}>
                                 <div className="col-lg-4 col-md-6 mb30">
                                 <div className="bloglist item">
                                     <div className="post-content">
                                         <div className="post-image">
                                             <img src={post['_embedded']['wp:featuredmedia'][0]['source_url']}></img>
                                             <div className="post-info">
                                                 <div className="inner"><span className="post-date">10 hours ago</span> <span className="post-author">Oscar Helman</span></div>
                                             </div>
                                         </div>
                                         <div className="post-text">
                                             <h4>{post['title']['rendered']}</h4>
                                             <div className="text-gray-600" dangerouslySetInnerHTML={{__html:post['excerpt']['rendered']}}></div>
                                         </div>
                                     </div>
                                 </div>
                                
                             </div>
                             </Link>
                             })}
                         </div>
                     </div>
                     <center>   
         <div className="pagination">
             <a href="#" >&laquo;</a>
             <a href="#"  className="active" >1</a>
         </div>
     </center>
                 </section> 
             </div>            
     )
 }


  export async function getServerSideProps(){
      const getPosts = await fetch('https:blog.ted.com/wp-json/wp/v2/posts?_embed');
      const data =await getPosts.json();
      return {props: {data}}
  }
