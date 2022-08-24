var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0ab9ae06-410b-4cab-b09b-70434d78e5a8"],"propsByKey":{"0ab9ae06-410b-4cab-b09b-70434d78e5a8":{"name":"sun_drop1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"w3svmEzxM6371ddmAnrSpz0XjZN_7v5T","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/0ab9ae06-410b-4cab-b09b-70434d78e5a8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var b1=createSprite(10,400,30,150);
b1.shapeColor="magenta";
var b2=createSprite(50,400,15,200);
b2.shapeColor="green";
var b3=createSprite(80,400,10,400);
b3.shapeColor="blue";
var b4=createSprite(100,400,20,150);
b4.shapeColor="black";
var b5=createSprite(139,400,40,150);
b5.shapeColor="yellow";
var b6=createSprite(190,400,20,220);
b6.shapeColor="orange";
var b7=createSprite(230,400,15,230);
b7.shapeColor="brown";
var b8=createSprite(260,400,10,290);
b8.shapeColor="indigo";
var b9=createSprite(290,400,20,110);
b9.shapeColor="purple";
var b10=createSprite(330,400,30,250);
b10.shapeColor="gray";

var sun=createSprite(100,100,100,100);
sun.setAnimation("sun_drop1");

function draw() {
  background("cyan");
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
