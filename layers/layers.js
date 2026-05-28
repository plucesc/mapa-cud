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

lyr_OpenStreetMap_0.setVisible(true);lyr_barrios_1.setVisible(true);lyr_comunas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_barrios_1,lyr_comunas_2];
lyr_barrios_1.set('fieldAliases', {'id': 'id', 'objeto': 'objeto', 'nombre': 'nombre', 'comuna': 'comuna', 'perimetro_': 'perimetro_', 'area_metro': 'area_metro', });
lyr_comunas_2.set('fieldAliases', {'id': 'id', 'objeto': 'objeto', 'comuna': 'comuna', 'barrios': 'barrios', 'perimetro': 'perimetro', 'area': 'area', });
lyr_barrios_1.set('fieldImages', {'id': '', 'objeto': '', 'nombre': '', 'comuna': '', 'perimetro_': '', 'area_metro': '', });
lyr_comunas_2.set('fieldImages', {'id': '', 'objeto': '', 'comuna': '', 'barrios': '', 'perimetro': '', 'area': '', });
lyr_barrios_1.set('fieldLabels', {'id': 'no label', 'objeto': 'no label', 'nombre': 'no label', 'comuna': 'no label', 'perimetro_': 'no label', 'area_metro': 'no label', });
lyr_comunas_2.set('fieldLabels', {'id': 'no label', 'objeto': 'no label', 'comuna': 'inline label - visible with data', 'barrios': 'inline label - visible with data', 'perimetro': 'no label', 'area': 'no label', });
lyr_comunas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});