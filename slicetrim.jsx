// make sure tmp_dir is writeable and path of convert.exe is correct.

var tmp_dir = 'C:\\Users\\cly\\tmp',
    tmp_png = tmp_dir + '\\tmp.png',
    output_path = tmp_dir + '\\output.txt',
    convert = 'C:\\Programs\\ImageMagick-7.0.5-4-portable-Q16-x64\\convert.exe',
    output_file,
    output,
    tmp, tmp1, tmp2,
    x, y, w, h;

function saveForWeb(png) {
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.PNG;
    options.PNG8 = false;
    activeDocument.exportDocument(new File(png), ExportType.SAVEFORWEB, options);
}

function slice(x, y, w, h) {
    var idMk = charIDToTypeID( "Mk  " );
    var desc67 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref27 = new ActionReference();
    var idslice = stringIDToTypeID( "slice" );
    ref27.putClass( idslice );
    desc67.putReference( idnull, ref27 );
    var idUsng = charIDToTypeID( "Usng" );
    var desc68 = new ActionDescriptor();
    var idType = charIDToTypeID( "Type" );
    var idsliceType = stringIDToTypeID( "sliceType" );
    var iduser = stringIDToTypeID( "user" );
    desc68.putEnumerated( idType, idsliceType, iduser );
    var idAt = charIDToTypeID( "At  " );
    var desc69 = new ActionDescriptor();
    var idTop = charIDToTypeID( "Top " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc69.putUnitDouble( idTop, idPxl, y );
    var idLeft = charIDToTypeID( "Left" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc69.putUnitDouble( idLeft, idPxl, x );
    var idBtom = charIDToTypeID( "Btom" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc69.putUnitDouble( idBtom, idPxl, y + h );
    var idRght = charIDToTypeID( "Rght" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc69.putUnitDouble( idRght, idPxl, x + w );
    var idRctn = charIDToTypeID( "Rctn" );
    desc68.putObject( idAt, idRctn, desc69 );
    var idslice = stringIDToTypeID( "slice" );
    desc67.putObject( idUsng, idslice, desc68 );
    executeAction( idMk, desc67, DialogModes.NO );
}

saveForWeb(tmp_png);
system(convert + ' ' + tmp_png + ' -trim info: > ' + output_path);
output_file = new File(output_path);
output_file.open('r');
output = output_file.readln();
output_file.close();

tmp = output.split(' ');
tmp1 = tmp[2].split('x');
tmp2 = tmp[3].split('+').slice(1);
x = parseInt(tmp2[0]);
y = parseInt(tmp2[1]);
w = parseInt(tmp1[0]);
h = parseInt(tmp1[1]);

slice(x, y, w, h);
