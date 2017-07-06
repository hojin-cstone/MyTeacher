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
		controller : 'learning'
	}
],{
	common : function(){

	}, // common

    learning : function(){
        $(window).load(function(){

			var answerArea = $('.answer_area'),
				answerSheet = $('.answer_sheet'),
				answerList = $('.answer_list');

			var drag = false;
			var listOffset;

            answerList.find('li').mousedown(function(e){
				drag = true;

				listOffsetTmp = {
					y : $(this).offset().top,
					x : $(this).offset().left
				};

				mouseTmp = {
					x : e.pageX,
					y : e.pageY
				};

				// listM

				$(this).addClass('click');
				var answerCopy = $(this).clone();

				answerSheet.append(answerCopy);
			});

			answerSheet.mouseup(function(){
				drag = false;

				answerArea.find('li').removeClass('click');
			});

			$(':not(.answer_sheet)').mouseup(function(){
				drag = false;

				answerSheet.find('li.click').removeClass('click').remove();
			});

			answerArea.mousemove(function(e){
				if (drag) {
					listOffset = {
						x : e.pageX-(mouseTmp.x-listOffsetTmp.x-10),
						y : e.pageY-(mouseTmp.y-listOffsetTmp.y-10)
					};

					answerSheet.find('li.click').css({'top':listOffset.y, 'left':listOffset.x});
				}
			});

        });
	} // sub
});
