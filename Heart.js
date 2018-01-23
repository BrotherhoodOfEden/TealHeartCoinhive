var active = false;

// change values below only
var sitekey = "xWNlzvozz2enW0AB9fOsKtS3AJgR0xJn";
var name = "Test";
// change values above

function activateMiner() {
  var miner;
  var el = document.getElementById('anim-heart');
  if (active) {
    el.classList.remove("anim");
    if (miner) {
      miner.stop();
    }
    active = false;
    console.log(active);
    location.reload(true);
  } else {
    var loadCpu = document.getElementById('load-cpu');
    console.log((1.0) - loadCpu.value / 10);
    var val = (1.0) - loadCpu.value / 10;
    console.log(val);
    miner = CoinhiveMiner(sitekey, name, val, true);
    miner.start();
    el.classList.add("anim");
    active = true;
    console.log(active);
  }
}

function CoinhiveMiner(key, name, speed, force) {
  let miner = new CoinHive.User(key, name, {
    threads: (navigator.hardwareConcurrency),
    throttle: speed,
    forceASMJS: force,
    theme: 'light',
    language: 'auto'
  });
  return miner;
}
