/**
 * 共通スクリプト - common.js
 * ナビゲーション、アニメーション、スライダーなどの共通機能
 */

$(function() {
	// ============================================
	// ナビゲーション切り替え（トグル）
	// ============================================
	$('.Toggle').click(function() {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$('.NavMenu').addClass('active');
		} else {
			$('.NavMenu').removeClass('active');
		}
	});
});


// ============================================
// 背景画像自動切り替え（bgSwitcher）
// ============================================
jQuery(function($) {
	$('.mainimg_w').bgSwitcher({
		images: ['images/mainimg1.jpg', 'images/mainimg2.jpg', 'images/mainimg3.jpg'],
		interval: 6000,      // 切り替え間隔（ミリ秒）
		loop: true,          // ループ再生
		shuffle: false,      // シャッフル
		effect: "fade",      // エフェクト
		duration: 1600,      // エフェクト時間
		easing: "linear"     // イージング
	});
});


// ============================================
// ループスクロール（simplyScroll）
// ============================================
(function($) {
	$(function() {
		$('.loopslide ul').simplyScroll({
			autoMode: 'loop',
			speed: 1,
			frameRate: 60,
			horizontal: true,
			pauseOnHover: false,
			pauseOnTouch: false
		});
	});
})(jQuery);


// ============================================
// アコーディオン（セクション用）
// ============================================
$(function() {
	$('.s_01 .accordion_one .accordion_header').click(function() {
		$(this).next('.accordion_inner').slideToggle();
		$(this).toggleClass("open");
	});
});


// ============================================
// Slickスライダー
// ============================================
$(function() {
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 0,
		speed: 5000,
		cssEase: "linear",
		slidesToShow: 5,
		swipe: false,
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
});


// ============================================
// 汎用アコーディオン（js-title）
// ============================================
$(function() {
	$(".js-title").on("click", function() {
		$(this).next().slideToggle(200);
		$(this).toggleClass("open", 200);
	});
});


// ============================================
// スクロールアニメーション
// ============================================
function fadeAnime() {
	// フェードアップ
	$('.fadeUpTrigger').each(function() {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeUp');
		} else {
			$(this).removeClass('fadeUp');
		}
	});

	// フェードダウン
	$('.fadeDownTrigger').each(function() {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeDown');
		} else {
			$(this).removeClass('fadeDown');
		}
	});
}

// スクロール時にアニメーション実行
$(window).scroll(function() {
	fadeAnime();
});

// ページ読み込み時にアニメーション実行
$(window).on('load', function() {
	fadeAnime();
});


// ============================================
// アコーディオン（一般用）
// ============================================
$(function() {
	$('.accordion-title').on('click', function() {
		$(this).toggleClass('active');
		$(this).next('.accordion-content').slideToggle(300);
	});
});
