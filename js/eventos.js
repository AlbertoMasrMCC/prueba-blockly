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
            },
            {
                "kind": "block",
                "type": "controls_if_else"
            }
            // Puedes agregar más bloques de condicionales aquí
        ]
    },
    {
        "kind": "category",
        "name": "Bucles",
        "contents": [
          {
                "kind": "block",
                "type": "controls_repeat_ext"
          },
          {
                "kind": "block",
                "type": "controls_whileUntil"
          },
          {
                "kind": "block",
                "type": "controls_for"
          },
          {
                "kind": "block",
                "type": "controls_forEach"
          }
          // Puedes agregar más bloques de bucles aquí
        ]
      },
      {
        "kind": "category",
        "name": "Operadores Lógicos",
        "contents": [
          {
                "kind": "block",
                "type": "logic_compare"
          },
          {
                "kind": "block",
                "type": "logic_operation"
          },
          {
                "kind": "block",
                "type": "logic_negate"
          },
          {
                "kind": "block",
                "type": "logic_boolean"
          }
          // Puedes agregar más bloques de operadores lógicos aquí
        ]
      },
      {
        "kind": "category",
        "name": "Operadores Aritméticos",
        "contents": [
          {
                "kind": "block",
                "type": "math_number"
          },
          {
                "kind": "block",
                "type": "math_arithmetic"
          },
          {
                "kind": "block",
                "type": "math_single"
          },
          {
                "kind": "block",
                "type": "math_random_int"
          }
          // Puedes agregar más bloques de operadores aritméticos aquí
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
            "type": "text_join"
          },
          {
            "kind": "block",
            "type": "text_append"
          },
          {
            "kind": "block",
            "type": "text_length"
          },
          {
            "kind": "block",
            "type": "text_isEmpty"
          },
          {
            "kind": "block",
            "type": "text_print"
          }
          // Puedes agregar más bloques de manejo de texto aquí
        ]
      },
      {
        "kind": "category",
        "name": "Variables",
        "contents": [
          {
            "kind": "button",
            "custom": "VARIABLE"
          },
          {
            "kind": "block",
            "type": "variables_get"
          },
          {
            "kind": "block",
            "type": "variables_set"
          }
          // Puedes agregar más bloques de manejo de variables aquí
        ]
      },
      {
        "kind": "category",
        "name": "Funciones",
        "contents": [
          {
            "kind": "block",
            "type": "procedures_defreturn"
          },
          {
            "kind": "block",
            "type": "procedures_callreturn"
          },
          {
            "kind": "block",
            "type": "procedures_defnoreturn"
          },
          {
            "kind": "block",
            "type": "procedures_callnoreturn"
          },
          {
            "kind": "block",
            "type": "procedures_ifreturn"
          },
          // Puedes agregar más bloques de manejo de funciones aquí
        ]
      },
      {
        "kind": "category",
        "name": "Figuras",
        "contents": [
            {
                "kind": "block",
                "type": "babylon_create_shape"
            }
        ]
      },
      {
        "kind": "category",
        "name": "Cámara",
        "contents": [
          {
            "kind": "block",
            "type": "babylon_create_camera"
          }
        ]
      },
      {
        "kind": "category",
        "name": "Luz",
        "contents": [
          {
            "kind": "block",
            "type": "babylon_create_light"
          }
        ]
      },
      {
        "kind": "category",
        "name": "Suelo",
        "contents": [
          {
            "kind": "block",
            "type": "babylon_create_ground"
          }
        ]
      },
      {
        "kind": "category",
        "name": "Material",
        "contents": [
          {
            "kind": "block",
            "type": "babylon_create_material"
          },
          {
            "kind": "block",
            "type": "babylon_set_material"
          }
        ]
      },
      {
        "kind": "category",
        "name": "Textura",
        "contents": [
          {
            "kind": "block",
            "type": "babylon_set_material_color"
          }
        ]
      },
      {
        "kind": "category",
        "name": "Colores",
        "contents": [
          {
            "kind": "block",
            "type": "color_rgb"
          },
          {
            "kind": "block",
            "type": "color_hex"
          },
          {
            "kind": "block",
            "type": "color_picker"
          }
        ]
      },
      {
        "kind": "category",
        "name": "Acciones",
        "contents": [
          {
            "kind": "block",
            "type": "babylon_create_action"
          },
          {
            "kind": "block",
            "type": "babylon_register_action"
          }
        ]
      },
      {
        "kind": "category",
        "name": "Transformaciones",
        "contents": [
          {
            "kind": "block",
            "type": "babylon_transform"
          }
        ]
      },
      {
        "kind": "category",
        "name": "Mensajes",
        "contents": [
          {
            "kind": "block",
            "type": "babylon_show_message_writing"
          },
          {
            "kind": "block",
            "type": "babylon_show_message_variable"
          },
          {
            "kind": "block",
            "type": "babylon_show_message_block"
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

function createFile(bloquesJSON) {
  const file = new Blob([bloquesJSON], {type: 'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = 'bloques.json';
  a.click();
}

function downloadCode() {
  
  const state = Blockly.serialization.workspaces.save(workspace);

  if(Object.keys(state).length === 0) {
    alert('No hay código para descargar');
    return;
  }
  
  const bloquesJSON = JSON.stringify(state);

  createFile(bloquesJSON);

}

function uploadCode() {

  aCargar.click();

}

function uploadFile() {
  const file = aCargar.files[0];

  if(!file) {
    alert('No se ha seleccionado ningún archivo');
    return;
  }

  const reader = new FileReader();

  reader.onload = function(event) {
    const contenido = event.target.result;

    const bloquesJSON = JSON.parse(contenido);

    if(!bloquesJSON.hasOwnProperty('blocks')) {
      alert('El archivo seleccionado no es válido');
      return;
    }

    Blockly.serialization.workspaces.load(bloquesJSON, workspace);
  }

  reader.readAsText(file);

}

function runCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    
    try {
        // Abrir una nueva ventana con el código de la variable codigoJS
        window.href = "_blank", window.open().document.write(obtenerCodigo());
    } catch (e) {
        alert(e);
    }
}

function habilitarDeshabilitarBotonEjecutar(habilitar) {
    btnEjecutar.disabled = habilitar;
}

const workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox, move: move, zoom: zoom });

// Reservar palabras para que no se puedan usar como variables en el código generado

// // Funciones para la creación de cámara
// Blockly.JavaScript.addReservedWords('createArcRotateCamera');
// Blockly.JavaScript.addReservedWords('createFreeCamera');

// // Funciones para la creación de luz
// Blockly.JavaScript.addReservedWords('createDirectionalLight');
// Blockly.JavaScript.addReservedWords('createHemisphericLight');
// Blockly.JavaScript.addReservedWords('createPointLight');
// Blockly.JavaScript.addReservedWords('createSpotLight');

// // Funciones para la creación de figuras
// Blockly.JavaScript.addReservedWords('createBox');
// Blockly.JavaScript.addReservedWords('createSphere');
// Blockly.JavaScript.addReservedWords('createCylinder');

workspace.addChangeListener(updateCode);

const btnDescargar = document.getElementById('btnDescargar');
btnDescargar.addEventListener('click', downloadCode);

const btnCargar = document.getElementById('btnCargar');
btnCargar.addEventListener('click', uploadCode);
const aCargar = document.getElementById('aCargar');
aCargar.addEventListener('change', uploadFile);

const btnEjecutar = document.getElementById('btnEjecutar');
btnEjecutar.addEventListener('click', runCode);

function obtenerCodigo() {
    return `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Babylon.js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.2/dat.gui.min.js"></script>
        <script src="https://assets.babylonjs.com/generated/Assets.js"></script>
        <script src="https://cdn.babylonjs.com/recast.js"></script>
        <script src="https://cdn.babylonjs.com/ammo.js"></script>
        <script src="https://cdn.babylonjs.com/havok/HavokPhysics_umd.js"></script>
        <script src="https://cdn.babylonjs.com/cannon.js"></script>
        <script src="https://cdn.babylonjs.com/Oimo.js"></script>
        <script src="https://cdn.babylonjs.com/earcut.min.js"></script>
        <script src="https://cdn.babylonjs.com/babylon.js"></script>
        <script src="https://cdn.babylonjs.com/materialsLibrary/babylonjs.materials.min.js"></script>
        <script src="https://cdn.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js"></script>
        <script src="https://cdn.babylonjs.com/postProcessesLibrary/babylonjs.postProcess.min.js"></script>
        <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.js"></script>
        <script src="https://cdn.babylonjs.com/serializers/babylonjs.serializers.min.js"></script>
        <script src="https://cdn.babylonjs.com/gui/babylon.gui.min.js"></script>
        <script src="https://cdn.babylonjs.com/inspector/babylon.inspector.bundle.js"></script>
    
        <style>
            html, body {
                overflow: hidden;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
            }
    
            #renderCanvas {
                width: 100%;
                height: 100%;
                touch-action: none;
            }
            
            #canvasZone {
                width: 100%;
                height: 100%;
            }
        </style>
    
        <title>BabylonJS</title>
    </head>
    <body>
        <div id="canvasZone"><canvas id="renderCanvas"></canvas></div>
        <script>
          const canvas = document.getElementById("renderCanvas");
    
          const engine = new BABYLON.Engine(canvas, true);

          const createScene = () => {
            const scene = new BABYLON.Scene(engine);

            scene.clearColor = BABYLON.Color3.FromHexString("#D0D3D4");
    
            // Código generado por el usuario
            ${document.getElementById('taCodigo').value}
    
            return scene;
          };

          const scene = createScene();

          engine.runRenderLoop(function () {
              scene.render();
          });

          window.addEventListener("resize", function () {
              engine.resize();
          });
        </script>
    </body>
    </html>
    `
}
