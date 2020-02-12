import template_config from "../shared/template_config";

const errorTemplate = `
  <div class="w3-container" id=${template_config.error_container_div_id}>
      <img src='images/sad_icon.png' alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:22%">
      <div id="errorMessage">
          <h3>Sorry, but this user doesn't exist</h3>
      </div>
  </div>
`;

export default errorTemplate;
