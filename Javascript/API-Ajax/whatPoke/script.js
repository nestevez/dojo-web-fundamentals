$(document).ready(function(){
  for(let i=1; i<=151; i++){
    $('div.pictures').append('<img id="'+i+'" src="http://pokeapi.co/media/img/'+i+'.png" alt="pokemon number '+i+'"/>');
  }
  $(".pictures").on("click","img",function(){
    var url = "http://pokeapi.co/api/v1/pokemon/"+$(this).attr("id")+"/";
    $.get(url,function(res){
      var name = res.name;
      var piclink = 'http://pokeapi.co/media/img/'+res.pkdx_id+'.png';
      var typelist = '';
      var height = res.height;
      var weight = res.weight;
      console.log(res);
      for(let j=0;j<res.types.length;j++){
        typelist+= '<li>'+res.types[j].name+'</li>';
      }
      $(".info").html(
        `<h4>`+name+`</h4>
        <img src="`+piclink+`" alt="`+name+`" />
        <h5>Types</h5>
        <ul>`+
        typelist+
        `</ul>
        <h5>Height</h5>
        <p>`+height+`</p>
        <h5>Weight</h5>
        <p>`+weight+`</p>`
      );
    },'json');
  })
})
