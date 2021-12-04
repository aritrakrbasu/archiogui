import React from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";

function DetailsPage() {
	let { placeName } = useParams();

	return (
		<div className='detailsPageContainer'>
			<div
				className='headerPhoto'
				style={{
					backgroundImage: `URL(
						https://images.indianexpress.com/2018/06/red-fort-759-getty-images.jpg
					)`,
				}}></div>
		</div>
	);
}

export default DetailsPage;
