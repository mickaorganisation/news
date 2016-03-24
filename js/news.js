//dom ready appelle du dom

$(function(){

    //recuperer les flux
    $.ajax({

        type: 'GET',
        url: 'backend/get_flux.php',
        dataType: 'json',
        success: function(resultat){
            console.log(resultat);
            var html ='<option value="">choisir</option>';
            $.each(resultat, function(index, element){
                html +='<option value="'+element.url+'">'+element.titre+'</option>';


            });

            $('#flux_rss').html(html);
            $('#flux_rss').selectmenu("refresh"); //pour refresh le select
        }
    });
            //recuperer levenement change sur le select

    $('#flux_rss').change(function(){
        var url = $(this).val();
        console.log(url);

        $.ajax({
            type: 'GET',
            url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q='+url,
           dataType: 'json',
            success: function(resultat){
                console.log(resultat.responseData.feed.entries);
                afficherArticles(resultat.responseData.feed.entries);
            }
        });
    });

    function afficherArticles(tab){

        $('#articles').html(''); //vide le contenu html du div

        var html= '';
        $.each(tab,function(index, article){
            html +='<artcile>';
            html +='<h3><a href="'+article.link+'">'+article.title+'</a></h3>';
            html +='<p>'+article.contentSnippet+'</p>';
            html +='</artcile>';
        });

        $('#articles').html(html); //on recupere le contenu
    }

    $('#btn_add').click(function(event){
        event.preventDefault();

        var titre = $('#flux_titre').val();
        var url = $('#flux_url').val();

        if(titre!='')&& url(url!=''){

            $.ajax({
                type: 'POST',
                url: 'backend/insert_flux.php,' +
                dataType: 'text',
                data: {'titre':titre, 'url':url},
            success: function(resultat){

            }

            });
        }else{
        }

    });

});