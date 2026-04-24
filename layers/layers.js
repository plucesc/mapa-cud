var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_comunas_1 = new ol.format.GeoJSON();
var features_comunas_1 = format_comunas_1.readFeatures(json_comunas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunas_1.addFeatures(features_comunas_1);
var lyr_comunas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunas_1, 
                style: style_comunas_1,
                popuplayertitle: 'comunas',
                interactive: true,
                title: '<img src="styles/legend/comunas_1.png" /> comunas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_comunas_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_comunas_1];
lyr_comunas_1.set('fieldAliases', {'id': 'id', 'objeto': 'objeto', 'comuna': 'comuna', 'barrios': 'barrios', 'perimetro': 'perimetro', 'area': 'area', });
lyr_comunas_1.set('fieldImages', {'id': '', 'objeto': '', 'comuna': '', 'barrios': '', 'perimetro': '', 'area': '', });
lyr_comunas_1.set('fieldLabels', {'id': 'no label', 'objeto': 'no label', 'comuna': 'inline label - visible with data', 'barrios': 'inline label - visible with data', 'perimetro': 'no label', 'area': 'no label', });
lyr_comunas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});