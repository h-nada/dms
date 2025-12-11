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


	// ============================================
	// 固定人物画像のスクロール連動表示
	// ============================================
	function fixedPersonsAnime() {
		var $fixedPersons = $('.fixed-persons');
		var $trigger = $('#activities'); // 活動内容セクションをトリガーに

		// トリガー要素が存在しない場合は何もしない
		if ($trigger.length === 0 || $fixedPersons.length === 0) {
			return;
		}

		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var triggerPos = $trigger.offset().top;

		// トリガー位置（セクションが画面に入ってきたら）
		var showPoint = triggerPos - windowHeight * 0.7;

		if (scroll >= showPoint) {
			// 表示
			$fixedPersons.addClass('is-visible');
		} else {
			// 非表示（上にスクロールしてトリガー位置より上に戻った場合）
			$fixedPersons.removeClass('is-visible');
		}
	}

	// スクロール時に実行
	$(window).on('scroll', function() {
		fixedPersonsAnime();
	});

	// ページ読み込み時にも実行
	$(window).on('load', function() {
		fixedPersonsAnime();
	});

});
