let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

function call(id, text, hold = 0) {
  return new Promise((resolve) => {
    let i = 0;
    let idd = document.getElementById(id);

    function typer() {
      if (i < text.length) {
        idd.innerHTML += text.charAt(i);
        i++;
        setTimeout(typer, 50);
      } else {
        setTimeout(() => {
          resolve();
        }, hold)
      }
    }
    typer();
  })

}

function p8(id, text, wt = 30, hold = 0) {
  return new Promise((resolve) => {
    let i = 0;
    let idd = document.getElementById(id);

    function typer() {
      if (i < text.length) {
        idd.innerHTML = text.charAt(i);
        i++;
        setTimeout(typer, wt);
      } else {
        setTimeout(() => {
          resolve();
        }, hold)
      }
    }
    typer();
  })

}
async function first() {

  await call("abc", "Initializing Hack program.....", 500)

    .then(() => {
      return new Promise((resolve) => {
        let p = 0;
        function typer1() {
          if (p <= 100) {
            per.innerHTML = `&nbsp;${p}%`;
            p++;
            setTimeout(typer1, 30);
          }
          else {
            resolve()
          }
        }
        typer1()
      })
    })

  await call("inp", "Enter name to Hack: ")
    .then(() => { document.getElementById("user").style.visibility = "visible" })
}
first()
function checkEnter(event) {
  if (event.keyCode === 13) {
    run();
  }
}

function processInput() {

  function removeTextContent(element) {
    for (var i = 0; i < element.childNodes.length; i++) {
      var node = element.childNodes[i];
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = '';
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        removeTextContent(node);
      }
    }
  }

  var divElement = document.getElementById("another");
  removeTextContent(divElement);

  let pswrd = "";

  for (let i = 0; i < 8; i++) {
    var char = Math.floor(Math.random() * str.length);
    pswrd8 = pswrd += str[char]
  }

  let uname = document.getElementById("user").value
  if (uname.includes(" ")) {
    nuname = uname.replace(" ", "_")
  } else {
    nuname = uname + "."
  }

  newuname = nuname.toLowerCase() + Math.floor(Math.random() * 100)
}
async function run() {

  await processInput()
  await call("connecting", "Connecting to the server....", 2000)

  await call("hacking", `Hacking ${document.getElementById("user").value}'s Account....Please wait....`, 3000)

  await call("fuser", "Username: ")
  await call("found", newuname, 2000)
  await call("passtxt", "Password: ")


  p8("p", str.replace(pswrd8[0], "") + pswrd8[0], 25)
  p8("a", str.replace(pswrd8[1], "") + pswrd8[1], 35)
  p8("s1", str.replace(pswrd8[2], "") + pswrd8[2], 10)
  p8("s2", str.replace(pswrd8[3], "") + pswrd8[3])
  p8("w", str.replace(pswrd8[4], "") + pswrd8[4], 47)
  p8("o", str.replace(pswrd8[5], "") + pswrd8[5], 20)
  p8("r", str.replace(pswrd8[6], "") + pswrd8[6])
  await p8("d", str.replace(pswrd8[7], "") + pswrd8[7], 45, 1000)

  await call("hacked", "System Hacked Successfully.....👹")
}
