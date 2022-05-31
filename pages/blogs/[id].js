import "../Home.module.css";

export default function blog({data}) {
     console.log(data)
     return (
     <>

{/*  */}
<div className="card" style={{width:"18rem;"}}>
  <img src="..." class="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
{/*  */}


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
     const res = await fetch(`https://bilberrry.com/wp-json/wp/v2/posts?_embed&slug=${id}`);
     const data = await res.json();
     return {props: {data}}
 }