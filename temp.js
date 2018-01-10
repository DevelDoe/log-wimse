/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-10T17:44:06+01:00
 * @Email:  andreeray@live.com
 * @Filename: temp.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-01-10T17:44:19+01:00
 */



function Editor(input, preview) {
    this.update = function() {
        preview.innerHTML = markdown.toHTML(input.value);
    };
    input.editor = this;
    this.update();
}
var $ = function(id) {
    return document.getElementById(id);
};
new Editor($("text-input"), $("preview"));
