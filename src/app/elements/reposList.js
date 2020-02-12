import template_config from '../shared/template_config';
import BranchIcon from '../../public/images/git-branch-fill.svg';
import StarIcon from '../../public/images/star-fill.svg';
import noReposTemplate from "../templates/no-repos-template";

class ReposList {
  constructor(containerId, data) {
    this.container_id = containerId;
    this.repos_data = data;
    this.table_init_template = `<table class="w3-table w3-bordered" id=${template_config.repos_list_table_id}></table>`;
    this.no_repos_template = noReposTemplate;
  };


  setListElement(name, stars, forks) {
    let template = `
      <td class="repo-name">${name}</td>
      <td class="star-number">
        <div class="repo-icon">${StarIcon}</div>
        <p class="repo-data">${stars}</p>
      </td>
      <td class="fork-number">
        <div class="repo-icon">${BranchIcon}</div>
        <p class="repo-data">${forks}</p>
      </td> 
    `;
    return template;
  };

  render() {
    if(Array.isArray(this.repos_data) && this.repos_data.length == 0) {
      document.querySelector("#" + template_config.user_repos_div_id).insertAdjacentHTML("beforeend", this.no_repos_template);
    }

    document.querySelector("#" + this.container_id).insertAdjacentHTML("beforeend", this.table_init_template);

    for(let i = 0; i < this.repos_data.length; i++) {
      let repo_name = this.repos_data[i].name;
      let stargazers_count = this.repos_data[i].stargazers_count;
      let forks_count = this.repos_data[i].forks_count;

      let tr = document.createElement('tr');
      tr.innerHTML += this.setListElement(repo_name, stargazers_count, forks_count);
      document.querySelector("#" + template_config.repos_list_table_id).appendChild(tr);
    };
  }

}


export default ReposList;
