import Link from 'next/link'
import React from 'react'

export default function Error() {
  return (
    <>
    <div id="main">
        <div className="fof">
            <div id="logo">
				<Link href="/index" /><img src={`images/background/Clean-Hedge-logo-black.png`} alt="" width="auto" height="45"></img>
			</div>
          <center><h1 style={{color:'black'}}>404 Error<span className="id-color"><br/>The Requested Url Was Not Found on This Server</span></h1>
                    <div className="spacer-50"></div><a className="btn-custom scroll-to wow fadeInUp" href="/index">Go Back</a>
            </center>
    	</div>
    </div>
    </>
  )
}
