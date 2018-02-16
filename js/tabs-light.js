$('.tabs__item').on('click', function(){

	var index = $(this).index();

	$(this).addClass('active')
		.siblings().removeClass('active');

	$('.tabs__content-item').eq(index).addClass('active')
		.siblings().removeClass('active');
});