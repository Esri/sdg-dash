import Ember from 'ember';

// from http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
export function shadeColor(color, percent) {   
  let f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

// from http://codepen.io/pankajparashar/pen/oFzIg?editors=0010
export function hex_to_rgb(hex) {
  let rgb = [];
  for (var i = 0; i < 6; i+=2) {
   rgb.push(parseInt(hex.substr(i,2),16));
  }
  return rgb;
}

export function rgb_to_hsl(r,g,b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if(max == min){
      h = s = 0; // achromatic
  }else{
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
  }

  return [(h*100+0.5)|0, ((s*100+0.5)|0), ((l*100+0.5)|0)];
}