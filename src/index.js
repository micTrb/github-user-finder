import 'w3-css';
import './style/style.scss';
import UserFinder from "./app/elements/userFinder";
import template_config from "./app/shared/template_config";

window.addEventListener('load', () => {
  const userFinder = new UserFinder(template_config.root_div);
  userFinder.init();
  userFinder.onClick();
});
