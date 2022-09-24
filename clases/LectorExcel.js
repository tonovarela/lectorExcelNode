const reader  = require('xlsx');
class LectorExcel {

    constructor(filePath){        
        this.file = reader.readFile(filePath);;
    }
    obtenerData(numeroHoja){        
    return reader.utils.sheet_to_json(this.file.Sheets[this.file.SheetNames[numeroHoja]]);   
    }
       
}

module.exports = {LectorExcel};