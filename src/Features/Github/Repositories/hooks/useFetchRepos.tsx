import { useEffect, useState } from "react";
export interface IRepos {
  nodes: Array<Object>;
  repositoryCount: number;
  pageInfo?: {
    endCursor: string;
    startCursor: string;
  };
}

export type FetchRepos = [IRepos, Object | null];
interface IReposResponse {
  data: {
    search: IRepos;
  };
}

interface IConfig {
  repositoryName: string;
  after?: string | null;
  before?: string | null;
}

const useFetchRepos: (config: IConfig) => FetchRepos = ({
  repositoryName,
  before,
  after,
}) => {
  const [repos, setRepos] = useState<IRepos>({ nodes: [], repositoryCount: 0 });
  const [error, setError] = useState<Object | null>(null);
  const url = "https://api.github.com/graphql";
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let response = await fetch(url, {
          method: "POST",
          body: buildQuery({ repositoryName, after, before }),
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
          },
        });
        let data = ((await response.json()) as IReposResponse).data;
        setRepos(data.search);
      } catch (e) {
        setError(e);
      }
    };
    fetchRepos();
  }, [repositoryName, before, after]);
  return [repos, error];
};

const buildQuery = (config: IConfig): string => {
  const { repositoryName, before, after } = config;
  const queryObject = {
    query: `
        query getRepos($repositoryName: String!, $after: String, $before: String) {
          search(query: $repositoryName, type: REPOSITORY, first: 10, after: $after, before: $before) {
            repositoryCount
            pageInfo {
              startCursor
              endCursor
            }
            nodes {
              ... on Repository {
                  name
                  stargazerCount
                  forks {
                    totalCount
                  }
                  id
                  url
            }
          }
          }
        }
      `,
    variables: {
      repositoryName,
      before,
      after,
    },
  };

  return JSON.stringify(queryObject);
};

export default useFetchRepos;
