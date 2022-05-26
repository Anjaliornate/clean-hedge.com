
export default function blog({data}) {
    console.log(data)
    return (
    <>
    <div className="col-m-12">
    {data.map((post,index)=>{

    // var today = new Date(post['date']).toLocaleDateString();
    
    return (
        <div>
        <div class="container">
	<div class="row">
		<div class="col-md-9">
			<div class="card"><img src={post[ '_embedded'][ 'wp:featuredmedia'][0][ 'source_url']} class="card-img-top" style={{height: '500px'}}/>
				<div class="card-body">
					<h5 class="card-title">{post['title']['rendered']}</h5>
					<div class="card-text" dangerouslySetInnerHTML={{__html:post[ 'content'][ 'rendered']}}></div>
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
    const res = await fetch(`https://blog.ted.com/wp-json/wp/v2/posts?_embed&slug=${id}`);
    const data = await res.json();
    return {props: {data}}
}
