const { makeExecutableSchema } = require("graphql-tools");

const fetch = require("node-fetch");

const gql = String.raw;

const GITHUB_API_SEARCH_URL = 'https://api.github.com/search/repositories?sort="stars"&order="desc"&q=topic:';

/*

  {
      "id": 124099123,
      "name": "emma-cli",
      "full_name": "maticzav/emma-cli",
      "owner": {
        "login": "maticzav",
        "id": 3924224,
        "avatar_url": "https://avatars2.githubusercontent.com/u/3924224?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/maticzav",
        "html_url": "https://github.com/maticzav",
        "followers_url": "https://api.github.com/users/maticzav/followers",
        "following_url": "https://api.github.com/users/maticzav/following{/other_user}",
        "gists_url": "https://api.github.com/users/maticzav/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/maticzav/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/maticzav/subscriptions",
        "organizations_url": "https://api.github.com/users/maticzav/orgs",
        "repos_url": "https://api.github.com/users/maticzav/repos",
        "events_url": "https://api.github.com/users/maticzav/events{/privacy}",
        "received_events_url": "https://api.github.com/users/maticzav/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/maticzav/emma-cli",
      "description": "📦 Terminal assistant to find and install node packages.",
      "fork": false,
      "url": "https://api.github.com/repos/maticzav/emma-cli",
      "forks_url": "https://api.github.com/repos/maticzav/emma-cli/forks",
      "keys_url": "https://api.github.com/repos/maticzav/emma-cli/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/maticzav/emma-cli/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/maticzav/emma-cli/teams",
      "hooks_url": "https://api.github.com/repos/maticzav/emma-cli/hooks",
      "issue_events_url": "https://api.github.com/repos/maticzav/emma-cli/issues/events{/number}",
      "events_url": "https://api.github.com/repos/maticzav/emma-cli/events",
      "assignees_url": "https://api.github.com/repos/maticzav/emma-cli/assignees{/user}",
      "branches_url": "https://api.github.com/repos/maticzav/emma-cli/branches{/branch}",
      "tags_url": "https://api.github.com/repos/maticzav/emma-cli/tags",
      "blobs_url": "https://api.github.com/repos/maticzav/emma-cli/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/maticzav/emma-cli/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/maticzav/emma-cli/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/maticzav/emma-cli/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/maticzav/emma-cli/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/maticzav/emma-cli/languages",
      "stargazers_url": "https://api.github.com/repos/maticzav/emma-cli/stargazers",
      "contributors_url": "https://api.github.com/repos/maticzav/emma-cli/contributors",
      "subscribers_url": "https://api.github.com/repos/maticzav/emma-cli/subscribers",
      "subscription_url": "https://api.github.com/repos/maticzav/emma-cli/subscription",
      "commits_url": "https://api.github.com/repos/maticzav/emma-cli/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/maticzav/emma-cli/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/maticzav/emma-cli/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/maticzav/emma-cli/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/maticzav/emma-cli/contents/{+path}",
      "compare_url": "https://api.github.com/repos/maticzav/emma-cli/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/maticzav/emma-cli/merges",
      "archive_url": "https://api.github.com/repos/maticzav/emma-cli/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/maticzav/emma-cli/downloads",
      "issues_url": "https://api.github.com/repos/maticzav/emma-cli/issues{/number}",
      "pulls_url": "https://api.github.com/repos/maticzav/emma-cli/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/maticzav/emma-cli/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/maticzav/emma-cli/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/maticzav/emma-cli/labels{/name}",
      "releases_url": "https://api.github.com/repos/maticzav/emma-cli/releases{/id}",
      "deployments_url": "https://api.github.com/repos/maticzav/emma-cli/deployments",
      "created_at": "2018-03-06T15:33:46Z",
      "updated_at": "2018-03-27T18:34:54Z",
      "pushed_at": "2018-03-26T22:21:32Z",
      "git_url": "git://github.com/maticzav/emma-cli.git",
      "ssh_url": "git@github.com:maticzav/emma-cli.git",
      "clone_url": "https://github.com/maticzav/emma-cli.git",
      "svn_url": "https://github.com/maticzav/emma-cli",
      "homepage": "",
      "size": 1510,
      "stargazers_count": 641,
      "watchers_count": 641,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 15,
      "mirror_url": null,
      "archived": false,
      "open_issues_count": 4,
      "license": null,
      "forks": 15,
      "open_issues": 4,
      "watchers": 641,
      "default_branch": "master",
      "score": 1.0
    }


*/

// Construct a schema, using GraphQL schema language.

// Defined some fields. The api of github has more fields. See the documentation for more details.

const typeDefs = gql`
  type Query {
    popularRepositoriesList(topic: String): [Repository]
  }
  type Repository @cacheControl(maxAge: 60) {
    id: ID
    name: String
    fullname: String
    private: Boolean
    html_url: String
    description: String
    url: String
    created_at: String,
    updated_at: String,
    git_url: String,
    size: Int,
    stargazers_count: Int,
    watchers_count: Int,
    language: String,
    forks_count: Int,
    license: String,
    forks: Int,
    watchers: Int,
    default_branch: String,
    owner: Owner
  }
  type Owner @cacheControl(maxAge: 60) {
    login: String,
    id: Int,
    avatar_url: String,
    gravatar_id: String,
    url: String,
    html_url: String,
    type: String
  }
`;

const resolvers = {
  Query: {
    popularRepositoriesList: (root, args, context) => {
      console.log(args);
      if (typeof args.topic === "undefined") args.topic = "javascript"
      return fetch(
        GITHUB_API_SEARCH_URL + args.topic
      )
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          return data.items.map(repository => {
              return repository;
          })
        });
    }
  }
}

// Required: Export the GraphQL.js schema object as "schema"
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = { schema };