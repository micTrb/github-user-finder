import template_config from "../shared/template_config";
import searchBarTemplate from '../templates/search-bar-template';
import data_config from "../shared/data_config";
import UserHeader from "./userHeader";
import ReposList from "./reposList";
import ErrorMessage from "./errorMessage";

class UserFinder {
  constructor(div_id) {
    this.container_id = div_id;
    this.template = searchBarTemplate;
  };

  init() {
    document.getElementById(this.container_id).insertAdjacentHTML("afterbegin", this.template);
  }

  onClick() {
    document.querySelector("#" + template_config.button_id).addEventListener("click", this.fetchUser);
  }

  fetchUser() {
    let inputValue = document.querySelector("#userFinder").value;
    if(inputValue) {

      let user_url = data_config.url + "/" + inputValue;
      let repos_url = data_config.url + "/" + inputValue + "/repos";

      //Fetching the user by input name
      fetch(user_url)
        .then(response => {
          if (response.ok) { return response.json() }
          else { throw new Error('Something went wrong'); }
        })
        .then(data => {

          //Create user header
          let userHeader = new UserHeader(template_config.root_div, data);
          userHeader.render();

          //Activate Spinner
          let spinner = document.getElementById("spinner");
          spinner.removeAttribute('hidden');


          /************************************************************/
          //Fetching REPOS
          fetch(repos_url)
            .then(response => {
              if (response.ok) { return response.json(); }
              else { throw new Error('Something went wrong'); }
            })
            .then(data => {

              //Create repos list
              let reposList = new ReposList("userContainer", data)
              reposList.render();

              //Hide spinner
              spinner.setAttribute('hidden', '');
            })
            .catch(err => { console.error(err); });
        })
        .catch(err => {

          //Show error message
          let errorMessage = new ErrorMessage(template_config.root_div);
          errorMessage.render();
          console.error(err);
        });
    }
    else {
      alert("Please fill the input");
    };
  }
}


export default UserFinder;
