// Dependencies
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = url => {
	const [fetchedData, setfetchedData] = useState({
		data: [],
		isLoading: true,
		error: false,
	});

	const cancelTokenSource = axios.CancelToken.source();

	const fetchData = useCallback(async () => {
		try {
			const { data } = await axios.get(url, {
				cancelToken: cancelTokenSource.token,
			});

			if (data) {
				setfetchedData({
					data: data,
					isLoading: false,
					error: false,
				});
			}
		} catch (error) {
			if (axios.isCancel(error)) {
				console.log('Fetching data aborted');
			} else {
				console.log('Error occured', error);
			}

			setfetchedData({
				data: [],
				isLoading: false,
				error: true,
			});
		}
	}, [url]);

	useEffect(() => {
		fetchData();

		return () => cancelTokenSource.cancel();
	}, [url, fetchData]);

	const { data, isLoading, error } = fetchedData;

	return { data, isLoading, error };
};

export default useFetch;
