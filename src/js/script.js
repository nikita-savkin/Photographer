
const navDots = document.querySelectorAll('.right-panel__dot'),
  firstBlock = document.querySelector('.first'),
  secondBlock = document.querySelector('.second'),
  thirdBlock = document.querySelector('.third'),
  fourthBlock = document.querySelector('.fourth'),
  fifthBlock = document.querySelector('.fifth'),
  blocks = [firstBlock, secondBlock, thirdBlock, fourthBlock, fifthBlock];

const menuLinks = document.querySelectorAll('.menu__link'),
rightPanel = document.querySelector('.right-panel');

let scrollToBlock = (block) => {
  block.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  });
};

//Menu navigation 

menuLinks.forEach((link, i) => {
  link.addEventListener('click', (e) => {

    e.preventDefault();

    switch(i) {
      case 0:
        scrollToBlock(firstBlock)
        break
      case 1:
        scrollToBlock(secondBlock)
        break
      case 2:
        scrollToBlock(thirdBlock)
        break
      case 3:
        scrollToBlock(fourthBlock)
        break
      case 4:
        scrollToBlock(fifthBlock)
        break
    }
  });
});

// Navigation width dots

navDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {

    switch(i) {
      case 0:
        scrollToBlock(firstBlock)
        break
      case 1:
        scrollToBlock(secondBlock)
        break
      case 2:
        scrollToBlock(thirdBlock)
        break
      case 3:
        scrollToBlock(fourthBlock)
        break
      case 4:
        scrollToBlock(fifthBlock)
        break
    }
  })
});

//Main menu open

const headerMenu = document.querySelector('.header__menu'),
headerMenuName = document.querySelector('.header__menu-name'),
headerLine = document.querySelector('.header__menu-line'),
headerItem = document.querySelector('.header__menu-item'),
menuLeftBlock = document.querySelector('.menu__left-block'),
footerLinks = document.querySelectorAll('.footer__link-icon');

const menuBtn = document.querySelector('.header__menu-name'),
 mainMenu = document.querySelector('.menu');

const openBlockMenu = () => {
  mainMenu.classList.toggle('display-flex');
};

const openSlowMenu = () => {
  mainMenu.classList.toggle('opacity-show');
};

const openLeftBlock = () => {
  menuLeftBlock.classList.add('transform-left-block')
}

menuBtn.addEventListener('click', () => {
  
  rightPanel.classList.toggle('right-panel-transform')

  if (!(mainBlock.scrollTop >= blockHeight)) {
    headerMenu.classList.toggle('red-color')
    headerMenuName.classList.toggle('transform-menu-name')
    headerLine.classList.toggle('red-background')
    headerItem.classList.toggle('visibility-hidden')
    footerLinks.forEach(link => {
      link.classList.toggle('red-fill')
    })
  } 
  
  if (headerMenuName.innerHTML === 'Меню') {
    headerMenuName.innerHTML = 'Закрыть'
  } else {
    headerMenuName.innerHTML = 'Меню'
  }

  if (!mainMenu.classList.contains('display-flex')) {
    openBlockMenu();
    setTimeout(openSlowMenu, 100);
    setTimeout(openLeftBlock, 300)
  } else {
    openSlowMenu();
    setTimeout(openBlockMenu, 800);
  }
  
});


//About btn open text 

const secondPhoto = document.querySelector('.second__photo'),
secondInfo = document.querySelector('.second__info'),
secondSubtitle = document.querySelector('.second__subtitle'),
secondSeeAll = document.querySelector('.second__see-all'),
aboutBtn = document.querySelector('.about-see-btn');

aboutBtn.addEventListener('click', () => {
 
  secondBlock.classList.toggle('second-add-bg')
  aboutBtn.classList.toggle('animation-none')

  function photoMove() {
    if (!secondPhoto.classList.contains('second-photo-open')) {
      secondPhoto.classList.remove('second-photo-hide')
      secondPhoto.classList.add('second-photo-open')
    } else {
      secondPhoto.classList.remove('second-photo-open')
      secondPhoto.classList.add('second-photo-hide')
    }
  }

  function secondInfoOpen() {
    secondInfo.classList.toggle('second-info-open')
  }

  function subtitleOpen() {
    secondSubtitle.classList.toggle('subtitle-open')
  }

  if (!secondPhoto.classList.contains('second-photo-open')) {
    secondInfoOpen()
    setTimeout(photoMove, 1000)
    setTimeout(subtitleOpen, 3000)
    secondSeeAll.classList.add('visibility-hidden')
    aboutBtn.classList.add('second-btn-animation')
  } else {
    secondSubtitle.scrollTo(0, 0)
    subtitleOpen()
    photoMove()
    setTimeout(secondInfoOpen, 1800)
    setTimeout(function() {
      secondSeeAll.innerHTML = 'Прочитать всю историю'
      secondSeeAll.classList.remove('visibility-hidden')
      aboutBtn.classList.remove('second-btn-animation')
    }, 2000)
    
  }
});


//Change color width scroll

const mainBlock = document.querySelector('.main'),
asideCounter = document.querySelector('.right-panel__active');
let blockHeight = getComputedStyle(firstBlock).height.slice(0, -2)

  mainBlock.addEventListener('scroll', () => {

    if (mainBlock.scrollTop >= blockHeight) {
      headerMenu.classList.add('red-color')
      headerLine.classList.add('red-background')
      footerLinks.forEach(link => {
        link.classList.add('red-fill')
      })
    } else if (mainBlock.scrollTop <= blockHeight && !mainMenu.classList.contains('display-flex')) {
      headerMenu.classList.remove('red-color')
      headerLine.classList.remove('red-background')
      footerLinks.forEach(link => {
        link.classList.remove('red-fill')
      })
    }

    navDots.forEach(dot => {

      if (mainBlock.scrollTop < blockHeight) {
        dot.classList.remove('red-background-dot')
        navDots[0].classList.add('red-background-dot')
        asideCounter.innerHTML = '01'
      } else if (mainBlock.scrollTop >= blockHeight && mainBlock.scrollTop <= (blockHeight * 2)) {
        dot.classList.remove('red-background-dot')
        navDots[1].classList.add('red-background-dot')
        asideCounter.innerHTML = '02'
      } else if (mainBlock.scrollTop > (blockHeight * 2) && mainBlock.scrollTop < (blockHeight * 3)) {
        dot.classList.remove('red-background-dot')
        navDots[2].classList.add('red-background-dot')
        asideCounter.innerHTML = '03'
      } else if (mainBlock.scrollTop > (blockHeight * 3) && mainBlock.scrollTop < (blockHeight * 4)) {
        dot.classList.remove('red-background-dot')
        navDots[3].classList.add('red-background-dot')
        asideCounter.innerHTML = '04'
      } else if (mainBlock.scrollTop > (blockHeight * 4) && mainBlock.scrollTop < (blockHeight * 5)) {
        dot.classList.remove('red-background-dot')
        navDots[4].classList.add('red-background-dot')
        asideCounter.innerHTML = '05'
      }
    })
  });

  
//Open photo in slider

const sliderImage = document.querySelectorAll('.third__line-image'),
sliderMainWrapper = document.querySelector('.third__main-photo'),
sliderMainImg = document.querySelector('.third__main-img'),
sliderMainWebp = document.querySelector('.third__main-webp');

sliderImage.forEach((slide, i) => {

  slide.addEventListener('click', () => {

    sliderImage.forEach(slide => {
      slide.classList.remove('active')
    })

    sliderImage[i].classList.add('active')

    sliderMainWrapper.classList.remove('opacity-show-slow')
    sliderMainWrapper.classList.add('opacity-hide')

    function setAttributeImg(num) {
      sliderMainImg.setAttribute('src', `img/${num}.img`)
      sliderMainWebp.setAttribute('srcset', `img/${num}.webp`)
    }

    setTimeout(function() {
      switch(i) {
        case 0: 
          setAttributeImg('1')
          break 
        case 1: 
          setAttributeImg('2')
          break 
        case 2: 
          setAttributeImg('3')
          break
        case 3: 
          setAttributeImg('4')
          break 
        case 4: 
          setAttributeImg('5')
          break 
        case 5: 
          setAttributeImg('6')
          break 
        case 6: 
          setAttributeImg('7')
          break 
        case 7: 
          setAttributeImg('8')
          break 
        case 8: 
          setAttributeImg('9')
          break 
        case 9: 
          setAttributeImg('10')
          break 
        case 10: 
          setAttributeImg('11')
          break 
        case 11: 
          setAttributeImg('12')
          break 
        case 12: 
          setAttributeImg('13')
          break 
      } 
    }, 900)
    
    setTimeout(function() {
      sliderMainWrapper.classList.remove('opacity-hide')
      sliderMainWrapper.classList.add('opacity-show-slow')
    }, 1000)

  });
});

//Works slider 

const sliderPhotos = document.querySelector('.third__line-photos'),
sliderPhoto = document.querySelector('.third__line-image'),
sliderNextBtn = document.querySelector('.third__btn-next'),
sliderPrevBtn = document.querySelector('.third__btn-prev');

let offset = 0,
wrapperWidth = getComputedStyle(sliderPhotos).width;

sliderNextBtn.addEventListener('click', () => {

    if (offset == +wrapperWidth.slice(0, -2) + sliderPhoto.offsetWidth) {
      offset = 0
    } else {
      offset += sliderPhoto.offsetWidth
    }

  sliderPhotos.style.transform = `translateX(-${offset}px)`

});

sliderPrevBtn.addEventListener('click', () => {

  if (offset == 0) {
    offset = +wrapperWidth.slice(0, -2) + sliderPhoto.offsetWidth
  } else {
    offset -= sliderPhoto.offsetWidth
  }

sliderPhotos.style.transform = `translateX(-${offset}px)`

});

//Works open/close full image 

const worksOpenBtn = document.querySelector('.third__see-all-btn'),
sliderWrapper = document.querySelector('.third__line'),
worksCloseBlock = document.querySelector('.third__close'),
worksText = document.querySelector('.third__text'),
worksCloseBtn = document.querySelector('.third__close-btn'),
worksRightText = document.querySelector('.third__right-text');

worksOpenBtn.addEventListener('click', () => {

  sliderWrapper.classList.add('slider-down')  
  sliderMainWrapper.classList.add('main-photo-transform')
  headerMenu.classList.add('opacity-hide')
  rightPanel.classList.add('right-panel-transform')

  footerLinks.forEach(link => {
    link.classList.add('opacity-hide')
  })

  worksText.classList.add('opacity-hide')
  worksCloseBlock.classList.add('opacity-show-slow')
  worksRightText.classList.add('opacity-show-slow')

  
});

worksCloseBtn.addEventListener('click', () => {

  sliderWrapper.classList.remove('slider-down')  
  sliderMainWrapper.classList.remove('main-photo-transform')
  headerMenu.classList.remove('opacity-hide')
  rightPanel.classList.remove('right-panel-transform')

  footerLinks.forEach(link => {
    link.classList.remove('opacity-hide')
  })

  worksText.classList.remove('opacity-hide')
  worksCloseBlock.classList.remove('opacity-show-slow')
  worksRightText.classList.remove('opacity-show-slow')

});


// Clients open text 

const clientsBtn = document.querySelector('.fourth__see-all-btn'),
clientsBtnBlock = document.querySelector('.fourth__see-all'),
clientsBtnClose = document.querySelector('.fourth__see-all-close'),
clientsLogos = document.querySelector('.fourth__logos'),
clientsLogoWrapper = document.querySelectorAll('.fourth__logo-wrapper'),
clientsTitleMain = document.querySelector('.fourth__title-main'),
clientsTitleHidden = document.querySelectorAll('.fourth__title-hidden'),
clientsSubtitleMain = document.querySelector('.fourth__subtitle-main'),
clientsSubtitleHidden = document.querySelectorAll('.fourth__subtitle-hidden');

clientsBtn.addEventListener('click', () => {

  rightPanel.classList.add('right-panel-transform')

  clientsLogos.classList.add('logos-transform')
  clientsLogoWrapper.forEach(logo => {
    logo.classList.add('logo-wrapper-transform')
  })

  clientsTitleMain.classList.add('opacity-hide')
  clientsTitleHidden[0].classList.add('opacity-show')
  clientsSubtitleMain.classList.add('opacity-hide')
  clientsSubtitleHidden[0].classList.add('opacity-show')

  clientsBtnBlock.classList.add('opacity-hide')
  clientsBtnClose.classList.add('opacity-show')

});

clientsLogoWrapper.forEach((logo, i) => {

    logo.addEventListener('click', () => {

      if (clientsLogoWrapper[0].classList.contains('logo-wrapper-transform')) {

        clientsTitleHidden.forEach(title => {
          title.classList.remove('opacity-show')
        })

        clientsSubtitleHidden.forEach(subtitle => {
          subtitle.classList.remove('opacity-show')
        })
    
        function addOpacityShow(i) {
          clientsTitleHidden[i].classList.add('opacity-show')
          clientsSubtitleHidden[i].classList.add('opacity-show')
        }
    
        switch(i) {
          case 0: 
            addOpacityShow(0);
            break
          case 1: 
            addOpacityShow(1);
            break
          case 2: 
            addOpacityShow(2);
            break
          case 3: 
            addOpacityShow(3);
            break
          case 4: 
            addOpacityShow(4);
            break
          case 5: 
            addOpacityShow(5);
            break
          case 6: 
            addOpacityShow(6);
            break
          case 7: 
            addOpacityShow(7);
            break
          case 8: 
            addOpacityShow(8);
            break
        }
      }
  })
});

clientsBtnClose.addEventListener('click', () => {

  rightPanel.classList.remove('right-panel-transform')

  clientsTitleMain.classList.remove('opacity-hide')
  clientsSubtitleMain.classList.remove('opacity-hide')

  clientsTitleHidden.forEach(client => {
    client.classList.remove('opacity-show')
  });

  clientsSubtitleHidden.forEach(client => {
    client.classList.remove('opacity-show')
  });

  clientsBtnBlock.classList.remove('opacity-hide')
  clientsBtnClose.classList.remove('opacity-show')

  clientsLogos.classList.remove('logos-transform')
  clientsLogoWrapper.forEach(logo => {
    logo.classList.remove('logo-wrapper-transform')
  })

});

// Contact right panel open

const contactBtn = document.querySelector('.fifth__see-all'),
contactBlock = document.querySelector('.fifth__contact'),
contactBlockCloseBtn = document.querySelector('.fifth__see-all-close-btn');

contactBtn.addEventListener('click', () => {

  rightPanel.classList.add('right-panel-transform')
  contactBlock.classList.add('contact-transform')
  
});

contactBlockCloseBtn.addEventListener('click', () => {

  rightPanel.classList.remove('right-panel-transform')
  contactBlock.classList.remove('contact-transform')

});