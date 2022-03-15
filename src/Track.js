import React from 'react'
import './Ing.css'
export default function Track() {
return (
<>
<h3>LIVE WEBSITE TRACKING</h3>
<hr />
<div className="mb-4 mt-4">
<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Input with URL Validation"/>
<button type="button" className="btn btn-secondary btn-lg">ADD WEBSITE</button>
</div>
<h5 className='mb-5'>WEBSITES</h5>
<div>
<h5>Explore appliances, recipes and accessories from Usha Cook</h5>
<span>ushacook.com</span>
<button type="button" className="btn btn-success btn-sm now">LIVE</button>
</div>
<hr />
<div>
<h5>Baragaon Weaves - Uniquely Yours</h5>
<span>baragaonweaves.com</span>
<button type="button" className="btn btn-success btn-sm after">LIVE</button>
</div>
<hr />
<div>
<h5>Max Estates | The Real Estate Development Arm of Max Group</h5>
<span>maxestates.in</span>
<button type="button" className="btn btn-success btn-sm row">ERROR</button>
</div>
<hr />
<div>
<h5>Merino Laminates - The best laminates brand</h5>
<span>merinolaminates.com</span>
<button type="button" className="btn btn-info btn-sm column">FETCHING</button>
</div> 
<hr />
</>
  )
}
