 import Header from "../components/header";
 import Footer from "../components/footer";
 import '../styles/Home.module.css';
 import React from 'react';

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
                <section id="section-blog" className="text-light" data-bgcolor="#f5f5f5" style={{paddingTop:"15%"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="text-center">
                                    <h2>Our Blog</h2>
                                    <p></p>
                                    <div className="spacer-30"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        {data.map((post,index)=>{
                                return <a key={index} href={`/blogs/${post['slug']}`}>
                                <div className="row vk" style={{paddingBottom:"3%;" , paddingTop:"3%;" , backgroundColor:"white;" , marginTop:"3%" , borderRadius:"20px" , boxShadow: '0 2px 15px 0 rgb(2 2 2 / 7%)'}}>
                                <div className="col-md-6">
                                <div className="bloglist item">
                                    <div className="post-content">
                                        <div className="post-image">
                                            <img src={post['_embedded']['wp:featuredmedia'][0]['source_url']} style={{height:"280px"}}></img>
                                            <div className="post-info">
                                                   <div className="inner"><span className="post-date">1 hours ago</span> <span className="post-author">Arjun Paridwal</span></div>
                                               </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="post-text">
                                            <h4 className="btext">{post['title']['rendered']}</h4>
                                            <div className="text-gray-600" dangerouslySetInnerHTML={{__html:post ['excerpt']['rendered']}}></div>
                                            <div className="spacer-60"></div>
                                            <span className="btn-custom">Read More</span>
                                        </div>
                            </div>
                            </div>
                            </a>
                            })}
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>            
    )   
}

  export async function getServerSideProps(){
      const getPosts = await fetch('https://bilberrry.com/wp-json/wp/v2/posts?_embed&per_page=100'); 
      const data =await getPosts.json();
      return {props: {data}}
      
  }

  