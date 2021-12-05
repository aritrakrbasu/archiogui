import React from "react";
import nsf from "./nsf.svg";

function NSF() {
	return (
		<div className='nothingFoundContainer'>
			<img src={nsf} className='nothingFound' />
			<h4> We are helpless , nothing found :)</h4>
		</div>
	);
}

export default NSF;
