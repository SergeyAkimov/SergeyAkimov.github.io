$( document ).ready(function() {
  let search = $('#searchHide');
  search.click(function(){
    $('.header__search_input').fadeToggle(300);
  });


  $('.header__slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $('.slick-next').html(
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="72.938" viewBox="0 0 40 72.938">
      <defs>
        <filter x="1730" y="475.031" width="40" height="72.938" filterUnits="userSpaceOnUse">
          <feFlood result="flood" flood-color="#d3c1ad"/>
          <feComposite result="composite" operator="in" in2="SourceGraphic"/>
          <feBlend result="blend" in2="SourceGraphic"/>
        </filter>
      </defs>
      <path id="right" class="cls-1" d="M1731.97,547.979L1770,511.5l-38.03-36.48-1.97,2,35.93,34.476L1730,545.977Z" transform="translate(-1730 -475.031)"/>
    </svg>`
  );
  $('.slick-prev').html(
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="72.938" viewBox="0 0 40 72.938">
      <defs>
        <filter id="filter" x="150" y="475.031" width="40" height="72.938" filterUnits="userSpaceOnUse">
          <feFlood result="flood" flood-color="#fff"/>
          <feComposite result="composite" operator="in" in2="SourceGraphic"/>
          <feBlend result="blend" in2="SourceGraphic"/>
        </filter>
      </defs>
      <path id="left" class="cls-1" d="M188.026,547.979L150.005,511.5l38.021-36.48,1.969,2L154.066,511.5,190,545.977Z" transform="translate(-150 -475.031)"/>
    </svg>`
  );

  let header = $('.header'),
      information = $('.section.information'),
      ideas = $('.ideas'),
      purchase = $('.purchase'),
      projects = $('.projects'),
      presentation = $('.presentation'),
      mobile = $('.mobile'),
      statistic = $('.statistic'),
      headerBottom = header.offset().top + header.innerHeight(),
      informationBottom = information.offset().top + information.innerHeight(),
      ideasBottom = informationBottom + ideas.innerHeight(),
      purchaseBottom = ideasBottom + purchase.innerHeight(),
      projectsBottom = purchaseBottom + projects.innerHeight(),
      presentationBottom = projectsBottom + presentation.innerHeight(),
      mobileBottom = presentationBottom + mobile.innerHeight(),
      statisticBottom = mobileBottom + statistic.innerHeight();
// console.log(informationBottom);
// console.log(ideas.innerHeight());
// console.log(window.pageYOffset);
let counterFlag = true;
  $(window).scroll(function(e){

    // console.log(e.currentTarget.pageYOffset);

    if(e.currentTarget.pageYOffset > headerBottom * 0 + 5){
      $(information)
      .find('.information__item')
      .css({'margin-left': '0px'});
    }
    if(e.currentTarget.pageYOffset > headerBottom){
      $('.ideas__images').find('img:nth-child(2)').delay(500).animate({'opacity': '1'}, 300);
    }
    if(e.currentTarget.pageYOffset > headerBottom + 300){
      $('.ideas__images').find('img:first-child').css({'left': '0'});
      $('.ideas__images').find('img:last-child').css({'right': '0'});
      setTimeout(function(){
        $('.purchase').css({'margin-left': '0'});
      }, 500);
    }
    if(e.currentTarget.pageYOffset > purchaseBottom){
      // $(projects).css({'height': '100vh'});
      $(projects).delay(1000).fadeIn(500);
    }
    if(e.currentTarget.pageYOffset > projectsBottom){
      $(presentation).fadeIn(500);
    }
    if(e.currentTarget.pageYOffset > projectsBottom){
      $(mobile).find('.mobile__item:first-child').css({'margin': '0'});
      $(mobile).find('.mobile__item:last-child').css({'right': '0'});

      $(mobile).find('.mobile__list-item').each(function(index){
          $(this).delay(3700 * ((index+1)/2)).animate({'margin-left': '0', 'opacity': '1'});
      });
    }
    if(e.currentTarget.pageYOffset > presentationBottom){
      if(counterFlag){
        setTimeout(function(){
          //счётчик
          function counter(startValue, intervalValue, maxValue, index){
            if(startValue >= maxValue){
              setTimeout(function(){
                return Math.round($(statisticCount).eq(index).text(startValue));
              }, 200);
            } else{
              setTimeout(function(){
                Math.round($(statisticCount).eq(index).text(startValue));
                return startValue + counter(startValue+intervalValue, intervalValue, maxValue, index);
              }, 200);
            }
          };
          for(let i = 0; i < statisticCount.length; i++){
            $(statisticCount).text(counter(0, statisticCounts[i].interval, statisticCounts[i].value, i));
          }
        },100);
        counterFlag = !counterFlag;
      }
    }
  });

  let visible = true;
  $('#hiddenButton').click(function(){
    $('.row_h').fadeToggle(300);
    if(visible){
      $(this).text('close');
      visible = !visible;
    } else if (!visible){
      $(this).text('load more');
      visible = !visible;
    }
  });

  //video
  let video = document.querySelector('video'),
      playBtn = $('.presentation').find('.presentation__video-container_play'),
      icon = $(playBtn).find('svg'),
      progress = document.querySelector('.presentation .presentation__video-container_progress-bar_progress'),
      percentage;

  function toggleVideo(){
    if(video.paused){
      video.play();
      $('.presentation__video-container').animate({'opacity': '0'}, 500).addClass('presentation__video-container_active');
      $('.presentation__video-container').hover(function(){
        $('.presentation__video-container').animate({'opacity': '1'}, 500);
      }, function(){
        $('.presentation__video-container').animate({'opacity': '0'}, 500);
      });
    } else{
      video.pause();
    }
  }
  function onTimeUpdate(){
    percentage = (video.currentTime / video.duration) * 100;
    progress.style.width = percentage + "%";

    //подсчёт оставшегося времени
    let curMins = Math.floor(video.currentTime / 60),
        curSecs = Math.floor(video.currentTime - curMins * 60),
        durMins = Math.floor(video.duration / 60),
        durSecs = Math.round(video.duration - durMins * 60);

    if(curSecs < 10){
      curSecs = '0' + curSecs;
    }
    if(curMins < 10){
      curMins = '0' + curMins;
    }
    if(durSecs < 10){
      durSecs = '0' + durSecs;
    }
    if(durMins < 10){
      durMins = '0' + durMins;
    }
    document.querySelector('.presentation__video-container_time').innerHTML = curMins+':'+curSecs;
  }
  function countTime(){
    videoDuration
  };

  video.ontimeupdate = onTimeUpdate;

  playBtn.on('click', function(){
    toggleVideo();
  });

  //счётчик
  let statisticCount = $('.statistic__count'),
      statisticCounts = [];
  function multiplicity(number){
    parseInt(number);
    for(let i = 3; i <= 10; i++){
      if(number % i == 0){
        return number/=i;
      } else if(number == 3587){
        i = number;
        return number/=i;
      }
    }
  };
  function CountData(value){
    this.value = parseInt(value);
    this.interval = multiplicity(value);
  };
  for(let i = 0; i < statisticCount.length; i++){
    statisticCounts.push(new CountData(statisticCount.eq(i).html()));
  }
  $(statisticCount).html('0');
});
