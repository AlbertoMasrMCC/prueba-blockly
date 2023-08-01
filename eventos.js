const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Condicionales",
        "contents": [
            {
                "kind": "block",
                "type": "controls_if"
            }
        ]
      },
      {
        "kind": "category",
        "name": "Bucles",
        "contents": [
            {
                "kind": "block",
                "type": "controls_repeat_ext"
            }
        ]
      },
      {
        "kind": "category",
        "name": "Matemáticas",
        "contents": [
            {
                "kind": "block",
                "type": "logic_compare"
            },
            {
                "kind": "block",
                "type": "math_number"
            },
            {
                "kind": "block",
                "type": "math_arithmetic"
            }
        ]
      },
      {
        "kind": "category",
        "name": "Texto",
        "contents": [
            {
                "kind": "block",
                "type": "text"
            },
            {
                "kind": "block",
                "type": "text_print"
            }
        ]
      }
    ]
  }

const move = {
scrollbars: true
}

const zoom = {
controls: true
}

function updateCode(event) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);

    if (code === '') {
        habilitarDeshabilitarBotonEjecutar(true);
    }
    else {
        habilitarDeshabilitarBotonEjecutar(false);
    }

    document.getElementById('taCodigo').value = code;
}

function runCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    
    try {
        eval(code);
    } catch (e) {
        alert(e);
    }
}

function habilitarDeshabilitarBotonEjecutar(habilitar) {
    btnEjecutar.disabled = habilitar;
}

const workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox, move: move, zoom: zoom });

workspace.addChangeListener(updateCode)

const btnEjecutar = document.getElementById('btnEjecutar');
btnEjecutar.addEventListener('click', runCode)
