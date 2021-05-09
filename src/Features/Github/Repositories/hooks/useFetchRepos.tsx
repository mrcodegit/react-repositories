import { useEffect, useState } from "react";

const useFetchRepos: (
  repositoryName: string
) => [Array<Object>, Object | null] = (repositoryName) => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const url = "https://api.github.com/graphql";
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let response = await fetch(url, {
          method: "POST",
          body: getQuery(repositoryName),
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
          },
        });
        response = await response.json();
        setRepos((response as any).data.search.nodes);
      } catch (e) {
        setError(e);
      }
    };
    fetchRepos();
  }, [repositoryName]);
  return [repos, error];
};

const getQuery = (repositoryName: string): string => {
  let query = {
    query: `{
						search(query: \"${repositoryName}\", type: REPOSITORY, first: 100) {
							nodes {
								... on Repository {
										name
										stargazerCount
										forks {
											totalCount
										}
							}
						}
					}
				}
			`,
  };
  return JSON.stringify(query);
};

export default useFetchRepos;
