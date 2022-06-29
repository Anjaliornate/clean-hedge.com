import Header from "../../components/header"; 
import Footer from "../../components/footer";
import React from 'react'
import Head from "next/head";

export default function blog({data}) {
     console.log(data)
     return (
     <>
       <Head>
        <link rel="shortcut icon" href="../images/background/favicon.ico.png" />
        <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="../css/bootstrap-grid.min.css" rel="stylesheet" type="text/css" />
        <link href="../css/bootstrap-reboot.min.css" rel="stylesheet" type="text/css" />
        <link href="../css/animate.css" rel="stylesheet" type="text/css" />
        <link href="../css/owl.carousel.css" rel="stylesheet" type="text/css" />
        <link href="../css/owl.theme.css" rel="stylesheet" type="text/css" />
        <link href="../css/owl.transitions.css" rel="stylesheet" type="text/css" />
        <link href="../css/magnific-popup.css" rel="stylesheet" type="text/css" />
        <link href="../css/jquery.countdown.css" rel="stylesheet" type="text/css" />
        <link href="../css/style.css" rel="stylesheet" type="text/css" />
        <link id="colors" href="../css/colors/scheme-01.css" rel="stylesheet" type="text/css" />
        <link href="../css/coloring.css" rel="stylesheet" type="text/css" />
        
      </Head>
        <script src="../js/html5shiv.js"></script>
        <script src="../js/jquery.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>
        <script src="../js/wow.min.js"></script>
        <script src="../js/jquery.isotope.min.js"></script>
        <script src="../js/easing.js"></script>
        <script src="../js/owl.carousel.js"></script>
        <script src="../js/validation.js"></script>
        <script src="../js/jquery.magnific-popup.min.js"></script>
        <script src="../js/enquire.min.js"></script>
        <script src="../js/jquery.stellar.min.js"></script>
        <script src="../js/jquery.plugin.js"></script>
        <script src="../js/typed.js"></script>
        <script src="../js/jquery.countTo.js"></script>
        <script src="../js/jquery.countdown.js"></script>
        <script src="../js/designesia.js"></script>
     <Header></Header>
     
     {data.map((post,index)=>{
     return ( 
         <div key={index}>
         <div className="container">
 	<div className="row">
 		<div className="col-md-12">
 			<div className="card-md-12" style={{marginTop:"20%"}}><img src={post[ '_embedded'][ 'wp:featuredmedia'][0][ 'source_url']} className="card-img-top" style={{height: '500px'}}/>
 				<div className="card-body">
 					<h1 className="blog-title">{post['title']['rendered']}</h1>
 					<div className="description-text" dangerouslySetInnerHTML={{__html:post[ 'content'][ 'rendered']}}></div>
 				</div>
 			</div>
 		</div>
 	</div>
 </div>
         </div>)
         ;
     })}
     <Footer></Footer>
     </>
     )
 };


 export async function getServerSideProps(context) {
     const {id} = context.params;
     const res = await fetch(`https://blog.clean-hedge.com/wp-json/wp/v2/posts?_embed&slug=${id}`);
     const data = await res.json();
     return {props: {data}}
 }