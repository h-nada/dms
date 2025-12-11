/**
 * メインスクリプト - script.js
 * ハンバーガーメニュー、スムーススクロールなど
 */

$(function() {

	// ============================================
	// ハンバーガーメニュー
	// ============================================
	$('.openbtn').on('click', function() {
		$(this).toggleClass('active');
		$('#g-nav').toggleClass('panelactive');
	});

	// ナビリンククリックでメニューを閉じる
	$('#g-nav a').on('click', function() {
		$('.openbtn').removeClass('active');
		$('#g-nav').removeClass('panelactive');
	});


	// ============================================
	// スムーススクロール
	// ============================================
	$('a[href^="#"]').on('click', function() {
		var speed = 800;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;

		// ヘッダー高さを考慮（PC/SPで異なる）
		var headerHeight = 0;
		if ($(window).width() > 750) {
			headerHeight = 120; // PC
		} else {
			headerHeight = 70;  // SP
		}

		$('html, body').animate({
			scrollTop: position - headerHeight
		}, speed, 'swing');

		return false;
	});


	// ============================================
	// Read More ボタン
	// ============================================
	$('.readmore').on('click', function() {
		$(this).toggleClass('on-click');
		$('.hide_04').slideToggle(300);
	});

	$('.readmore05').on('click', function() {
		$(this).toggleClass('on-click');
		$('.hide_05').slideToggle(300);
	});


	// ============================================
	// delayScroll（遅延アニメーション）
	// ============================================
	function delayScrollAnime() {
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		$('.delayScroll').each(function() {
			var elemPos = $(this).offset().top;
			var delay = 0;

			if (scroll >= elemPos - windowHeight) {
				$(this).children().each(function(i) {
					$(this).delay(400 * i).queue(function() {
						$(this).addClass('fadeUp').dequeue();
					});
				});
			}
		});
	}

	$(window).scroll(function() {
		delayScrollAnime();
	});

	$(window).on('load', function() {
		delayScrollAnime();
	});

});
