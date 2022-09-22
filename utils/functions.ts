function cleanLink(link: string): string {
  return link.replace(/^https?:\/\//, '')
}

function getGitDetails(link: string): string {
  const [, owner, repo] = link.match(/github.com\/([^/]+)\/([^/]+)/) || []
  return `${owner}/${repo}`
}

function basePath(url: string) {
  return '/icons/' + url
}

function basePathProject(url: string) {
  return '/showcase/' + url
}

export { cleanLink, getGitDetails, basePathProject, basePath }
