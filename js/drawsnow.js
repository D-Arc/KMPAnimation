
var proton, emitter, renderer, canvas;

createProton();
createRenderer();
tick();

function createProton(){

    proton = new Proton;
    emitter = new Proton.Emitter();

    //阻力
    emitter.damping = 0.0075;
    emitter.rate = new Proton.Rate(Proton.getSpan(5, 10), 0.3);
    
    emitter.addInitialize(new Proton.Body([
        './image/particles/particle-fruit.png'
        ,'./image/particles/particle-mania.png'
        ,'./image/particles/particle-osu.png'
        ,'./image/particles/particle-taiko.png'
    ], 48));
    emitter.addInitialize(new Proton.Position(new Proton.LineZone(10, -40, 990, -40)));
    emitter.addInitialize(new Proton.Mass(1), new Proton.Radius(Proton.getSpan(15, 20)));
    
    // crossZoneBehaviour = new Proton.CrossZone(new Proton.RectZone(-2, 0, 1005, 550), 'cross');
    // emitter.addBehaviour(repulsionBehaviour, crossZoneBehaviour);
    // emitter.addBehaviour(new Proton.Scale(Proton.getSpan(.1, .4)));
    emitter.addBehaviour(new Proton.Alpha(.5));
    emitter.addBehaviour(new Proton.RandomDrift(10, 10, .2));
    emitter.addBehaviour(new Proton.Rotate('Velocity'));
    emitter.addBehaviour(new Proton.Gravity(1));
    
    emitter.emit();
    proton.addEmitter(emitter);
}

function createRenderer() {
    canvas = document.getElementsByClassName("draw-field-canvas")[0];
    canvas.width = 1000;
    canvas.height = 610;
    renderer = new Proton.CanvasRenderer(canvas);
    proton.addRenderer(renderer);
}

function tick(){
    requestAnimationFrame(tick);
    proton.update();
}