import React, { useState } from 'react';
import ResourceList from './ResourceList';

function App() {

	const [resourceName, setResourceName] = useState('posts')

	return (
	<div>
	  <button onClick={() => setResourceName('posts')}>Posts</button>
	  <button onClick={() => setResourceName('todos')}>Todos</button>
	  <ResourceList resourceName = {resourceName} />
	</div>
	);
}

export default App;
