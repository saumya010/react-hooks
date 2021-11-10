import React from 'react';
import useResources from './useResources';

const ResourceList = ({resourceName}) => {

	const resources = useResources(resourceName)

	return(
		<div>{resources.map(res => {
			return <div key={res.title}>
				<h3>{res.title}</h3>
			</div>
		})}</div>
	)
}

export default ResourceList;
