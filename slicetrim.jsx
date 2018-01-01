function slice(bounds) {
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
    desc69.putUnitDouble( idTop, idPxl, bounds[1] );
    var idLeft = charIDToTypeID( "Left" );
    desc69.putUnitDouble( idLeft, idPxl, bounds[0] );
    var idBtom = charIDToTypeID( "Btom" );
    desc69.putUnitDouble( idBtom, idPxl, bounds[3] );
    var idRght = charIDToTypeID( "Rght" );
    desc69.putUnitDouble( idRght, idPxl, bounds[2] );
    var idRctn = charIDToTypeID( "Rctn" );
    desc68.putObject( idAt, idRctn, desc69 );
    desc67.putObject( idUsng, idslice, desc68 );
    executeAction( idMk, desc67, DialogModes.NO );
}

oldRulerUnits = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;
activeDocument.mergeVisibleLayers();
bounds = activeDocument.activeLayer.bounds;
bounds = [parseFloat(bounds[0], 10), parseFloat(bounds[1], 10), parseFloat(bounds[2], 10), parseFloat(bounds[3], 10)];
executeAction(charIDToTypeID('undo'), undefined, DialogModes.NO);
slice(bounds);
preferences.rulerUnits = oldRulerUnits;
