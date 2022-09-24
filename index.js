const {LectorExcel }  = require("./clases/LectorExcel");

const lector = new LectorExcel("./solicitudes.xlsx");

let solicitudes =lector.obtenerData(0);
let i=1;
 solicitudes.forEach(({id,solicita,sku,CantRequerida,NotaExtra,concepto,NoPallets})=> {
    if (NoPallets!='CANCELAR'){
        console.log(`insert into Solicitudes (id_concepto,solicita,Sku,CantRequerida,Nota,Responsable,id_estatus) values(1,'${solicita}','${sku}',${CantRequerida},'${NotaExtra==undefined?'':NotaExtra}','',1);`);    
        console.log(`insert into Pallets (id_pallet,id_solicitud,cantidad,id_tipoPallet,pallet,identificador,fecha_registro,procesado) values(NEWID(),${i},${CantRequerida},1,${i},'2209-${("0000" + i).slice (-5)}',getdate(),0)`)                
        i++;
    }
 })


