class GraphicFile {
    constructor(fileName, createDate, lastEditDate, size, colorDepth) {
        Object.defineProperty(this, "CreateDate", {  // const
            value:createDate,
            writable:false
        });
        this.FileName = fileName.split(".");
        this.LastEditDate = lastEditDate;
        this.Size = size.split("x");
        this.ColorDepth = colorDepth; 
    }
    GetLastEditDateFromNow() {
        return new Date()-this.LastEditDate;
    }

    GetFileSize() {
        return this.Size[0] * this.Size[1] * this.ColorDepth;
    }

    Rename(name) {
        this.FileName[0] = name;
    }

    ChangeFormat(format) {
        this.FileName[1] = format;
    }

    GetColorCount() {
        return Math.pow(2, this.ColorDepth);
    }

    toString() {
        return this.getHtml();
    }

    getHtml() {
        return `File name: ${this.FileName[0]}.${this.FileName[1]}<br>Create date:
        ${this.CreateDate}<br>Last edit date: ${this.LastEditDate}
        <br>Size: ${this.Size[0]}x${this.Size[1]}<br>Color depth: ${this.ColorDepth}`
    }

    getDom() {
        let table = document.createElement("table");
        let tr = document.createElement("tr");
        let titles = ["Img", "Name", "Create date", "Last edit date", "Size", "Color depth"];
        let values = [this.FileName[0]+"."+this.FileName[1],this.CreateDate, this.LastEditDate,
                this.Size[0]+"x"+this.Size[1], this.ColorDepth];
        
        let th;
        for (let title of titles) {
            th = document.createElement("th");
            th.innerText = title;
            tr.appendChild(th);
        }
        table.appendChild(tr);

        tr = document.createElement("tr");
        let td = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src", this.FileName[0]+"."+this.FileName[1])
        td.appendChild(img);
        tr.appendChild(td);

        for (let value of values) {
            td = document.createElement("td");
            td.innerText = value;
            tr.appendChild(td);
        }
        table.appendChild(tr);

        return table;
    }
}

let gf = new GraphicFile("image.png", new Date(2000, 1, 1), new Date(2001, 2, 2), "12x12", 32);
document.body.appendChild(gf.getDom());
gf.Rename("icon");
gf.ChangeFormat("jpg");
document.body.appendChild(gf.getDom());