import template_config from '../shared/template_config';

class UserHeader {
  constructor(div_id, data) {
    this.container_id = div_id;
    this.header_data = data;
  };

  setHeaderTemplate(username, name, avatar_url, bio) {
    let card_header = `
      <div class="w3-container" id=${template_config.user_container_div_id}>
          <img src='` + avatar_url + `' alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:22%">
          <div id="userInfo">
              <p>@${username}</p>
              <h3>${name}</h3>
              <p>${(bio == null) ? "This user has no bio" : bio}</p>
          </div>
          <div id=${template_config.user_repos_div_id} class="w3-container"> 
              <h4>Repositories</h4>
              <hr class="list-divider">
              <div hidden id="spinner"></div>
          </div>
      </div>
    `;
    return card_header;
  }

  render() {
    let container = document.getElementById(this.container_id);
    let hasUser = container.querySelector("#" + template_config.user_container_div_id) != null;
    let hasError = container.querySelector("#" + template_config.error_container_div_id) != null;

    if(hasUser) {
      container.querySelector("#" + template_config.user_container_div_id).remove();
    }
    else if(hasError) {
      container.querySelector("#" + template_config.error_container_div_id).remove();
    }

    container.insertAdjacentHTML("beforeend", this.setHeaderTemplate(
      this.header_data.login,
      this.header_data.name,
      this.header_data.avatar_url,
      this.header_data.bio)
    );
  }

}


export default UserHeader;
