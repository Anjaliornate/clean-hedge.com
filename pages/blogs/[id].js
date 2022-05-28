import React from "react";

export default function blog({data}) {
     console.log(data)
     return (
     <>
     <div className="col-m-12">
         
     {data.map((post,id)=>{
    
     return ( 
         <div key={id}>
         <div className="container">
 	<div className="row">
 		<div className="col-md-9">
 			<div className="card" key={post.id}><img src={post[ '_embedded'][ 'wp:featuredmedia'][0][ 'source_url']} className="card-img-top" style={{height: '500px'}}/>
 				<div className="card-body">
 					<h5 className="card-title">{post['title']['rendered']}</h5>
 					<div className="card-text" dangerouslySetInnerHTML={{__html:post[ 'content'][ 'rendered']}}></div>
 				</div>
 			</div>
 		</div>
 	</div>
 </div>
         </div>);
     })}
     </div>
     </>
     )
 };

 export async function getServerSideProps(context) {
     const {id} = context.params;
     const res = await fetch(`https://www.teamvariance.com/wp-json/wp/v2/posts?_embed&slug=${id}`);
     const data = await res.json();
     return {props: {data}}
 }