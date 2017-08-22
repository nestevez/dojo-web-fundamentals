function generateCard(fname, lname, desc) {
  var card = `
    <div class="card">
      <h2>`+fname+` `+lname+`</h2>
      <h6>Click for details</h6>
      <p style="display: none;">`+desc+`</p>
    </div>`;
  $(".cards").append(card);
}
$(document).ready(function(){
  console.log("document is ready");

  $('button').click(function(e){
    e.preventDefault();
    console.log('we clicked it!');
    var fname = $("input[name='firstName']").val();
    var lname = $("input[name='lastName']").val();
    var desc = $("textarea[name='description']").val();
    generateCard(fname,lname,desc);
  })

  $("div.cards").on("click",".card",function(){
    $(this).children().toggle();
    console.log(this);

  })

})
