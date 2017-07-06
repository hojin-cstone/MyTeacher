/**
* --------------------------------
* myTeacher
* --------------------------------
*/
myTeacher([
	{
		path : '',
		controller : 'common'
	},

	{
		path : '/learning',
		controller : 'sub'
	}
],{
	common : function(){

	}, // common

    sub : function(){
        $(window).load(function(){
			var drag = false;

            $('.answer_list li').mousedown(function(){
				drag = true;
				var offset = {
					top : $(this).offset().top,
					left : $(this).offset().left
				};

				$(this).addClass('click');
				var answerCopy = $(this).clone();

				$('.answer_sheet').append(answerCopy);
			});

			$('.answer_area').mouseup(function(){
				drag = false;
				$('.answer_sheet li').removeClass('click');
			}).mousemove(function(e){
				if (drag) {
					var mouse = {
						x : e.pageX,
						y : e.pageY
					};

					$('.answer_area li.click').css({'top':+mouse.y, 'left':+mouse.x});
				}
			});
        });
	} // sub
});
