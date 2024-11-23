
export const heroOptions = {
    autoPlay: true,
  
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
  
    detectRetina: true,
    fpsLimit: 120,
  
    interactivity: {
      detectsOn: '#hero',
      events: {
        onDiv: [
          {
            selectors: '#repulse-div',
            enable: true,
            mode: 'bounce',
            type: 'circle',
          },
          {
            selectors: '#repulse-div',
            enable: true,
            mode: 'repulse',
            type: 'circle',
          },
          {
            selectors: '#repulse-span',
            enable: true,
            mode: 'repulse',
            type: 'circle',
          },
          {
            selectors: '#repulse-span',
            enable: true,
            mode: 'bounce',
            type: 'circle',
          },
          {
            selectors: '#togglebutton',
            enable: true,
            mode: 'repulse',
            type: 'circle',
          },
          {
            selectors: '#togglebutton',
            enable: true,
            mode: 'bounce',
            type: 'circle',
          },
          {
            selectors: '#scroller',
            enable: true,
            mode: 'repulse',
            type: 'circle',
          },
          {
            selectors: '#scroller',
            enable: true,
            mode: 'bounce',
            type: 'circle',
          },
        ],
  
        onHover: {
          enable: true,
          mode: 'bubble',
          parallax: {
            enable: true,
            force: 350,
            smooth: 20,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
  
      modes: {
        bounce: {
          distance: 100,
        },
        bubble: {
          distance: 100,
          duration: 0.4,
          size: 40,
          color: {
            value: '#5d6d7e',
          },
          opacity: 8,
          mix: false,
        },
  
        repulse: {
          distance: 200,
          factor: 200,
          speed: 1,
          maxSpeed: 50,
        },
      },
    },
};