var map;

function initMap() {
    var kt147ae = {lat: 51.340750, lng: -0.48077};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: kt147ae
    });
    var marker = new google.maps.Marker({
        position: kt147ae,
        map: map
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');


    $.getJSON( "2016_results.json", function( data ) {
        $.each( data, function( key, val ) {
            var marker = new google.maps.Marker({
                position: {lat: val.lat, lng: val.long},
                map: map,
                school : val
            });

            if(val.at_least_a_c > 80)
                marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');

            marker.addListener('click', function() {
                updateActiveSchool(this.school);
            });
        });
    });
}

function updateActiveSchool(activeSchool){

    $("#school_area").html(activeSchool.area);
    $("#school_name").html(activeSchool.school);
    $("#school_attainment").html(activeSchool.attainment_8);
    $("#school_progress_8").html(activeSchool.progress_8);
    $("#school_at_least_a_c").html(activeSchool.at_least_a_c);
    $("#school_ebacc").html(activeSchool.ebacc);
    $("#school_address").html(activeSchool.address);

}



