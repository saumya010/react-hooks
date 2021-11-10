import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useResources = (resourceName) => {
	const [resources, setResources] = useState([])

	useEffect( () => {
		//axios(`https://jsonplaceholder.typicode.com/${resources}`).then( (res) => setResources(res.data) )
		fetchResources(resourceName)
	}, [resourceName])

	const fetchResources = async (resourceName) => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`)
		setResources(response.data)
	}
	return resources
}

export default useResources;
