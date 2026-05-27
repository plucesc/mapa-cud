var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_barrios_1 = new ol.format.GeoJSON();
var features_barrios_1 = format_barrios_1.readFeatures(json_barrios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrios_1.addFeatures(features_barrios_1);
var lyr_barrios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barrios_1, 
                style: style_barrios_1,
                popuplayertitle: 'barrios',
                interactive: true,
                title: '<img src="styles/legend/barrios_1.png" /> barrios'
            });
var format_comunas_2 = new ol.format.GeoJSON();
var features_comunas_2 = format_comunas_2.readFeatures(json_comunas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunas_2.addFeatures(features_comunas_2);
var lyr_comunas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunas_2, 
                style: style_comunas_2,
                popuplayertitle: 'comunas',
                interactive: true,
                title: '<img src="styles/legend/comunas_2.png" /> comunas'
            });
var format_01_base_comunas_mapa_copidis_3 = new ol.format.GeoJSON();
var features_01_base_comunas_mapa_copidis_3 = format_01_base_comunas_mapa_copidis_3.readFeatures(json_01_base_comunas_mapa_copidis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01_base_comunas_mapa_copidis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_base_comunas_mapa_copidis_3.addFeatures(features_01_base_comunas_mapa_copidis_3);
var lyr_01_base_comunas_mapa_copidis_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_base_comunas_mapa_copidis_3, 
                style: style_01_base_comunas_mapa_copidis_3,
                popuplayertitle: '01_base_comunas_mapa_copidis',
                interactive: true,
    title: '01_base_comunas_mapa_copidis<br />\
    <img src="styles/legend/01_base_comunas_mapa_copidis_3_0.png" /> 1 - 4<br />\
    <img src="styles/legend/01_base_comunas_mapa_copidis_3_1.png" /> 4 - 6<br />\
    <img src="styles/legend/01_base_comunas_mapa_copidis_3_2.png" /> 6 - 10<br />\
    <img src="styles/legend/01_base_comunas_mapa_copidis_3_3.png" /> 10 - 13<br />\
    <img src="styles/legend/01_base_comunas_mapa_copidis_3_4.png" /> 13 - 15<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_barrios_1.setVisible(true);lyr_comunas_2.setVisible(true);lyr_01_base_comunas_mapa_copidis_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_barrios_1,lyr_comunas_2,lyr_01_base_comunas_mapa_copidis_3];
lyr_barrios_1.set('fieldAliases', {'id': 'id', 'objeto': 'objeto', 'nombre': 'nombre', 'comuna': 'comuna', 'perimetro_': 'perimetro_', 'area_metro': 'area_metro', });
lyr_comunas_2.set('fieldAliases', {'id': 'id', 'objeto': 'objeto', 'comuna': 'comuna', 'barrios': 'barrios', 'perimetro': 'perimetro', 'area': 'area', });
lyr_01_base_comunas_mapa_copidis_3.set('fieldAliases', {'sexo': 'sexo', 'rango_etario': 'rango_etario', 'comuna': 'comuna', 'junta_discapacidad': 'junta_discapacidad', 'barrio': 'barrio', 'lat_direccion': 'lat_direccion', 'lon_direccion': 'lon_direccion', 'estado_cud': 'estado_cud', 'orientación_prestacional': 'orientación_prestacional', 'edad_actual': 'edad_actual', 'cobertura_de_salud': 'cobertura_de_salud', });
lyr_barrios_1.set('fieldImages', {'id': '', 'objeto': '', 'nombre': '', 'comuna': '', 'perimetro_': '', 'area_metro': '', });
lyr_comunas_2.set('fieldImages', {'id': '', 'objeto': '', 'comuna': '', 'barrios': '', 'perimetro': '', 'area': '', });
lyr_01_base_comunas_mapa_copidis_3.set('fieldImages', {'sexo': 'TextEdit', 'rango_etario': 'TextEdit', 'comuna': 'Range', 'junta_discapacidad': 'TextEdit', 'barrio': 'TextEdit', 'lat_direccion': 'TextEdit', 'lon_direccion': 'TextEdit', 'estado_cud': 'TextEdit', 'orientación_prestacional': 'TextEdit', 'edad_actual': 'Range', 'cobertura_de_salud': '', });
lyr_barrios_1.set('fieldLabels', {'id': 'no label', 'objeto': 'no label', 'nombre': 'no label', 'comuna': 'no label', 'perimetro_': 'no label', 'area_metro': 'no label', });
lyr_comunas_2.set('fieldLabels', {'id': 'no label', 'objeto': 'no label', 'comuna': 'inline label - visible with data', 'barrios': 'inline label - visible with data', 'perimetro': 'no label', 'area': 'no label', });
lyr_01_base_comunas_mapa_copidis_3.set('fieldLabels', {'sexo': 'no label', 'rango_etario': 'no label', 'comuna': 'no label', 'junta_discapacidad': 'no label', 'barrio': 'no label', 'lat_direccion': 'no label', 'lon_direccion': 'no label', 'estado_cud': 'no label', 'orientación_prestacional': 'no label', 'edad_actual': 'no label', 'cobertura_de_salud': 'no label', });
lyr_01_base_comunas_mapa_copidis_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});