/*al pasar mouse por el icono de la camara sale un aviso de click me*/
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

/*al pasar mouse por circulos de projects va a salir el texto debajo de ellos*/
// $(document).ready(function(){
// 	$('.uno').mouseout(function(){
// 		$('.tem1').toggle();
// 	});
// });
// $(document).ready(function(){
// 	$('.dos').mouseout(function(){
// 		$('.tem2').toggle();
// 	});
// });
// $(document).ready(function(){
// 	$('.tres').mouseout(function(){
// 		$('.tem3').toggle();
// 	});
// });

// pasar mouse cambia de color iconos de footer
$(document).ready(function(){
    $('.last').mouseenter(function(){
      $(this).css({'background-color':'#666699','border-radius':'25px'});
    }); 
     $('.last').mouseleave(function(){
      $(this).css('background-color','transparent');
    });   
});

// progress bar cada que hace click en boton se llena
!function($){
  var Progressbar = function(element){
    this.$element = $(element);
    }
    Progressbar.prototype.update = function(value){
      var $div = this.$element.find('div');
      var $span = $div.find('span');
      $div.attr('aria-valuenow',value);
      $div.css('width',value +'%');
      $span.text(value+ '% Complete');
    }
    Progressbar.prototype.reset = function () {
        this.update(0);
    }
     $.fn.progressbar = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('jbl.progressbar');

            if (!data) $this.data('jbl.progressbar', (data = new Progressbar(this)));
            if (typeof option == 'string') data[option]();
            if (typeof option == 'number') data.update(option);
          })
      };
      $(document).on('click', '[data-toggle="progressbar"]', function (e) {
        var $this = $(this);
        var $target = $($this.data('target'));
        var value = $this.data('value');

        e.preventDefault();

        $target.progressbar(value);
    });
  }(window.jQuery);


// When the user clicks on <button> skills, open the popup
function myFunctionA() {
    var popup = document.getElementById('intermediate');
    popup.classList.toggle('show');
}
function myFunctionB() {
    var popup = document.getElementById('basic');
    popup.classList.toggle('show');
}
function myFunctionC() {
    var popup = document.getElementById('advance');
    popup.classList.toggle('show');
}
// projects
function myFunctionD() {
    var popup = document.getElementById('proyect');
    popup.classList.toggle('show');
}
function myFunctionE() {
    var popup = document.getElementById('proyectA');
    popup.classList.toggle('show');
}
function myFunctionF() {
    var popup = document.getElementById('proyectB');
    popup.classList.toggle('show');
}