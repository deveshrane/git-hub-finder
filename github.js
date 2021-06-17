class GitHub {
    constructor() {
        this.client_id = 'b4dd00a6107c0dd3ab92';
        this.client_secret = '382633cfe8e71affd276e53397a6b12b4ec2a6d9';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        console.log(profile);
        return {
            profile,
            repos
        };
    }
}