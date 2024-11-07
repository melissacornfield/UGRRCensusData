var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 0.654000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1860IllinoisCounties_AggregateAdded_1 = new ol.format.GeoJSON();
var features_1860IllinoisCounties_AggregateAdded_1 = format_1860IllinoisCounties_AggregateAdded_1.readFeatures(json_1860IllinoisCounties_AggregateAdded_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1860IllinoisCounties_AggregateAdded_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1860IllinoisCounties_AggregateAdded_1.addFeatures(features_1860IllinoisCounties_AggregateAdded_1);
var lyr_1860IllinoisCounties_AggregateAdded_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1860IllinoisCounties_AggregateAdded_1, 
                style: style_1860IllinoisCounties_AggregateAdded_1,
                popuplayertitle: "1860IllinoisCounties_AggregateAdded",
                interactive: false,
    title: '1860IllinoisCounties_AggregateAdded<br />\
    <img src="styles/legend/1860IllinoisCounties_AggregateAdded_1_0.png" /> 1979 - 9237<br />\
    <img src="styles/legend/1860IllinoisCounties_AggregateAdded_1_1.png" /> 9237 - 11243<br />\
    <img src="styles/legend/1860IllinoisCounties_AggregateAdded_1_2.png" /> 11243 - 14244<br />\
    <img src="styles/legend/1860IllinoisCounties_AggregateAdded_1_3.png" /> 14244 - 21965<br />\
    <img src="styles/legend/1860IllinoisCounties_AggregateAdded_1_4.png" /> 21965 - 144954<br />'
        });
var format_1840IllinoisCounties_AggregateAdded_2 = new ol.format.GeoJSON();
var features_1840IllinoisCounties_AggregateAdded_2 = format_1840IllinoisCounties_AggregateAdded_2.readFeatures(json_1840IllinoisCounties_AggregateAdded_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1840IllinoisCounties_AggregateAdded_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1840IllinoisCounties_AggregateAdded_2.addFeatures(features_1840IllinoisCounties_AggregateAdded_2);
var lyr_1840IllinoisCounties_AggregateAdded_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1840IllinoisCounties_AggregateAdded_2, 
                style: style_1840IllinoisCounties_AggregateAdded_2,
                popuplayertitle: "1840IllinoisCounties_AggregateAdded",
                interactive: false,
    title: '1840IllinoisCounties_AggregateAdded<br />\
    <img src="styles/legend/1840IllinoisCounties_AggregateAdded_2_0.png" /> 1979 - 9237<br />\
    <img src="styles/legend/1840IllinoisCounties_AggregateAdded_2_1.png" /> 9237 - 11243<br />\
    <img src="styles/legend/1840IllinoisCounties_AggregateAdded_2_2.png" /> 11243 - 14244<br />\
    <img src="styles/legend/1840IllinoisCounties_AggregateAdded_2_3.png" /> 14244 - 21965<br />\
    <img src="styles/legend/1840IllinoisCounties_AggregateAdded_2_4.png" /> 21965 - 1000000000000<br />'
        });
var format_UGRRMappingProjectDataSetNov42024_3 = new ol.format.GeoJSON();
var features_UGRRMappingProjectDataSetNov42024_3 = format_UGRRMappingProjectDataSetNov42024_3.readFeatures(json_UGRRMappingProjectDataSetNov42024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UGRRMappingProjectDataSetNov42024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UGRRMappingProjectDataSetNov42024_3.addFeatures(features_UGRRMappingProjectDataSetNov42024_3);
var lyr_UGRRMappingProjectDataSetNov42024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UGRRMappingProjectDataSetNov42024_3, 
                style: style_UGRRMappingProjectDataSetNov42024_3,
                popuplayertitle: "UGRR Mapping Project Data Set Nov 4 2024",
                interactive: true,
                title: '<img src="styles/legend/UGRRMappingProjectDataSetNov42024_3.png" /> UGRR Mapping Project Data Set Nov 4 2024'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_1860IllinoisCounties_AggregateAdded_1.setVisible(true);lyr_1840IllinoisCounties_AggregateAdded_2.setVisible(true);lyr_UGRRMappingProjectDataSetNov42024_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1860IllinoisCounties_AggregateAdded_1,lyr_1840IllinoisCounties_AggregateAdded_2,lyr_UGRRMappingProjectDataSetNov42024_3];
lyr_1860IllinoisCounties_AggregateAdded_1.set('fieldAliases', {'NAME': 'NAME', 'ID': 'ID', 'STATE': 'STATE', 'FIPS': 'FIPS', 'VERSION': 'VERSION', 'START_DATE': 'START_DATE', 'END_DATE': 'END_DATE', 'CHANGE': 'CHANGE', 'CITATION': 'CITATION', 'START_N': 'START_N', 'END_N': 'END_N', 'AREA_SQMI': 'AREA_SQMI', 'DATASET': 'DATASET', 'CNTY_TYPE': 'CNTY_TYPE', 'FULL_NAME': 'FULL_NAME', '1860 popul': '1860 popul', '1860 pop_1': '1860 pop_1', });
lyr_1840IllinoisCounties_AggregateAdded_2.set('fieldAliases', {'NAME': 'NAME', 'ID': 'ID', 'STATE': 'STATE', 'FIPS': 'FIPS', 'VERSION': 'VERSION', 'START_DATE': 'START_DATE', 'END_DATE': 'END_DATE', 'CHANGE': 'CHANGE', 'CITATION': 'CITATION', 'START_N': 'START_N', 'END_N': 'END_N', 'AREA_SQMI': 'AREA_SQMI', 'DATASET': 'DATASET', 'CNTY_TYPE': 'CNTY_TYPE', 'FULL_NAME': 'FULL_NAME', '1840 revis': '1840 revis', '1840 rev_1': '1840 rev_1', });
lyr_UGRRMappingProjectDataSetNov42024_3.set('fieldAliases', {'Title': 'Title', 'Name(s) related to site': 'Name(s) related to site', 'freedom seeker name related to site': 'freedom seeker name related to site', 'short description': 'short description', 'More information': 'More information', 'type (stationary)': 'type (stationary)', 'Routes': 'Routes', 'Town/ City': 'Town/ City', 'present day county': 'present day county', 'state': 'state', 'date of settlement in Illinois': 'date of settlement in Illinois', 'Time Active': 'Time Active', 'Date Range of Travel Through Illinois': 'Date Range of Travel Through Illinois', 'source type': 'source type', 'Reliability': 'Reliability', 'lat': 'lat', 'lon': 'lon', 'geoAddress': 'geoAddress', 'Nearest Current Address': 'Nearest Current Address', 'Access': 'Access', 'Start Year': 'Start Year', 'End Year': 'End Year', 'entered by': 'entered by', 'entry date': 'entry date', 'link to data entry template': 'link to data entry template', });
lyr_1860IllinoisCounties_AggregateAdded_1.set('fieldImages', {'NAME': 'TextEdit', 'ID': 'TextEdit', 'STATE': 'TextEdit', 'FIPS': 'TextEdit', 'VERSION': 'Range', 'START_DATE': 'DateTime', 'END_DATE': 'DateTime', 'CHANGE': 'TextEdit', 'CITATION': 'TextEdit', 'START_N': 'Range', 'END_N': 'Range', 'AREA_SQMI': 'TextEdit', 'DATASET': 'TextEdit', 'CNTY_TYPE': 'TextEdit', 'FULL_NAME': 'TextEdit', '1860 popul': 'TextEdit', '1860 pop_1': 'TextEdit', });
lyr_1840IllinoisCounties_AggregateAdded_2.set('fieldImages', {'NAME': 'TextEdit', 'ID': 'TextEdit', 'STATE': 'TextEdit', 'FIPS': 'TextEdit', 'VERSION': 'Range', 'START_DATE': 'DateTime', 'END_DATE': 'DateTime', 'CHANGE': 'TextEdit', 'CITATION': 'TextEdit', 'START_N': 'Range', 'END_N': 'Range', 'AREA_SQMI': 'TextEdit', 'DATASET': 'TextEdit', 'CNTY_TYPE': 'TextEdit', 'FULL_NAME': 'TextEdit', '1840 revis': 'TextEdit', '1840 rev_1': 'TextEdit', });
lyr_UGRRMappingProjectDataSetNov42024_3.set('fieldImages', {'Title': 'TextEdit', 'Name(s) related to site': 'TextEdit', 'freedom seeker name related to site': 'TextEdit', 'short description': 'TextEdit', 'More information': 'TextEdit', 'type (stationary)': 'TextEdit', 'Routes': 'TextEdit', 'Town/ City': 'TextEdit', 'present day county': 'TextEdit', 'state': 'TextEdit', 'date of settlement in Illinois': 'TextEdit', 'Time Active': 'TextEdit', 'Date Range of Travel Through Illinois': 'TextEdit', 'source type': 'TextEdit', 'Reliability': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'geoAddress': 'TextEdit', 'Nearest Current Address': 'TextEdit', 'Access': 'TextEdit', 'Start Year': 'TextEdit', 'End Year': 'TextEdit', 'entered by': 'TextEdit', 'entry date': 'TextEdit', 'link to data entry template': 'TextEdit', });
lyr_1860IllinoisCounties_AggregateAdded_1.set('fieldLabels', {'NAME': 'no label', 'ID': 'no label', 'STATE': 'no label', 'FIPS': 'no label', 'VERSION': 'no label', 'START_DATE': 'no label', 'END_DATE': 'no label', 'CHANGE': 'no label', 'CITATION': 'no label', 'START_N': 'no label', 'END_N': 'no label', 'AREA_SQMI': 'no label', 'DATASET': 'no label', 'CNTY_TYPE': 'no label', 'FULL_NAME': 'no label', '1860 popul': 'no label', '1860 pop_1': 'no label', });
lyr_1840IllinoisCounties_AggregateAdded_2.set('fieldLabels', {'NAME': 'no label', 'ID': 'no label', 'STATE': 'no label', 'FIPS': 'no label', 'VERSION': 'no label', 'START_DATE': 'no label', 'END_DATE': 'no label', 'CHANGE': 'no label', 'CITATION': 'no label', 'START_N': 'no label', 'END_N': 'no label', 'AREA_SQMI': 'no label', 'DATASET': 'no label', 'CNTY_TYPE': 'no label', 'FULL_NAME': 'no label', '1840 revis': 'no label', '1840 rev_1': 'no label', });
lyr_UGRRMappingProjectDataSetNov42024_3.set('fieldLabels', {'Title': 'inline label - visible with data', 'Name(s) related to site': 'hidden field', 'freedom seeker name related to site': 'hidden field', 'short description': 'inline label - visible with data', 'More information': 'hidden field', 'type (stationary)': 'inline label - visible with data', 'Routes': 'hidden field', 'Town/ City': 'inline label - visible with data', 'present day county': 'hidden field', 'state': 'hidden field', 'date of settlement in Illinois': 'hidden field', 'Time Active': 'hidden field', 'Date Range of Travel Through Illinois': 'hidden field', 'source type': 'hidden field', 'Reliability': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'geoAddress': 'hidden field', 'Nearest Current Address': 'hidden field', 'Access': 'hidden field', 'Start Year': 'hidden field', 'End Year': 'hidden field', 'entered by': 'hidden field', 'entry date': 'hidden field', 'link to data entry template': 'hidden field', });
lyr_UGRRMappingProjectDataSetNov42024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});