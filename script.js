require([
    "esri/config", 
    "esri/Map", 
    "esri/views/MapView", 
    "esri/WebMap", 
    "esri/widgets/Legend",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle"
], function(esriConfig, Map, MapView, WebMap, Legend, LayerList, BasemapToggle) {

    esriConfig.apiKey = "AAPKb92c7f27651b4b24970a6f430a3115f1xZJNmyjdIRmdeZCgLwpXoMIVAaCqTXTsofEOiWLsnjhnvsXLQoy2WP_wbuK7lWe2";

    // const map = new Map({
    //     basemap: "arcgis-topographic" // Basemap layer service
    // });

    // // Create a map with an initial basemap
    // let map = new Map({
    //     basemap: "streets-vector",  // The initial basemap to toggle from
    //     ground: "world-elevation"
    // });
    
    // // Reference the map in the view instance
    // let view = new SceneView({
    //     container: "viewDiv",
    //     map: map
    // });
    
    // let basemapToggle = new BasemapToggle({
    //     view: view,  // The view that provides access to the map's "streets-vector" basemap
    //     nextBasemap: "hybrid"  // Allows for toggling to the "hybrid" basemap
    // });

    const webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
        id: "32de333971f24088800e96618b547544"
    }
    });

    const view = new MapView({
        map: webmap,
        center: [78.96, 20.59], // Longitude, latitude
        zoom: 4 , // Zoom level
        container: "viewDiv" // Div element
    });

    // view.popup = null;

    let legend = new Legend({
            view: view
    });
      
    // add widget to view
    view.ui.add(legend, "bottom-left");
    
    let layerList = new LayerList({
            view: view
    });
      // Adds widget below other elements in the top left corner of the view
    view.ui.add(layerList, {
            position: "top-left"
    });

    // Create a BasemapToggle widget
    let basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "hybrid" // You can specify the desired basemap here
    });

    // Add the BasemapToggle widget to the view's UI
    view.ui.add(basemapToggle, "bottom-right"); // Adjust the position as needed

    view.on('click', function (event){
            let latitude = event.mapPoint.latitude;
            let longitude = event.mapPoint.longitude;
            console.log(latitude,longitude);
            document.getElementById('yCoordinate').textContent=latitude
            document.getElementById('xCoordinate').textContent=longitude
    });

});

