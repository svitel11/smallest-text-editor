export default class e {
    constructor(e) {
        this.divId = "#" + e, this.init()
    }

    stylize(e, t = !1, l = null) {
        document.execCommand(e, t, l)
    }

    init() {
        if ("smallest-text-editor" === this.divId) {
            console.error("The assigned id must not be 'smallest-text-editor'")
            return
        }

        let timeout = 5000
        const interval = setInterval(() => {
            if (timeout <= 0) {
                clearInterval(interval)
                console.error("No element with the id '"+ this.divId +"' was found.")
            }
            let element = document.querySelector(this.divId) || null
            if (element) {
                clearInterval(interval)
                this.buildEditor()
            }
            timeout -= 100
        }, 100)
    }

    buildEditor() {
        let e = this, t = document.createElement("div")
        t.id = "smallest-text-editor", t.setAttribute("contenteditable", "true"), t.style.padding = "5px", t.style.minHeight = "50px", t.style.width = "100%", t.style.border = "1px solid #f3e7e7", t.style.borderRadius = "5px", t.style.position = "relative", t.style.background = "#fff"
        let l = document.createElement("div")
        l.style.display = "flex", l.style.background = "#fff", l.style.borderRadius = "3px"
        let i = document.createElement("button")
        i.onclick = function (t) {
            t.preventDefault(), e.stylize("bold")
        }, i.innerHTML = "B", i.style.fontSize = "bold", i.style.margin = "2px 4px", i.style.cursor = "pointer"
        let r = document.createElement("button")
        r.onclick = function (t) {
            t.preventDefault(), e.stylize("italic")
        }, r.innerHTML = "I", r.style.fontStyle = "italic", r.style.margin = "2px 4px", r.style.cursor = "pointer"
        let n = document.createElement("button")
        n.onclick = function (t) {
            t.preventDefault(), e.stylize("underline")
        }, n.innerHTML = "U", n.style.textDecoration = "underline", n.style.margin = "2px 4px", n.style.cursor = "pointer"
        let s = document.createElement("button")
        s.id = "smallest-text-editor-text-color-picker", s.innerHTML = "A", s.style.color = "#eb5e1a", s.style.fontWeight = "bold", s.style.margin = "2px 4px", s.style.cursor = "pointer", s.style.display = "flex", s.style.alignItems = "center"
        let o = document.createElement("input")
        o.type = "color", o.id = "input-colorpicker", o.style.margin = "0", o.style.padding = "0", o.style.border = "0", o.style.height = "110%", o.style.width = "20px", o.style.cursor = "pointer", o.value = "#0000ff", s.appendChild(o), o.oninput = function (t) {
            e.stylize("foreColor", !1, t.srcElement.value)
        }, l.appendChild(i), l.appendChild(r), l.appendChild(n), l.appendChild(s), document.querySelector(this.divId).appendChild(l), document.querySelector(this.divId).appendChild(t)
    }

    getValue() {
        return document.querySelector("#smallest-text-editor").innerHTML
    }

    clear() {
        document.querySelector("#smallest-text-editor").innerHTML = ""
    }
}
