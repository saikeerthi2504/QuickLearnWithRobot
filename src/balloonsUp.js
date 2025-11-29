import confetti from "canvas-confetti";

export function balloonsUp(duration){
    const end = Date.now()+duration;
    (function frame(){
        confetti({
            particleCount:5,
            angle:90,
            spread:20,
            origin:{X:Math.random(),Y:1.2},
            gravity:-0.3
        });
        if(Date.now()<end){
            requestAnimationFrame(frame);
        }
    })
};