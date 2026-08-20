const data = {

  "black holes": {

    label: "Black hole: gravity can trap light",

    tt: "Think of a cosmic waterfall",

    t: "Imagine space like a river flowing toward a waterfall. Far away you can swim against it; near the edge the flow becomes too strong. That edge is the event horizon.",

    it: "Light can get trapped",

    i: "A black hole is a region of spacetime where gravity becomes so extreme that, after crossing the event horizon, escape is impossible.",

    st: "Mass bends spacetime",

    s: "Huge amounts of mass change the geometry of spacetime. A black hole is an extreme example of that curvature.",

    ct: "Would you see it cross?",

    c: "If you watched an object fall toward the horizon from far away, would it appear to cross normally?"
  },


  "how airplanes fly": {

    label: "Airflow around a wing creates lift",

    tt: "Think: redirect the air",

    t: "A wing changes the direction of moving air. The air pushes back on the wing, producing an upward force called lift.",

    it: "There isn't just one explanation",

    i: "Pressure differences, momentum, circulation and Newton's laws all describe connected parts of how lift works.",

    st: "Four forces interact",

    s: "In flight, lift, weight, thrust and drag interact. The aircraft's motion depends on their balance.",

    ct: "Name the four forces",

    c: "Can you name the four main forces acting on an airplane in flight?"
  },


  "photosynthesis": {

    label: "A leaf turns light into chemical energy",

    tt: "Sunlight → chemistry",

    t: "Think of a leaf as a tiny solar-powered factory. It uses light energy to help turn water and carbon dioxide into energy-rich molecules.",

    it: "The oxygen comes from water",

    i: "The oxygen released during photosynthesis comes from splitting water molecules, rather than directly from carbon dioxide.",

    st: "Plants store energy",

    s: "Light energy is converted into chemical energy that can be stored and used by the plant.",

    ct: "Where does released oxygen come from?",

    c: "Which molecule supplies the oxygen that plants release: CO₂ or H₂O?"
  },


  "quantum physics": {

    label: "Microscopic systems behave unlike everyday objects",

    tt: "Forget tiny billiard balls",

    t: "At quantum scales, objects do not always behave like familiar classical objects. Think in terms of states and probabilities.",

    it: "Probability is fundamental",

    i: "Quantum mechanics predicts probabilities for measurement outcomes with remarkable precision.",

    st: "Nature has a different rulebook",

    s: "Quantum theory describes matter and light at very small scales, where everyday intuition often fails.",

    ct: "Particle or wave?",

    c: "Why is it misleading to picture an electron only as a tiny classical particle?"
  }

};


function generic(topic) {

  return {

    label: `A visual model of ${topic}`,

    tt: "Build a mental model",

    t: `Start with one familiar analogy for ${topic}, then connect each detail to it.`,

    it: "Find the surprising connection",

    i: `Ask what causes ${topic}, what it changes, and what would happen if one part disappeared.`,

    st: "One idea at a time",

    s: `Break ${topic} into a few connected pieces. Understand the main mechanism first, then add details.`,

    ct: "Explain it yourself",

    c: `Can you explain ${topic} in one sentence without technical jargon?`

  };

}


function show(topic) {

  const key = topic.toLowerCase();

  const d = data[key] || generic(topic);


  document.querySelector("#title").textContent = topic;

  document.querySelector("#visualLabel").textContent = d.label;


  const fields = [

    ["trickTitle", d.tt],

    ["trick", d.t],

    ["interestingTitle", d.it],

    ["interesting", d.i],

    ["simpleTitle", d.st],

    ["simple", d.s],

    ["challengeTitle", d.ct],

    ["challenge", d.c]

  ];


  fields.forEach(([id, value]) => {

    document.getElementById(id).textContent = value;

  });


  document
    .querySelector(".hero")
    .classList
    .add("hidden");


  document
    .querySelector(".steps")
    .classList
    .add("hidden");


  document
    .querySelector("#app")
    .classList
    .remove("hidden");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


document
  .querySelector("#form")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const topic =
      document
        .querySelector("#topic")
        .value
        .trim();

    if (topic) {
      show(topic);
    }

  });


document
  .querySelectorAll("[data-topic]")
  .forEach(button => {

    button.addEventListener("click", function() {

      show(this.dataset.topic);

    });

  });


document
  .querySelector("#back")
  .addEventListener("click", function() {

    document
      .querySelector("#app")
      .classList
      .add("hidden");


    document
      .querySelector(".hero")
      .classList
      .remove("hidden");


    document
      .querySelector(".steps")
      .classList
      .remove("hidden");


    document
      .querySelector("#topic")
      .focus();


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });