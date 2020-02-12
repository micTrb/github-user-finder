import template_config from '../shared/template_config';
import errorTemplate from "../templates/error-template";

class ErrorMessage {
  constructor(div_id) {
    this.container_id = div_id;
    this.error_template = errorTemplate;
  };

  returnErrorMessage() {
    return this.error_template;
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

    container.insertAdjacentHTML("beforeend", this.returnErrorMessage());
  }
}


export default ErrorMessage;
