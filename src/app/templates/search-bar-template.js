import template_config from '../shared/template_config';

const searchBarTemplate = `
    <div class="w3-container" id="searchContainer">
        <input 
            type="text" 
            id="userFinder" 
            class="input-search" 
            placeholder="${template_config.input_placeholder}"
        >
        <button 
            id="searchUsersButton" 
            class="button" 
            style="vertical-align:middle">
            <span>${template_config.search_button}</span>
        </button>
    </div>
`;

export default searchBarTemplate;
