export default class SmallestTextEditor {
    constructor(divId) {
        this.divId = '#' + divId
        this.init()
    }

    findDivId() {
        const divId = document.querySelector(this.divId) || null;
        if (divId === null) {
            console.error('The div id you provided can not be found!')
            return false
        }
        return true
    }

    stylize(style) {
        /*var inui = false;
        var ivalue = null;
        if (arguments[1]) {
            inui = ui;
        }
        if (arguments[2]) {
            ivalue = value;
        }*/
        document.execCommand(style, false, null);
    }

    init() {
        if (!this.findDivId())
            return;

        const _that = this;

        var editor = document.createElement('div');
        editor.id = 'smallest-text-editor';
        editor.setAttribute('contenteditable', 'true');
        editor.style.padding = '5px';
        editor.style.minHeight = '50px';
        editor.style.width = '100%';
        editor.style.border = '1px solid #f3e7e7';
        editor.style.borderRadius = '5px';
        editor.style.position = 'relative';
        editor.style.background = '#fff';

        var buttons = document.createElement('div');
        buttons.style.display = 'flex';
        buttons.style.background = '#fff';
        buttons.style.borderRadius = '3px';

        var bold = document.createElement('button')
        bold.onclick = function() {
            console.log('bold pressed')
            _that.stylize('bold');
        }
        bold.innerHTML = 'B';
        bold.style.fontSize = 'bold';
        bold.style.margin = '2px 4px';
        bold.style.cursor = 'pointer';

        var italic = document.createElement('button')
        italic.onclick = function() {
            console.log('italic pressed')
            _that.stylize('italic');
        }
        italic.innerHTML = 'I';
        italic.style.fontStyle = 'italic';
        italic.style.margin = '2px 4px';
        italic.style.cursor = 'pointer';

        var underline = document.createElement('button')
        underline.onclick = function() {
            console.log('underline pressed')
            _that.stylize('underline');
        }
        underline.innerHTML = 'U';
        underline.style.textDecoration = 'underline';
        underline.style.margin = '2px 4px';
        underline.style.cursor = 'pointer';

        buttons.appendChild(bold)
        buttons.appendChild(italic)
        buttons.appendChild(underline)

        document.querySelector(this.divId).appendChild(buttons);
        document.querySelector(this.divId).appendChild(editor);
    }

    getValue() {
        return document.querySelector('#smallest-text-editor').innerHTML;
    }
}