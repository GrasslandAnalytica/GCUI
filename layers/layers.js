var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Allgrasslands_1 = new ol.format.GeoJSON();
var features_Allgrasslands_1 = format_Allgrasslands_1.readFeatures(json_Allgrasslands_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Allgrasslands_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Allgrasslands_1.addFeatures(features_Allgrasslands_1);
var lyr_Allgrasslands_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Allgrasslands_1, 
                style: style_Allgrasslands_1,
                popuplayertitle: "All-grasslands",
                interactive: true,
    title: 'All-grasslands<br />\
    <img src="styles/legend/Allgrasslands_1_0.png" /> 0.1 - 0.2<br />\
    <img src="styles/legend/Allgrasslands_1_1.png" /> 0.2 - 0.3<br />\
    <img src="styles/legend/Allgrasslands_1_2.png" /> 0.3 - 0.4<br />\
    <img src="styles/legend/Allgrasslands_1_3.png" /> 0.4 - 0.5<br />\
    <img src="styles/legend/Allgrasslands_1_4.png" /> 0.5 - 0.6<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Allgrasslands_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Allgrasslands_1];
lyr_Allgrasslands_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'POLY_ID': 'POLY_ID', 'ECO_ID': 'ECO_ID', 'AREA_2': 'AREA_2', 'PERIMETER_': 'PERIMETER_', 'ZONE_': 'ZONE_', 'ZONE_ID': 'ZONE_ID', 'ECOZONE': 'ECOZONE', 'ZONE_NAME': 'ZONE_NAME', 'ZONE_NOM': 'ZONE_NOM', 'Tame_mean': 'Tame_UI', 'Native_mea': 'Native_UI', 'Mixed_mean': 'Mixed_UI', '_POLY_ID': 'POLY_ID', '_ECODISTRIC': 'Ecodistrict_Code', '_ECOREGION': 'Ecoregion_Code', '_ECOPROVINC': 'Ecoprovince_Code', '_ECOZONE': 'Ecozone_Code', '_ECOREGIO_1': 'Ecoregion_EN', '_ECOREGIO_2': 'Ecoregion_FR', '_Native (ha': '_Native (ha', '_Native (%)': '_Native (%)', '_Tamed (ha)': '_Tamed (ha)', '_Tamed (%)': '_Tamed (%)', '_Mixed (ha)': '_Mixed (ha)', '_Mixed (%)': '_Mixed (%)', 'UI_overall': 'UI_overall', });
lyr_Allgrasslands_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'POLY_ID': 'TextEdit', 'ECO_ID': 'TextEdit', 'AREA_2': 'TextEdit', 'PERIMETER_': 'TextEdit', 'ZONE_': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ECOZONE': 'TextEdit', 'ZONE_NAME': 'TextEdit', 'ZONE_NOM': 'TextEdit', 'Tame_mean': 'TextEdit', 'Native_mea': 'TextEdit', 'Mixed_mean': 'TextEdit', '_POLY_ID': 'TextEdit', '_ECODISTRIC': 'TextEdit', '_ECOREGION': 'TextEdit', '_ECOPROVINC': 'TextEdit', '_ECOZONE': 'TextEdit', '_ECOREGIO_1': 'TextEdit', '_ECOREGIO_2': 'TextEdit', '_Native (ha': 'TextEdit', '_Native (%)': 'TextEdit', '_Tamed (ha)': 'TextEdit', '_Tamed (%)': 'TextEdit', '_Mixed (ha)': 'TextEdit', '_Mixed (%)': 'TextEdit', 'UI_overall': 'TextEdit', });
lyr_Allgrasslands_1.set('fieldLabels', {'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'POLY_ID': 'hidden field', 'ECO_ID': 'hidden field', 'AREA_2': 'hidden field', 'PERIMETER_': 'hidden field', 'ZONE_': 'hidden field', 'ZONE_ID': 'hidden field', 'ECOZONE': 'hidden field', 'ZONE_NAME': 'hidden field', 'ZONE_NOM': 'hidden field', 'Tame_mean': 'inline label - visible with data', 'Native_mea': 'inline label - visible with data', 'Mixed_mean': 'inline label - visible with data', '_POLY_ID': 'inline label - visible with data', '_ECODISTRIC': 'inline label - visible with data', '_ECOREGION': 'inline label - visible with data', '_ECOPROVINC': 'inline label - visible with data', '_ECOZONE': 'inline label - visible with data', '_ECOREGIO_1': 'inline label - visible with data', '_ECOREGIO_2': 'inline label - visible with data', '_Native (ha': 'hidden field', '_Native (%)': 'hidden field', '_Tamed (ha)': 'hidden field', '_Tamed (%)': 'hidden field', '_Mixed (ha)': 'hidden field', '_Mixed (%)': 'hidden field', 'UI_overall': 'inline label - visible with data', });
lyr_Allgrasslands_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'overlay';
});